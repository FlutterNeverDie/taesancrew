# 할 일 (TODO)

ver1.0.0 배포 이후 남은 작업. 끝나면 체크하고, 다 끝난 항목은 아래 "완료"로 옮긴다.

## 자료 받으면 넣기 (2026-10-13 요청함)

받은 파일은 `~/Documents/개인 서류 및 문서/태산/` 에 넣는다.

- [ ] **지점별 대표 사진** (경기광주 본점, 성남 수진역점, 천호점)
  - 넣을 곳: 미정 (`src/areas/branches/list` 의 사진 자리는 위치 지도로 바뀜, 2026-10-14)
  - 파일: `public/images/branches/<gwangju|sujin|cheonho>.webp` (가로 1200px 이하, `cwebp -q 82`로 WebP 변환)
- [ ] **상장 / 감사패 / 인증서**
  - 지금은 받은 게 없어 /awards 페이지와 메인에서 뺐음. 받으면 `src/app/awards/page.tsx`에 `AwardsAwards`를 다시 넣고 `src/areas/awards/awards` 의 `awards` 배열 `{ src, title, issuer, date }` 채우기
  - 메인 미리보기: `src/areas/home/awards` 사진 자리도 같이 교체
  - 파일: `public/images/awards/`
- [ ] **직업소개소 등록증** (경기광주 본점 남음. 성남 수진역점·천호점 완료)
  - 등록증 사진: 대표 생년월일을 가린 사본을 `public/images/licenses/<slug>.webp`로 (`cwebp -q 85`) 넣고 `src/lib/site.ts`의 `branches[].licenseImage`에 경로 입력
  - 등록번호: `src/lib/site.ts` 의 `branches[].agencyNo`

## 확인 필요


- [ ] 고객사 노출 확정: 스타벅스, 신상닷컴, 소다 (대표 확인). 올리브영 포함 4곳 공식 로고 파일 받기
- [ ] 대표 인사말 원문 → `src/areas/about/greeting`
- [ ] 경기광주 본점 출퇴근 셔틀·집결지 정보
- [ ] 이메일 주소 (지금 crewts@naver.com 은 본부장 메일)

## 기능

- [ ] 다국어 소식 글: uz·mn·th·id·km 5개 언어는 소식 글이 한국어 원문으로 보인다 → `content/blog/<언어>/<파일>.md` 번역 추가

- [ ] Vercel 프로젝트 정리 (Cloudflare 주소 확인 후 삭제)

- [ ] **기업 문의 받는 방법 결정 (대표님께 확인 중):** 지금은 제출하면 대표번호로 문자(PC는 복사해서 직접 보내야 함). 추천은 구글 시트 저장 + 메일 알림 → 필요: 시트용 구글 계정, 알림 받을 메일. 문의 폼은 `src/areas/contact/form/ContactForm.tsx`의 submit 함수만 바꾸면 됨
- [ ] (선택) 카카오톡 전용 공유 카드: 카카오 개발자 JavaScript 키 필요
- [ ] 새 페이지 검색 등록: 네이버 RSS 제출·웹 페이지 수집 요청, 구글 색인 요청 (`docs/검색등록.md` 3번)
- [ ] 검색 등록 후 사이트맵 제출 확인 (네이버: 요청 → 사이트맵 제출 / 구글: Sitemaps), 1~2주 뒤 검색 노출 확인
- [ ] 도메인 연결, 네이버 플레이스(지점 3곳)

## 완료

- [x] 문의 페이지를 기업 문의 전용으로 (구직 탭 제거, 구직자는 일자리 페이지 문자 지원으로 안내), 문자 지원 양식에 희망 요일 추가 (2026-10-13)

- [x] 네이버 서치어드바이저(메타태그)·구글 서치콘솔(public/googleeafb7e09f3b26d3a.html + _redirects) 소유 확인 (2026-10-13)

- [x] 그라데이션 미리보기 제거, 단색 남색으로 확정 (2026-10-13)
- [x] sitemap.xml, robots.txt 추가 (2026-10-13)

- [x] GitHub Secret `CLOUDFLARE_API_TOKEN` 등록 → main 푸시 시 자동 배포 (2026-10-13, 토큰 권한: Cloudflare Pages Edit + Account Settings Read)

- [x] 호스팅을 Vercel(무료는 상업적 사용 불가) → Cloudflare Pages로 이전 (2026-10-13, https://taesancrew.pages.dev)

- [x] ver1.0.0 배포 (2026-10-13, 태그 `v1.0.0`)
- [x] **사업자등록증** (광주·성남 수진역점·천호점 완료)
  - 사진은 사이트에 올리지 않는다 (대표 생년월일 등 개인정보)
  - 사업자등록번호만 `src/lib/site.ts` 의 `branches[].bizNo` 에 입력 → 하단 회사 정보에 자동 표시
- [x] 방문자 통계 켜기: Cloudflare Web Analytics (2026-10-14, `docs/방문자통계.md`)
- [x] 운영시간: 지점안내에서 운영시간 칸을 뺐다 (2026-10-14)
- [x] 다국어 13개 언어 (2026-10-14): 한국어 기본 + /en·/zh·/ja·/vi·/uz·/mn·/ru·/ar·/ne·/th·/id·/km, Contact 옆 언어 메뉴, 사전 `src/i18n/dict/`
