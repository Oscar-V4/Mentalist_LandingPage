# Landing Page Gap Analysis Report (v3.0)

> **Analysis Type**: Design-Implementation Gap Analysis (Check Phase)
>
> **Project**: 멘탈+진심 웹페이지
> **Version**: 3.0
> **Analyst**: gap-detector (bkit)
> **Date**: 2026-03-01
> **Previous Analysis**: v2.0 (2026-02-22, Match Rate 97%)

---

## 1. Analysis Overview

### 1.1 Analysis Purpose

2026-02-22 이후 적용된 변경 사항에 대한 전면 갭 분석 수행. 주요 변경 내역:

1. 섹션 1-3 (토론, 논문, 발제): 플레이스홀더를 실제 사진으로 교체
2. CTA 섹션: KakaoTalk 오픈채팅 Q&A 버튼 추가
3. CTA 섹션: Instagram 버튼 추가
4. 섹션 4-5 (다과회, 친목): 기존 실사진 유지

v2.0 분석에서 잔존한 WARN 항목 2건의 현재 상태도 함께 검증한다.

### 1.2 Analysis Scope

- **Design Basis**: .pdca-status.json "landing-page" feature spec + v2.0 report 기준
- **Implementation Files**:
  - `/Users/macbook411/Desktop/ANTIGRAVITY/멘탈+진심 웹페이지/mentalist.html` (159 lines)
  - `/Users/macbook411/Desktop/ANTIGRAVITY/멘탈+진심 웹페이지/index.html` (44 lines)
  - `/Users/macbook411/Desktop/ANTIGRAVITY/멘탈+진심 웹페이지/jinsim.html` (128 lines)
  - `/Users/macbook411/Desktop/ANTIGRAVITY/멘탈+진심 웹페이지/css/style.css` (1237 lines)
  - `/Users/macbook411/Desktop/ANTIGRAVITY/멘탈+진심 웹페이지/js/main.js` (143 lines)
- **Analysis Date**: 2026-03-01

---

## 2. Overall Scores

| Category | Items | Matched | Score | Status |
|----------|:-----:|:-------:|:-----:|:------:|
| 사진 교체 검증 (섹션 1-5) | 12 | 12 | 100% | **PASS** |
| CTA 섹션 (신규 버튼) | 8 | 8 | 100% | **PASS** |
| CSS 신규 스타일 | 4 | 4 | 100% | **PASS** |
| HTML 구조 일관성 | 10 | 10 | 100% | **PASS** |
| JS 기능 | 5 | 5 | 100% | **PASS** |
| 반응형 (767px) | 10 | 10 | 100% | **PASS** |
| 외부 링크 정합성 | 8 | 6 | 75% | **WARN** |
| BEM / Convention 준수 | 8 | 8 | 100% | **PASS** |
| v2.0 잔존 WARN 재검증 | 2 | 0 | 0% | **WARN** |
| Cross-page 일관성 | 6 | 4 | 67% | **WARN** |
| **Overall** | **73** | **67** | **92%** | **PASS** |

```
+---------------------------------------------+
|  Overall Match Rate: 92%                    |
+---------------------------------------------+
|  PASS:  67 items (91.8%)                    |
|  WARN:   6 items ( 8.2%)                    |
|  FAIL:   0 items ( 0.0%)                    |
+---------------------------------------------+
```

---

## 3. Gap Analysis -- 사진 교체 검증

### 3.1 섹션 1: 토론 (2 photos)

| # | Check Point | v2.0 State | Current Implementation | Status |
|:-:|-------------|------------|------------------------|:------:|
| 1 | 사진 1 실제 파일 | placeholder | `images/mentalist/01-discussion/1.jpeg` (line 62) | PASS |
| 2 | 사진 2 실제 파일 | placeholder | `images/mentalist/01-discussion/2.png` (line 65) | PASS |

**Evidence** (mentalist.html:61-66):
```html
<div class="intro__photo">
  <img src="images/mentalist/01-discussion/1.jpeg" alt="토론 활동">
</div>
<div class="intro__photo intro__photo--offset">
  <img src="images/mentalist/01-discussion/2.png" alt="토론 활동">
</div>
```

### 3.2 섹션 2: 논문 분야 (4 photos)

| # | Check Point | v2.0 State | Current Implementation | Status |
|:-:|-------------|------------|------------------------|:------:|
| 3 | 사진 1 실제 파일 | placeholder | `images/mentalist/02-papers/KakaoTalk_Photo_2026-03-01-16-43-11 001.jpeg` (line 75) | PASS |
| 4 | 사진 2 실제 파일 | placeholder | `images/mentalist/02-papers/스크린샷 2026-03-01 오후 5.30.50.png` (line 78) | PASS |
| 5 | 사진 3 실제 파일 | placeholder | `images/mentalist/02-papers/스크린샷 2026-03-01 오후 5.34.55.png` (line 81) | PASS |
| 6 | 사진 4 실제 파일 | placeholder | `images/mentalist/02-papers/스크린샷 2026-03-01 오후 6.32.47.png` (line 84) | PASS |

### 3.3 섹션 3: 발제 (1 photo)

| # | Check Point | v2.0 State | Current Implementation | Status |
|:-:|-------------|------------|------------------------|:------:|
| 7 | 사진 실제 파일 | placeholder | `images/mentalist/03-presentation/스크린샷 2026-03-01 오후 5.00.06.png` (line 94) | PASS |

### 3.4 섹션 4: 다과회/특강 (2 photos, 기존 유지)

| # | Check Point | v2.0 State | Current Implementation | Status |
|:-:|-------------|------------|------------------------|:------:|
| 8 | 사진 1 실제 파일 | real photo | `images/mentalist/04-seminar/KakaoTalk_Photo_2026-02-22-20-14-44 004.jpeg` (line 104) | PASS |
| 9 | 사진 2 실제 파일 | real photo | `images/mentalist/04-seminar/KakaoTalk_Photo_2026-02-22-20-14-46 015.jpeg` (line 107) | PASS |

### 3.5 섹션 5: 친목 활동 (3 photos, 기존 유지)

| # | Check Point | v2.0 State | Current Implementation | Status |
|:-:|-------------|------------|------------------------|:------:|
| 10 | 사진 1 실제 파일 | real photo | `images/mentalist/05-social/KakaoTalk_Photo_2026-02-22-20-14-45 008.jpeg` (line 117) | PASS |
| 11 | 사진 2 실제 파일 | real photo | `images/mentalist/05-social/KakaoTalk_Photo_2026-02-22-20-14-45 009.jpeg` (line 120) | PASS |
| 12 | 사진 3 실제 파일 | real photo | `images/mentalist/05-social/KakaoTalk_Photo_2026-02-22-20-14-46 016.jpeg` (line 123) | PASS |

**Summary**: 모든 12개 이미지가 `<img>` 태그로 실제 사진 파일을 참조하고 있으며, `photo-placeholder` div는 mentalist.html에서 완전히 제거되었다 (grep 결과 0건).

**Result**: 100% Match -- 12/12 items passed.

---

## 4. Gap Analysis -- CTA 섹션 (신규 버튼)

### 4.1 기존 Google Forms 버튼 (유지)

| # | Check Point | Implementation | Status |
|:-:|-------------|----------------|:------:|
| 1 | Hero CTA 존재 | line 55: `<a href="https://docs.google.com/forms/d/..." class="btn btn-mentalist hero-cta">` | PASS |
| 2 | 하단 CTA 존재 | line 134: `<a href="https://docs.google.com/forms/d/..." class="btn btn-mentalist">` | PASS |
| 3 | URL 동일 | Hero URL === 하단 URL (동일 Google Forms ID) | PASS |

### 4.2 KakaoTalk Q&A 버튼 (신규)

| # | Check Point | Implementation | Status |
|:-:|-------------|----------------|:------:|
| 4 | 버튼 존재 | line 138: `<a href="https://open.kakao.com/o/sIgfBBgi" ... class="btn btn-kakao">` | PASS |
| 5 | URL 정확성 | `https://open.kakao.com/o/sIgfBBgi` -- 유효한 오픈채팅 URL 형식 | PASS |
| 6 | 라벨 | "Q&A 채팅방" (line 140) | PASS |

### 4.3 Instagram 버튼 (신규)

| # | Check Point | Implementation | Status |
|:-:|-------------|----------------|:------:|
| 7 | 버튼 존재 | line 142: `<a href="https://www.instagram.com/mentalist_sogang" ... class="btn btn-instagram">` | PASS |
| 8 | URL 정확성 | `https://www.instagram.com/mentalist_sogang` | PASS |

**Evidence** (mentalist.html:129-147):
```html
<section id="contact" class="cta-section reveal">
  <h2>함께 탐구할 준비가 되셨나요?</h2>
  <p>2026학년도 1학기 신입 학회원을 모집합니다.</p>
  <div class="cta-buttons">
    <a href="https://docs.google.com/forms/d/..." class="btn btn-mentalist">
      <svg ...>...</svg> 2026-1학기 신청하기
    </a>
    <a href="https://open.kakao.com/o/sIgfBBgi" class="btn btn-kakao">
      <svg ...>...</svg> Q&A 채팅방
    </a>
    <a href="https://www.instagram.com/mentalist_sogang" class="btn btn-instagram">
      <svg ...>...</svg> Instagram
    </a>
  </div>
</section>
```

**Result**: 100% Match -- 8/8 items passed.

---

## 5. Gap Analysis -- CSS 신규 스타일

| # | Check Point | Implementation | Status |
|:-:|-------------|----------------|:------:|
| 1 | `.btn-kakao` 스타일 | style.css:934-942 -- `background: #FEE500; color: #191919` + hover | PASS |
| 2 | `.btn-kakao:hover` | style.css:939-942 -- `background: #F5DC00; box-shadow` | PASS |
| 3 | `.btn-instagram` 스타일 | style.css:944-952 -- `background: linear-gradient(135deg, #833AB4, #E1306C, #F77737); color: #fff` | PASS |
| 4 | `.btn-instagram:hover` | style.css:949-952 -- gradient shift + `box-shadow` | PASS |

**Evidence** (style.css:934-952):
```css
.btn-kakao {
  background: #FEE500;
  color: #191919;
}
.btn-kakao:hover {
  background: #F5DC00;
  box-shadow: 0 4px 16px rgba(254, 229, 0, 0.35);
}
.btn-instagram {
  background: linear-gradient(135deg, #833AB4, #E1306C, #F77737);
  color: #fff;
}
.btn-instagram:hover {
  background: linear-gradient(135deg, #7232A1, #D42D65, #E06D30);
  box-shadow: 0 4px 16px rgba(225, 48, 108, 0.3);
}
```

**Assessment**: KakaoTalk 공식 노란색(#FEE500)과 Instagram 공식 그라데이션을 정확히 적용. BEM 네이밍(`btn-kakao`, `btn-instagram`)이 기존 패턴(`btn-mentalist`, `btn-jinsim`)과 일관.

**Result**: 100% Match -- 4/4 items passed.

---

## 6. Gap Analysis -- HTML 구조 일관성

| # | Check Point | Implementation | Status |
|:-:|-------------|----------------|:------:|
| 1 | 5개 intro 섹션 존재 | mentalist.html:59, 72, 91, 101, 114 -- 5개 `<section class="intro ...">` | PASS |
| 2 | 섹션 1 layout: duo | `intro__photos--duo` (line 60) | PASS |
| 3 | 섹션 2 layout: gallery | `photo-gallery` (line 73) | PASS |
| 4 | 섹션 3 layout: solo | `intro__photos--solo` (line 92) | PASS |
| 5 | 섹션 4 layout: stagger | `intro__photos--stagger` (line 102) | PASS |
| 6 | 섹션 5 layout: trio | `intro__photos--trio` (line 115) | PASS |
| 7 | CTA section id="contact" | line 130: `<section id="contact" class="cta-section reveal">` | PASS |
| 8 | Header nav #contact link | line 27: `<a href="#contact">Contact</a>` | PASS |
| 9 | Footer 서강대 로고 | line 152: `<img src="images/sogang-logo-kr.png" ...>` | PASS |
| 10 | `<meta description>` | line 7: 심리학회 Mentalist 설명 | PASS |

**Result**: 100% Match -- 10/10 items passed.

---

## 7. Gap Analysis -- JS 기능

| # | Check Point | Implementation | Status |
|:-:|-------------|----------------|:------:|
| 1 | `initSplitPage()` (index.html) | main.js:14-36 -- `.split-page` 감지 후 navigate | PASS |
| 2 | `initHeader()` | main.js:39-53 -- scroll > 10px시 `.scrolled` 추가 | PASS |
| 3 | `initMobileMenu()` | main.js:56-75 -- `.menu-toggle` + `.mobile-nav` 토글 | PASS |
| 4 | `initPhotoGallery()` | main.js:78-113 -- `.photo-gallery` 스크롤 연동 spread | PASS |
| 5 | `initScrollReveal()` | main.js:116-143 -- `.reveal, .intro, .notice-item, .activity-item` 감시 | PASS |

**Result**: 100% Match -- 5/5 items passed.

---

## 8. Gap Analysis -- 반응형 (max-width: 767px)

| # | Check Point | Implementation (style.css) | Status |
|:-:|-------------|----------------------------|:------:|
| 1 | `.intro` padding 축소 | L1155-1157: `padding: var(--space-2xl) var(--space-md) 0` | PASS |
| 2 | `.intro--last` 모바일 | L1159-1161: `padding-bottom: var(--space-3xl)` | PASS |
| 3 | `.intro__text` font-size | L1163-1165: `font-size: 0.82rem` | PASS |
| 4 | `.intro__photo` border-radius | L1167-1169: `border-radius: 8px` | PASS |
| 5 | `.intro__photos--duo` gap | L1171-1173: `gap: var(--space-sm)` | PASS |
| 6 | duo offset 축소 | L1175-1177: `translateY(-8px)` | PASS |
| 7 | `.intro__photos--stagger` gap | L1179-1181: `gap: var(--space-sm)` | PASS |
| 8 | stagger offset 축소 | L1183-1185: `translateY(16px)` | PASS |
| 9 | `.intro__photos--trio` | L1187-1190: `repeat(3, 1fr); gap: var(--space-sm)` | PASS |
| 10 | trio lift 축소 | L1192-1194: `translateY(-10px)` | PASS |

**Result**: 100% Match -- 10/10 items passed.

---

## 9. Gap Analysis -- 외부 링크 정합성

| # | Check Point | Location | URL | Status |
|:-:|-------------|----------|-----|:------:|
| 1 | Hero CTA: Google Forms | mentalist.html:55 | `https://docs.google.com/forms/d/1fYGLmLWHrmZNyhk1BDpCgTgH7Wa9rkhxZ1Sx9X_Psvs/viewform` | PASS |
| 2 | CTA: Google Forms | mentalist.html:134 | 동일 URL | PASS |
| 3 | CTA: KakaoTalk | mentalist.html:138 | `https://open.kakao.com/o/sIgfBBgi` | PASS |
| 4 | CTA: Instagram | mentalist.html:142 | `https://www.instagram.com/mentalist_sogang` | PASS |
| 5 | Header nav: Instagram | mentalist.html:26 | `https://www.instagram.com/mentalist_sogang` | PASS |
| 6 | Header nav: Naver Cafe | mentalist.html:25 | `https://cafe.naver.com/2302mentalist` | PASS |
| 7 | **Mobile nav: Instagram** | **mentalist.html:40** | **`https://instagram.com`** | **WARN** |
| 8 | **Mobile nav: Instagram (jinsim)** | **jinsim.html:43** | **`https://instagram.com`** | **WARN** |

**Evidence** (mentalist.html:40):
```html
<a href="https://instagram.com" target="_blank" rel="noopener">Instagram ...</a>
```

**Assessment**: 모바일 내비게이션의 Instagram 링크가 두 페이지 모두에서 **일반 instagram.com**으로 연결됨. 데스크탑 header nav에서는 올바른 URL(`mentalist_sogang` / `sogangpsy_official`)이 사용되고 있으나, mobile nav에서는 업데이트가 누락되었다. 이는 사용자가 모바일에서 Instagram 링크를 탭하면 학회 계정이 아닌 Instagram 홈으로 이동하는 **기능적 버그**이다.

**Result**: 75% Match -- 6/8 items passed, 2 WARN.

---

## 10. Gap Analysis -- BEM / Convention 준수

| # | Check Point | Implementation | Status |
|:-:|-------------|----------------|:------:|
| 1 | Block: `.intro` | 5개 섹션 모두 `.intro` 블록 사용 | PASS |
| 2 | Element: `__photos`, `__photo`, `__text` | 일관 적용 | PASS |
| 3 | Modifier: `--duo`, `--solo`, `--stagger`, `--trio`, `--last` | 일관 적용 | PASS |
| 4 | `.btn-kakao`, `.btn-instagram` | 기존 `.btn-mentalist`, `.btn-jinsim` 패턴과 일관 | PASS |
| 5 | camelCase 함수명 | `initSplitPage`, `initHeader`, `initMobileMenu`, `initPhotoGallery`, `initScrollReveal` | PASS |
| 6 | kebab-case 파일명 | `style.css`, `main.js` | PASS |
| 7 | SVG inline icon in CTA buttons | 3개 버튼 모두 inline SVG icon 사용 (일관) | PASS |
| 8 | `target="_blank" rel="noopener"` | 모든 외부 링크에 보안 속성 적용 | PASS |

**Result**: 100% Match -- 8/8 items passed.

---

## 11. v2.0 잔존 WARN 재검증

| # | v2.0 WARN | Current State | Status |
|:-:|-----------|---------------|:------:|
| 1 | CSS dead code: `.activities-section` (style.css:625-664) | 여전히 잔존. mentalist.html에서 미사용 확인. jinsim.html에서도 미사용 확인 | WARN |
| 2 | 섹션 2 `reveal` 클래스 누락 (mentalist.html:72) | 여전히 `<section class="intro">` (reveal 없음). JS `initScrollReveal()`에서 `.intro` 대상이므로 기능 차이 없음 | WARN |

**Assessment for item 1**: `.activities-section` CSS (40줄)는 mentalist.html에서도 jinsim.html에서도 사용되지 않는 dead code이다. `.gallery-section` CSS는 jinsim.html:64에서 사용 중이므로 유지 필요. `.gallery-label`도 jinsim.html:65에서 사용 중.

**Assessment for item 2**: 의도적 생략으로 간주. photo-gallery의 자체 스크롤 스프레드 모션과 reveal fadeUp이 중복되지 않도록 한 설계 판단.

**Result**: 0/2 resolved -- 두 항목 모두 미해결 잔존.

---

## 12. Cross-page 일관성

| # | Check Point | Implementation | Status |
|:-:|-------------|----------------|:------:|
| 1 | index.html: split-page 양측 링크 | jinsim.html / mentalist.html 정확 | PASS |
| 2 | 공통 CSS 적용 | 3 pages 모두 `css/style.css` 참조 | PASS |
| 3 | 공통 JS 적용 | 3 pages 모두 `js/main.js` 참조 | PASS |
| 4 | 공통 폰트 stack | 3 pages 모두 동일 Google Fonts 참조 | PASS |
| 5 | **mentalist.html `<title>`** | **"Mentalist | 서강대학교 심리학회"** -- hero에서는 "유일 심리학회"로 표현하나 title에는 미반영 | **WARN** |
| 6 | **jinsim.html 활동 사진 placeholder** | **4장 모두 `photo-placeholder--jinsim`** 텍스트 플레이스홀더 잔존 | **WARN** |

**Evidence** (mentalist.html:6):
```html
<title>Mentalist | 서강대학교 심리학회</title>
```
vs (mentalist.html:48-49):
```html
서강대학교 유일 심리학회
<strong>'멘탈리스트'</strong>입니다.
```

**Assessment for item 5**: hero 영역에서는 "유일 심리학회"라는 차별화 표현을 사용하고 있으나, `<title>` 태그와 `<meta description>`에는 반영되지 않았다. SEO 및 브랜딩 일관성 관점에서 업데이트 권장.

**Assessment for item 6**: jinsim.html의 gallery-section에 4장 모두 placeholder div가 남아 있다. mentalist.html에서는 모든 사진이 교체 완료되었으나 jinsim.html은 미착수 상태.

**Result**: 67% Match -- 4/6 items passed.

---

## 13. Differences Summary

### 13.1 Missing Features (Design O, Implementation X)

없음. CTA 버튼 3개(Google Forms, KakaoTalk, Instagram), 실사진 12장 모두 구현 완료.

### 13.2 Added Features (Design X, Implementation O)

없음. 설계 범위를 넘어서는 추가 구현 없음.

### 13.3 Changed Features (Design != Implementation)

| # | Item | Expected | Actual | Impact | Category |
|:-:|------|----------|--------|:------:|----------|
| 1 | Mobile nav Instagram URL (mentalist) | `https://www.instagram.com/mentalist_sogang` | `https://instagram.com` | **Medium** | Bug |
| 2 | Mobile nav Instagram URL (jinsim) | `https://www.instagram.com/sogangpsy_official` | `https://instagram.com` | **Medium** | Bug |
| 3 | `.activities-section` CSS dead code | 삭제 | style.css:625-664 잔존 | Low | Cleanup |
| 4 | 섹션 2 `reveal` class | `class="intro reveal"` | `class="intro"` | Low | Intentional |
| 5 | `<title>` 내 "유일" 미반영 | "유일 심리학회" 반영 | "서강대학교 심리학회" | Low | SEO |
| 6 | jinsim.html 활동 사진 | 실사진 교체 | placeholder 잔존 | Low | Scope |

---

## 14. Convention Compliance

### 14.1 Naming Convention

| Category | Convention | Compliance | Violations |
|----------|-----------|:----------:|------------|
| CSS classes | BEM (block__element--modifier) | 100% | - |
| CSS custom properties | --prefix-name | 100% | - |
| JS functions | camelCase | 100% | - |
| HTML files | kebab-case.html | 100% | - |
| CSS/JS files | kebab-case | 100% | - |
| Image folders | kebab-case | 100% | 01-discussion, 02-papers, etc. |
| Image files | 원본 파일명 유지 | N/A | 한글/공백 포함 (KakaoTalk, 스크린샷) -- 기능 무영향 |

### 14.2 Mobile-First Responsive

| Check | Status |
|-------|:------:|
| Base styles = mobile | PASS |
| `min-width: 768px` for tablet | PASS |
| `max-width: 767px` for mobile-specific | PASS |

### 14.3 Accessibility

| Check | Implementation | Status |
|-------|----------------|:------:|
| `alt` attribute on all `<img>` | 12 images -- all have `alt` text | PASS |
| `aria-label` on menu toggle | `aria-label="메뉴 열기"` | PASS |
| `rel="noopener"` on external links | All `target="_blank"` links have `rel="noopener"` | PASS |
| `lang="ko"` on `<html>` | All 3 pages | PASS |

---

## 15. Architecture Compliance (Starter Level)

| Check Point | Expected (Starter) | Actual | Status |
|-------------|-----------------------|--------|:------:|
| Flat structure | HTML + css/ + js/ + images/ | Matches | PASS |
| Single CSS file | 1 file | `css/style.css` (1237 lines) | PASS |
| Single JS file | 1 file | `js/main.js` (143 lines) | PASS |
| No build tools | No package.json / bundler | Confirmed | PASS |
| Static assets | images/, fonts/ | Confirmed | PASS |

---

## 16. Match Rate Summary

```
+-------------------------------------------------------+
|  Overall Match Rate: 92%   (67/73 items)              |
+-------------------------------------------------------+
|  Category              | Score  | Items               |
|  사진 교체 검증         | 100%   | 12/12               |
|  CTA 섹션 (신규 버튼)  | 100%   |  8/8                |
|  CSS 신규 스타일        | 100%   |  4/4                |
|  HTML 구조 일관성       | 100%   | 10/10               |
|  JS 기능                | 100%   |  5/5                |
|  반응형 (767px)         | 100%   | 10/10               |
|  외부 링크 정합성       |  75%   |  6/8  (mobile nav)  |
|  BEM / Convention       | 100%   |  8/8                |
|  v2.0 잔존 WARN        |   0%   |  0/2  (미해결)      |
|  Cross-page 일관성      |  67%   |  4/6                |
+-------------------------------------------------------+
```

---

## 17. Recommended Actions

### 17.1 Immediate (Medium Priority)

| # | Item | File | Line | Description |
|:-:|------|------|:----:|-------------|
| 1 | Mobile nav Instagram URL 수정 | mentalist.html | 40 | `https://instagram.com` -> `https://www.instagram.com/mentalist_sogang` |
| 2 | Mobile nav Instagram URL 수정 | jinsim.html | 43 | `https://instagram.com` -> `https://www.instagram.com/sogangpsy_official` |

**Impact**: 모바일 사용자가 Instagram 링크 터치시 학회 계정이 아닌 Instagram 홈으로 이동하는 버그. 모바일 트래픽 비율이 높은 대학생 타겟이므로 우선 수정 권장.

### 17.2 Short-term (Low Priority)

| # | Item | File | Description |
|:-:|------|------|-------------|
| 3 | CSS dead code 삭제 | css/style.css:625-664 | `.activities-section` 관련 40줄 -- 어떤 HTML에서도 미사용 확인 완료 |
| 4 | `<title>` 업데이트 | mentalist.html:6 | "서강대학교 심리학회" -> "서강대학교 유일 심리학회" 반영 고려 |
| 5 | `<meta description>` 업데이트 | mentalist.html:7 | "유일" 키워드 반영 고려 |

### 17.3 Backlog

| # | Item | File | Notes |
|:-:|------|------|-------|
| 6 | jinsim.html 활동 사진 교체 | jinsim.html:67-78 | 4장 placeholder -> 실사진 (이미지 수급 필요) |
| 7 | 이미지 파일명 정규화 | images/mentalist/ | 한글/공백 포함 파일명 -> 영문 kebab-case (선택적) |
| 8 | 섹션 2 `reveal` 클래스 일관성 | mentalist.html:72 | 현재 기능 차이 없으나, 코드 일관성 원하면 추가 |

---

## 18. Previous Analysis Context

| Analysis | Date | Scope | Match Rate | Delta |
|----------|------|-------|:----------:|:-----:|
| Initial full-page | 2026-02-10 | 전체 3페이지 | 87% | -- |
| Mentalist minor update | 2026-02-21 | 4개 수정 항목 | 100% | +13% |
| v2.0 Mentalist 소개 영역 재구성 | 2026-02-22 | 5개 섹션 신규 | 97% | -3% |
| **v3.0 사진 교체 + CTA 확장** | **2026-03-01** | **사진 12장 + CTA 3버튼** | **92%** | **-5%** |

**Note**: Match Rate가 97% -> 92%로 하락한 것은 v3.0에서 검증 범위를 확대(외부 링크 정합성, cross-page 일관성 포함)했기 때문이다. 핵심 기능 구현 자체는 100% 완료.

---

## 19. Summary

Mentalist 랜딩페이지의 사진 교체 및 CTA 확장 작업은 **92% 일치율**로 구현되었다. 총 73개 검증 항목 중 67개가 완전 일치(PASS)이며, 6개 항목이 부분 일치(WARN)이다. FAIL 항목은 없다.

**핵심 성과:**
- 12장의 실제 활동 사진이 모든 플레이스홀더를 대체하여 mentalist.html에서 placeholder 완전 제거
- Google Forms + KakaoTalk Q&A + Instagram 3개 CTA 버튼 완전 구현
- `.btn-kakao`, `.btn-instagram` CSS가 기존 디자인 시스템과 일관되게 추가됨
- BEM 네이밍, 반응형 CSS, JS scroll reveal 모두 정상 동작

**수정 필요 사항:**
- **[Medium]** 모바일 내비게이션 Instagram URL 2건 (mentalist.html:40, jinsim.html:43) -- 기능적 버그
- **[Low]** CSS dead code 40줄, title/meta SEO 업데이트
- **[Backlog]** jinsim.html 활동 사진 교체 (이미지 수급 대기)

---

## Version History

| Version | Date | Changes | Author |
|---------|------|---------|--------|
| 3.0 | 2026-03-01 | 사진 교체 + CTA 확장 gap analysis, 외부링크/cross-page 검증 추가 | gap-detector |
| 2.0 | 2026-02-22 | Mentalist 소개 영역 재구성 gap analysis | gap-detector |
| 1.0 | 2026-02-10 | Initial full-page gap analysis | gap-detector |
