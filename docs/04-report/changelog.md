# Changelog

모든 주목할 만한 변경사항은 이 파일에 기록됩니다.

형식: [Keep a Changelog](https://keepachangelog.com/) 스타일

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

**마지막 업데이트**: 2026-02-22
**관리자**: 멘탈리스트 웹마스터
