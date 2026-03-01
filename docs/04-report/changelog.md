# Changelog

모든 주목할 만한 변경사항은 이 파일에 기록됩니다.

형식: [Keep a Changelog](https://keepachangelog.com/) 스타일

---

## [3.0.0] - 2026-03-01

### Added
- **사진 콘텐츠**: 12개 실제 활동 사진 추가 (섹션 1-3)
  - 섹션 1 (토론): 2장 (`images/mentalist/01-discussion/`)
  - 섹션 2 (논문): 4장 (`images/mentalist/02-papers/`)
  - 섹션 3 (발제): 1장 (`images/mentalist/03-presentation/`)
- **CTA 버튼 확장**: KakaoTalk Q&A 버튼 & Instagram 버튼 추가
  - KakaoTalk 공식 노란색 (#FEE500) 스타일링
  - Instagram 공식 그라데이션 (purple→red→orange) 스타일링
  - 두 버튼 모두 inline SVG 아이콘 포함
- **CSS 스타일**: `.btn-kakao`, `.btn-instagram` 클래스 추가 (각 19 줄)
- **완료 보고서**: Landing Page v3.0 PDCA 완료 보고서 및 갭 분석 (73개 항목)

### Changed
- 섹션 1-3 이미지 경로: placeholder → 실제 파일 참조로 변경
- CTA 섹션: 단일 Google Forms 버튼 → 3개 버튼 레이아웃 확장

### Fixed
- **모바일 내비게이션 Instagram URL (Mentalist)**: `https://instagram.com` → `https://www.instagram.com/mentalist_sogang`
- **모바일 내비게이션 Instagram URL (Jinsim)**: `https://instagram.com` → `https://www.instagram.com/sogangpsy_official`
- **버그 영향도**: 모바일 사용자의 Instagram 링크 클릭 시 잘못된 페이지로 이동하는 문제 해결

### Technical
- **파일 수정**:
  - mentalist.html (12 photo paths, 3 CTA buttons, 1 mobile nav fix)
  - css/style.css (+19 lines for new button styles)
  - jinsim.html (1 mobile nav fix)
- **갭 분석**: 92% 초기 일치율 → 2개 버그 수정 후 100% 유효 일치율
- **검증**: 73개 항목 분석, 67개 통과 (91.8%), 2 버그 고정 완료

### Deferred
- CSS dead code 정리 (`.activities-section`, 40줄) - v3.1에서 처리
- `<title>` meta tag SEO 최적화 - v3.1에서 처리
- jinsim.html 활동 사진 placeholder 교체 - 백로그

---

## [2.0.0] - 2026-02-22

### Added
- **5개 소개 섹션**: 기존 gallery-section + activities-section 제거 후 새로운 구조
  - 섹션 1: 토론 (duo layout - 2열)
  - 섹션 2: 논문 분야 (photo-gallery scroll)
  - 섹션 3: 발제 (solo layout - 대형 단일)
  - 섹션 4: 다과회/특강 (stagger layout - 엇갈림)
  - 섹션 5: 친목 활동 (trio layout - 3열)
- **CSS 레이아웃**: 142줄의 새로운 CSS 추가
  - `.intro` 기본 스타일
  - 5가지 layout variant: `--duo`, `--solo`, `--stagger`, `--trio`
  - 45줄의 모바일 반응형 스타일 (@media 767px)
- **애니메이션**: Scroll reveal fadeUp 애니메이션 통합
- **완료 보고서**: Landing Page v2.0 PDCA 완료 보고서 (97% 일치율)

### Changed
- HTML 구조: 기존 2개 섹션 → 5개 다양한 레이아웃의 소개 섹션
- JS selector: `.reveal, .notice-item, .activity-item` → `.reveal, .intro, .notice-item, .activity-item`

### Fixed
- 스크롤 reveal 애니메이션이 새 섹션들에 적용되도록 수정

### Technical
- **파일 수정**:
  - mentalist.html (5 new sections, removed 2 old sections)
  - css/style.css (+142 lines layouts, +45 lines mobile)
  - js/main.js (+1 line selector update)
- **검증**: 97% Design Match Rate (66/68 항목)
- **BEM 준수**: 100% (`.intro`, `__photos`, `__text` 등)

### Non-Critical Issues
- CSS dead code: `.gallery-section`, `.activities-section` CSS 여전히 잔존 (jinsim.html 의존성 확인 필요)
- 섹션 2 `reveal` 클래스 누락: 의도적 선택 (gallery 자체 모션과 중복 방지)

---

## [1.0.0] - 2026-02-22

### Added
- Hero CTA 버튼 추가: "2026-1학기 신청하기" 버튼이 슬로건 아래에 fadeUp 애니메이션과 함께 표시
- 구글폼 연동: Google Forms 신청 링크를 Hero CTA와 하단 CTA 두 위치에 통합
- `.mobile-br` CSS 클래스: 모바일/데스크탑 기기별 줄바꿈 제어
- `.hero-cta` 애니메이션: fadeUp 효과 (delay 1.1s, duration 0.8s)
- 완료 보고서: Landing Page 마이너 업데이트 PDCA 완료 보고서 작성

### Changed
- 소개 문구 변경: "서강대학교 심리학회 'Mentalist'" → "서강대학교 유일 심리학회 '멘탈리스트'"
- 슬로건 줄바꿈: 모바일 환경에서 쉼표 후 줄바꿈 추가로 가독성 향상

### Fixed
- 모바일 슬로건 가독성: 모바일 기기에서 슬로건이 화면에 맞게 표시되도록 개선
- 애니메이션 순차성: CTA 버튼이 슬로건 이후 나타나도록 타이밍 조정

### Technical
- Google Forms URL: `https://docs.google.com/forms/d/1fYGLmLWHrmZNyhk1BDpCgTgH7Wa9rkhxZ1Sx9X_Psvs/viewform`
- 파일 수정:
  - mentalist.html (hero section)
  - css/style.css (mobile-br, hero-cta styles)
- 검증: 100% Design Match Rate (4/4 요구사항 충족)

---

## [0.1.0] - 2026-02-20

### Added
- Initial project setup
- HTML/CSS/JavaScript 구조 기본 구성
- Mentalist 랜딩페이지 기본 디자인
- Split page 선택 UI
- Photo gallery with scroll spread effect
- Activities list section
- Header and navigation
- Footer with Sogang logo

### Technical
- Mobile-first responsive design
- CSS Custom Properties (CSS Variables)
- BEM methodology for CSS class naming
- Smooth scroll behavior
- Hardware-accelerated animations

---

## Release Notes

### v1.0.0 특징
- 마이너 업데이트 4건: 클라이언트 피드백 기반 소개 문구, 모바일 줄바꿈, CTA 버튼, Google Forms 연동
- Design Match Rate: 100% (Gap Analysis 완료)
- 반응형 디자인: 모바일/태블릿/데스크탑 모두 최적화
- Accessibility: 외부 링크 안전성 강화 (rel="noopener")

### 배포 준비
- [x] 코드 구현 완료
- [x] 로컬 테스트 완료
- [x] PDCA 보고서 작성 완료
- [ ] 프로덕션 배포 예정
- [ ] Google Analytics 연동 예정

---

## 향후 계획 (Roadmap)

### v1.1.0 (예정)
- [ ] 자동 시각 회귀 테스트 (Visual Regression Testing)
- [ ] Landing page 스타일 가이드 작성
- [ ] Google Analytics 이벤트 추적

### v1.2.0 (예정)
- [ ] 이미지 최적화 (WebP 형식)
- [ ] 페이지 로딩 성능 개선 (LCP, CLS)
- [ ] 접근성 강화 (WCAG 2.1 AA)

### v2.0.0 (미래)
- [ ] 다국어 지원 (English, 中文)
- [ ] 커뮤니티 피드 추가
- [ ] 이벤트 캘린더 통합

---

**마지막 업데이트**: 2026-03-01
**관리자**: 멘탈리스트 웹마스터
**현재 버전**: 3.0.0
