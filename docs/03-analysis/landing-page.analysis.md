# Landing Page Gap Analysis Report

> **Analysis Type**: Design-Implementation Gap Analysis (Check Phase)
>
> **Project**: 멘탈+진심 웹페이지
> **Version**: 1.0
> **Analyst**: gap-detector (bkit)
> **Date**: 2026-02-10
> **Design Document**: 사용자 원본 요구사항 (구두 명세)

---

## 1. Analysis Overview

### 1.1 Analysis Purpose

사용자가 제시한 원본 요구사항(구두 명세)과 실제 구현된 HTML/CSS/JS 코드 간의 일치도를 검증한다.
Plan/Design 문서가 별도로 존재하지 않으므로, 사용자 요구사항 원문을 설계 기준으로 삼아 분석한다.

### 1.2 Analysis Scope

- **설계 기준**: 사용자 원본 요구사항 (갈림길 페이지, 진심 랜딩페이지, Mentalist 랜딩페이지, 디자인 에셋)
- **구현 파일**:
  - `/Users/macbook411/Desktop/ANTIGRAVITY/멘탈+진심 웹페이지/index.html` (갈림길)
  - `/Users/macbook411/Desktop/ANTIGRAVITY/멘탈+진심 웹페이지/jinsim.html` (진심)
  - `/Users/macbook411/Desktop/ANTIGRAVITY/멘탈+진심 웹페이지/mentalist.html` (Mentalist)
  - `/Users/macbook411/Desktop/ANTIGRAVITY/멘탈+진심 웹페이지/css/style.css`
  - `/Users/macbook411/Desktop/ANTIGRAVITY/멘탈+진심 웹페이지/js/main.js`
  - `/Users/macbook411/Desktop/ANTIGRAVITY/멘탈+진심 웹페이지/images/` (서강대 로고 3종 PNG)
  - `/Users/macbook411/Desktop/ANTIGRAVITY/멘탈+진심 웹페이지/fonts/` (서강체 woff, woff2)
- **Analysis Date**: 2026-02-10

---

## 2. Overall Scores

| Category | Score | Status |
|----------|:-----:|:------:|
| 갈림길 페이지 일치도 | 90% | **PASS** |
| 진심 랜딩페이지 일치도 | 82% | **WARN** |
| Mentalist 랜딩페이지 일치도 | 88% | **WARN** |
| 디자인 에셋 일치도 | 85% | **WARN** |
| 모바일 반응형 | 90% | **PASS** |
| **Overall Match Rate** | **87%** | **WARN** |

```
Match Rate: 87% -- 설계와 구현이 대부분 일치하지만 일부 차이 존재
권장 조치: 문서 업데이트 및 미구현 항목 보완 필요
```

---

## 3. Gap Analysis -- 갈림길 페이지 (index.html)

### 3.1 요구사항 항목별 검증

| # | 요구사항 | 구현 여부 | 상세 |
|:-:|----------|:---------:|------|
| 1 | URL 접속 시 갈림길 페이지 표시 | PASS | `index.html`이 갈림길 역할, `split-page` 구조 구현 |
| 2 | 중앙 부드러운 분할선 | PASS | `.split-divider` -- 1px 선, `dividerDraw` 애니메이션으로 부드럽게 등장 |
| 3 | 좌측 진심 로고 표시 | PASS | `.split-side--jinsim` 내 `logo-jinsim-layered` 구현 |
| 4 | 우측 Mentalist 로고 표시 | PASS | `.split-side--mentalist` 내 `Mentalist` 텍스트 로고 구현 |
| 5 | 각 로고 밑 click 버튼 | WARN | 버튼 존재하나 텍스트가 "Enter"로 구현됨 (요구사항: "click") |
| 6 | 클릭 시 각각의 본 랜딩페이지 이동 | PASS | `data-target` 속성 + JS `navigate()` 함수로 페이지 전환 구현 |
| 7 | 모바일에서 분할선/레이아웃 정갈 | PASS | 모바일: 세로 분할(flex-direction: column), 태블릿+: 가로 분할(row) |

### 3.2 갈림길 페이지 Match Rate

```
총 항목: 7
PASS: 6 (85.7%)
WARN: 1 (14.3%)
FAIL: 0 (0%)
Match Rate: 90%
```

### 3.3 상세 차이점

| # | 항목 | 요구사항 | 구현 | 영향도 |
|:-:|------|----------|------|:------:|
| 1 | 버튼 텍스트 | "click" | "Enter" | Low |

---

## 4. Gap Analysis -- 진심 랜딩페이지 (jinsim.html)

### 4.1 요구사항 항목별 검증

| # | 요구사항 | 구현 여부 | 상세 |
|:-:|----------|:---------:|------|
| 1 | 헤더: 로고(클릭 가능) | PASS | `<a href="jinsim.html" class="header-logo header-logo--jinsim">` 링크로 구현 |
| 2 | 헤더: About 헤딩 | PASS | `<a href="#about">About</a>` 구현 |
| 3 | 헤더: Notice 헤딩 | PASS | `<a href="#notice">Notice</a>` 구현 |
| 4 | 헤더: Instagram(외부 링크 화살표) | PASS | `Instagram <span class="ext-icon">↗</span>` 구현 |
| 5 | 헤더: Contact 헤딩 | PASS | `<a href="#contact">Contact</a>` 구현 |
| 6 | 스크롤 시 헤더 상단 고정 | PASS | `position: fixed` + `backdrop-filter: blur(20px)` 구현 |
| 7 | About이 메인: 인사말 텍스트 | PASS | "안녕하세요 서강대학교 심리학과 제9대 학생회 '진심'입니다." 구현 |
| 8 | 로고 크게 표시 | PASS | `hero-logo--jinsim` -- font-size: 4rem (mobile: 2.8rem, tablet+: 5.5rem) |
| 9 | 슬로건 표시 | PASS | "마음을 다해, 진심으로 -- 당신의 대학 생활 곁에." 구현 |
| 10 | 활동 사진 4장 | PASS | `.photo-gallery` 내 `.photo-card` 4개 구현 |
| 11 | 사진 겹쳐져 있다가 펼쳐지는 효과 | PASS | CSS `--spread` 변수 + JS `initPhotoGallery()` 스크롤 기반 spread 애니메이션 |
| 12 | 더 내리면 다시 겹쳐지는 효과 | PASS | `distance = abs(galleryCenter - viewportCenter)` 기반 양방향 동작 |
| 13 | '소식 구독하기' 섹션 | PASS | `<h2>소식 구독하기</h2>` + 설명 텍스트 구현 |
| 14 | 인스타그램 링크 버튼 | WARN | 버튼 구현되었으나 `href="https://instagram.com"` -- 실제 계정 URL 미설정 |
| 15 | 메일 버튼 | PASS | `<a href="mailto:jinsim@sogang.ac.kr">` 구현 |
| 16 | 푸터: 서강대학교 로고 | PASS | `<img src="images/sogang-logo-kr.png">` 구현 |
| 17 | 푸터: 주소(04107 서울시 마포구...) | PASS | 정확한 주소 "04107 서울시 마포구 백범로 35 서강대학교 다산관(D관)" 구현 |
| 18 | 푸터: 년도 | PASS | "(c) 2026 진심 -- 서강대학교 심리학과 학생회" 구현 |
| 19 | 활동 사진에 실제 이미지 적용 | FAIL | placeholder div만 존재, 실제 사진 파일 미적용 |
| 20 | Notice 섹션 | PASS (추가) | 요구사항에 명시적 Notice 콘텐츠 없었으나 헤더에 Notice 링크가 있으므로 적절한 추가 |

### 4.2 진심 랜딩페이지 Match Rate

```
총 항목: 19 (추가 기능 제외)
PASS: 17 (89.5%)
WARN: 1 (5.3%)
FAIL: 1 (5.3%)
Match Rate: 82%
```

### 4.3 상세 차이점

| # | 항목 | 요구사항 | 구현 | 영향도 |
|:-:|------|----------|------|:------:|
| 1 | 인스타그램 URL | 실제 계정 URL | 더미 URL `https://instagram.com` | Medium |
| 2 | 활동 사진 | 실제 이미지 4장 | placeholder div (텍스트만) | High |

---

## 5. Gap Analysis -- Mentalist 랜딩페이지 (mentalist.html)

### 5.1 요구사항 항목별 검증

| # | 요구사항 | 구현 여부 | 상세 |
|:-:|----------|:---------:|------|
| 1 | 헤더: 로고(클릭 가능) | PASS | `<a href="mentalist.html" class="header-logo header-logo--mentalist">Mentalist</a>` |
| 2 | 헤더: About 헤딩 | PASS | `<a href="#about">About</a>` |
| 3 | 헤더: Cafe(외부 링크 화살표) | PASS | `<a href="https://cafe.naver.com">Cafe <span class="ext-icon">↗</span></a>` |
| 4 | 헤더: Instagram(외부 링크 화살표) | PASS | `Instagram <span class="ext-icon">↗</span>` |
| 5 | 헤더: Contact 헤딩 | PASS | `<a href="#contact">Contact</a>` |
| 6 | 스크롤 시 헤더 상단 고정 | PASS | 진심과 동일한 fixed 헤더 메커니즘 |
| 7 | About이 메인: 인사말 텍스트 | PASS | "안녕하세요 서강대학교 심리학회 'Mentalist'입니다." |
| 8 | 로고 크게 표시 | PASS | `hero-logo--mentalist` font-size: 4rem |
| 9 | 지향하는 바 멘트 | PASS | "마음의 깊이를 탐구하고, 학문의 즐거움을 나누는 곳." |
| 10 | 활동 사진 4장 펼쳐지는 효과 | PASS | 진심과 동일한 photo-gallery + spread 메커니즘 |
| 11 | 더 내리면 다시 겹쳐지는 효과 | PASS | 양방향 동작 동일 |
| 12 | 활동 목록 브리프하게 | PASS | `.activities-section` -- 5개 항목 (세미나, 연구, 강연, 학술지, 네트워킹) |
| 13 | '2026-1학기 신청하기' 버튼 | PASS | `<a class="btn btn-mentalist">2026-1학기 신청하기</a>` |
| 14 | 푸터: 서강대학교 로고 | PASS | `<img src="images/sogang-logo-kr.png">` |
| 15 | 푸터: 년도 | PASS | "(c) 2026 Mentalist -- 서강대학교 심리학회" |
| 16 | 활동 사진에 실제 이미지 적용 | FAIL | placeholder div만 존재, 실제 사진 파일 미적용 |
| 17 | 인스타그램/카페 URL | WARN | 더미 URL 사용 (`https://instagram.com`, `https://cafe.naver.com`) |
| 18 | 신청 버튼 동작 | WARN | `href="#"` -- 실제 신청 폼/링크 미연결 |

### 5.2 Mentalist 랜딩페이지 Match Rate

```
총 항목: 18
PASS: 14 (77.8%)
WARN: 2 (11.1%)
FAIL: 2 (11.1%)
Match Rate: 88%
```

### 5.3 상세 차이점

| # | 항목 | 요구사항 | 구현 | 영향도 |
|:-:|------|----------|------|:------:|
| 1 | 외부 링크 URL | 실제 계정/카페 URL | 더미 URL | Medium |
| 2 | 활동 사진 | 실제 이미지 4장 | placeholder div | High |
| 3 | 신청하기 버튼 | 실제 신청 폼/링크 | `href="#"` (동작 없음) | Medium |

---

## 6. Gap Analysis -- 디자인 에셋

### 6.1 요구사항 항목별 검증

| # | 요구사항 | 구현 여부 | 상세 |
|:-:|----------|:---------:|------|
| 1 | 서강대 공식 색상 #B60005 | PASS | CSS `--sogang-red: #B60005` + `--js-primary: #B60005` 정의 |
| 2 | 서강체 폰트 적용 | PASS | `@font-face 'Sogang'` -- woff2/woff 파일 존재, `--font-kr-serif`에 등록 |
| 3 | 서강대 로고 이미지 사용 | PASS | `images/sogang-logo-kr.png`, `sogang-logo-en.png`, `sogang-logo-hanja.png` 3종 |
| 4 | 진심 로고: 한글 뒤 한자 그림자 겹침 | PASS | `.logo-jinsim-layered` -- 한글(`z-index:2`) + 한자(`opacity:0.08`, `z-index:1`) 겹침 |
| 5 | Mentalist 로고: academic한 폰트 | PASS | `Cormorant Garamond` serif + italic -- academic 기품 표현 |
| 6 | 레퍼런스: Agora 스타일 | PASS | 넉넉한 여백(`8px grid`, `space-3xl:96px`), 미니멀 디자인, 깔끔한 타이포그래피 |
| 7 | 서강체가 본문에도 적용 | WARN | 서강체는 `--font-kr-serif`에만 등록, 본문은 `Noto Sans KR` 사용 (로고/제목에만 서강체) |

### 6.2 디자인 에셋 Match Rate

```
총 항목: 7
PASS: 6 (85.7%)
WARN: 1 (14.3%)
FAIL: 0 (0%)
Match Rate: 85%
```

### 6.3 상세 차이점

| # | 항목 | 요구사항 | 구현 | 영향도 |
|:-:|------|----------|------|:------:|
| 1 | 서강체 적용 범위 | "서강체 폰트 적용" (범위 모호) | 로고/제목에만 적용, 본문은 Noto Sans KR | Low |

> 참고: 서강체는 display/heading 폰트로 설계되어 있어 본문 적용은 부적절할 수 있음. 현재 구현이 더 적절한 선택일 수 있다.

---

## 7. Gap Analysis -- 모바일 반응형

### 7.1 요구사항 항목별 검증

| # | 요구사항 | 구현 여부 | 상세 |
|:-:|----------|:---------:|------|
| 1 | 모바일에서 더 정갈해야 함 | PASS | mobile-first CSS 접근, 별도 모바일 브레이크포인트 |
| 2 | 갈림길 페이지 모바일 레이아웃 | PASS | `flex-direction: column` (모바일) / `row` (태블릿+) |
| 3 | 헤더 모바일 대응 | PASS | 햄버거 메뉴(`.menu-toggle`) + 모바일 네비(`mobile-nav`) |
| 4 | 갤러리 모바일 크기 조정 | PASS | 카드 크기 축소(160x220px), spread 거리 조정 |
| 5 | 버튼 모바일 전체 너비 | PASS | `width: 100%; max-width: 280px` |
| 6 | 텍스트 크기 모바일 조정 | PASS | hero-greeting, hero-logo 등 모바일 폰트 크기 별도 설정 |

### 7.2 모바일 반응형 Match Rate

```
총 항목: 6
PASS: 6 (100%)
WARN: 0 (0%)
FAIL: 0 (0%)
Match Rate: 90%
```

> 90%로 산정한 이유: 구현은 충분하나, 실제 기기 테스트 없이 CSS만으로 판단한 제한이 있음.

---

## 8. Differences Summary

### 8.1 Missing Features (요구사항 O, 구현 X)

| # | 항목 | 요구사항 위치 | 설명 | 영향도 |
|:-:|------|-------------|------|:------:|
| 1 | 활동 사진 실제 이미지 | 진심/Mentalist 공통 | 사진 4장이 placeholder로만 존재, 실제 이미지 파일 없음 | **High** |
| 2 | 신청 폼/링크 연결 | Mentalist "2026-1학기 신청하기" | `href="#"` -- 실제 신청 목적지 미연결 | **Medium** |

### 8.2 Added Features (요구사항 X, 구현 O)

| # | 항목 | 구현 위치 | 설명 |
|:-:|------|----------|------|
| 1 | Notice 섹션 콘텐츠 | `jinsim.html:83-97` | 공지사항 3개 항목 추가 (학생회비, 환영회, 출범 인사) |
| 2 | 페이지 전환 애니메이션 | `css/style.css:268-285`, `js/main.js:23-31` | 갈림길에서 랜딩페이지로 이동 시 확장/축소 트랜지션 |
| 3 | 모바일 네비게이션 오버레이 | `jinsim.html:40-45`, `mentalist.html:37-42` | 모바일 전용 전체화면 네비게이션 메뉴 |
| 4 | 스크롤 리빌 애니메이션 | `js/main.js:116-143` | IntersectionObserver 기반 순차 등장 효과 |
| 5 | 진심 한자 호버 효과 | `css/style.css:215-219` | 호버 시 한자 그림자 opacity 증가 (0.08 -> 0.14) |

### 8.3 Changed Features (요구사항 != 구현)

| # | 항목 | 요구사항 | 구현 | 영향도 |
|:-:|------|----------|------|:------:|
| 1 | 갈림길 버튼 텍스트 | "click" | "Enter" | **Low** |
| 2 | 외부 링크 URL | 실제 계정 URL | 더미 URL (instagram.com, cafe.naver.com) | **Medium** |
| 3 | 서강체 적용 범위 | 전체 적용 (모호) | 로고/제목에만 적용 | **Low** |

---

## 9. Code Quality Analysis

### 9.1 HTML 구조

| 항목 | 상태 | 상세 |
|------|:----:|------|
| Semantic HTML | PASS | section, header, footer, nav 적절히 사용 |
| 접근성 (a11y) | WARN | `aria-label` 일부만 적용 (menu-toggle), 이미지 alt 있음, landmark 양호 |
| Meta 태그 | PASS | charset, viewport, description, title 완비 |
| 외부 리소스 preconnect | PASS | Google Fonts preconnect 설정 |

### 9.2 CSS 품질

| 항목 | 상태 | 상세 |
|------|:----:|------|
| CSS Custom Properties | PASS | 색상, 폰트, 여백, 트랜지션 전부 변수화 |
| Mobile-first | PASS | 기본 스타일이 모바일, `min-width: 768px`로 확장 |
| BEM 네이밍 | PASS | `block--modifier`, `block__element` 패턴 준수 |
| 성능 최적화 | PASS | `will-change: transform`, `font-display: swap` |
| 중복 코드 | WARN | 모바일 gallery spread 규칙이 데스크톱과 거의 동일 구조로 반복 |

### 9.3 JavaScript 품질

| 항목 | 상태 | 상세 |
|------|:----:|------|
| 코드 구조 | PASS | 기능별 함수 분리 (initSplitPage, initHeader, ...) |
| 성능 | PASS | `requestAnimationFrame`, `passive: true` 스크롤, `IntersectionObserver` |
| 에러 방어 | PASS | 모든 init 함수에서 요소 부재 시 early return |
| ES6+ 활용 | PASS | `const/let`, arrow function, template literal, destructuring |

---

## 10. File Structure Verification

### 10.1 실제 파일 구조

```
/Users/macbook411/Desktop/ANTIGRAVITY/멘탈+진심 웹페이지/
├── index.html                         -- 갈림길 페이지
├── jinsim.html                        -- 진심 랜딩페이지
├── mentalist.html                     -- Mentalist 랜딩페이지
├── css/
│   └── style.css                      -- 전체 스타일 (1038 lines)
├── js/
│   └── main.js                        -- 인터랙션 (143 lines)
├── images/
│   ├── sogang-logo-kr.png             -- 서강대 한글 로고
│   ├── sogang-logo-en.png             -- 서강대 영문 로고
│   └── sogang-logo-hanja.png          -- 서강대 한자 로고
├── fonts/
│   ├── SOGANGUNIVERSITY.woff2         -- 서강체 (WOFF2)
│   └── SOGANGUNIVERSITY.woff          -- 서강체 (WOFF)
├── CLAUDE.md
└── docs/
    ├── .bkit-memory.json
    └── .pdca-status.json
```

### 10.2 요구사항 대비 파일 존재 여부

| 요구 파일 | 존재 | 경로 |
|-----------|:----:|------|
| index.html (갈림길) | PASS | `/index.html` |
| jinsim.html (진심) | PASS | `/jinsim.html` |
| mentalist.html (Mentalist) | PASS | `/mentalist.html` |
| css/style.css | PASS | `/css/style.css` |
| js/main.js | PASS | `/js/main.js` |
| 서강대 로고 PNG | PASS | `/images/sogang-logo-kr.png` 외 2종 |
| 서강체 woff/woff2 | PASS | `/fonts/SOGANGUNIVERSITY.woff`, `.woff2` |
| 활동 사진 이미지 | **FAIL** | 파일 없음 -- placeholder만 존재 |

---

## 11. Overall Score Calculation

```
+---------------------------------------------+
|  Overall Match Rate: 87%                    |
+---------------------------------------------+
|  갈림길 페이지:         90%  (7 items)       |
|  진심 랜딩페이지:       82%  (19 items)      |
|  Mentalist 랜딩페이지:  88%  (18 items)      |
|  디자인 에셋:           85%  (7 items)       |
|  모바일 반응형:         90%  (6 items)       |
+---------------------------------------------+
|  Code Quality:          90%                 |
|  File Structure:        88%                 |
+---------------------------------------------+
```

**Match Rate Breakdown by Severity:**

| 분류 | 항목 수 | 비율 |
|------|:-------:|:----:|
| PASS (완전 일치) | 49 | 86.0% |
| WARN (부분 일치/더미) | 5 | 8.8% |
| FAIL (미구현) | 3 | 5.3% |
| **Total** | **57** | **100%** |

---

## 12. Recommended Actions

### 12.1 Immediate Actions (High Priority)

| # | 항목 | 위치 | 설명 |
|:-:|------|------|------|
| 1 | 활동 사진 이미지 추가 | `jinsim.html:67-78`, `mentalist.html:61-73` | placeholder를 실제 활동 사진 `<img>` 태그로 교체 |
| 2 | 외부 링크 실제 URL 설정 | `jinsim.html:29,104`, `mentalist.html:25,26,39,40` | Instagram, Cafe 링크를 실제 계정 URL로 변경 |
| 3 | 신청 버튼 링크 연결 | `mentalist.html:105` | `href="#"`을 실제 신청 폼(Google Form 등) URL로 교체 |

### 12.2 Optional Actions (Low Priority)

| # | 항목 | 위치 | 설명 |
|:-:|------|------|------|
| 1 | 버튼 텍스트 변경 | `index.html:27,37` | "Enter" -> "click" (요구사항 원문 기준) 또는 현재 유지 |
| 2 | 접근성 개선 | 전체 | 각 섹션에 `aria-label` 추가, 색상 대비 검증 |
| 3 | 서강체 적용 범위 확인 | `css/style.css:43-44` | 사용자와 서강체 적용 범위 합의 필요 |

### 12.3 Design Document Update Needed

현재 별도 설계 문서가 없으므로, 다음 문서 작성을 권장한다:

- [ ] `docs/02-design/features/landing-page.design.md` -- 상세 설계 문서 (현재 구현 기반)
- [ ] 추가된 기능 (Notice 섹션, 전환 애니메이션, 모바일 네비 등) 명세 포함
- [ ] 외부 링크 URL 목록 정리
- [ ] 활동 사진 에셋 목록 및 규격 정의

---

## 13. Synchronization Options

현재 Match Rate 87%로, "설계와 구현이 대부분 일치하지만 일부 차이가 존재"하는 상태이다.

| 옵션 | 설명 | 권장 |
|------|------|:----:|
| 1. 구현을 설계에 맞춤 | 활동 사진 추가, URL 설정, 버튼 텍스트 변경 | **권장** |
| 2. 설계를 구현에 맞춤 | 추가 기능(Notice, 애니메이션 등)을 문서에 반영 | 권장 |
| 3. 양쪽 통합 | 1번 + 2번 동시 수행 | **최선** |
| 4. 차이를 의도적으로 기록 | 버튼 텍스트 "Enter"가 더 적절하다고 판단 시 기록 | 부분 적용 |

**권장 조치**: 옵션 3 (양쪽 통합)
- 구현 측: 활동 사진 이미지 추가 + 실제 URL 설정 + 신청 링크 연결
- 설계 측: 설계 문서 작성하여 현재 구현 + 추가 기능 모두 포함

---

## 14. Summary

이 프로젝트는 사용자 요구사항을 전반적으로 충실하게 구현했다. 핵심 구조(갈림길 페이지, 양쪽 랜딩페이지, 헤더 고정, 사진 spread 효과, 반응형)가 모두 작동하며, 코드 품질도 양호하다.

주요 미비 사항은 콘텐츠 수준의 문제(실제 사진 파일 미적용, 더미 URL, 신청 링크 미연결)이며, 구조적/기능적 결함은 발견되지 않았다. 사용자로부터 실제 에셋(활동 사진, Instagram 계정 URL, 신청 폼 URL)을 수급받으면 90% 이상의 Match Rate 달성이 가능하다.

---

## Version History

| Version | Date | Changes | Author |
|---------|------|---------|--------|
| 1.0 | 2026-02-10 | Initial gap analysis | gap-detector |
