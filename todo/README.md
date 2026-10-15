# 할 일 (TODO)

ver1.0.0 배포 이후 남은 작업. 끝나면 체크하고, 다 끝난 항목은 아래 "완료"로 옮긴다.

## 자료 받으면 넣기 (2026-10-13 요청함)

받은 파일은 `~/Documents/개인 서류 및 문서/태산/` 에 넣는다.

- [ ] **직업소개소 등록증** (경기광주 본점 남음. 성남 수진역점·천호점 완료)
  - 등록증 사진: 대표 생년월일을 가린 사본을 `public/images/licenses/<slug>.webp`로 (`cwebp -q 85`) 넣고 `src/lib/site.ts`의 `branches[].licenseImage`에 경로 입력
  - 등록번호: `src/lib/site.ts` 의 `branches[].agencyNo`

## 기능



- [ ] **(나중에) 기업 문의 받는 방법 결정:** 지금은 제출하면 대표번호로 문자(PC는 복사해서 직접 보내야 함). 추천은 구글 시트 저장 + 메일 알림 → 필요: 시트용 구글 계정, 알림 받을 메일. 문의 폼은 `src/areas/contact/form/ContactForm.tsx`의 submit 함수만 바꾸면 됨
- [ ] (선택) 카카오톡 전용 공유 카드: 카카오 개발자 JavaScript 키 필요
- [ ] 구글 서치콘솔: taesan-recruit.com 도메인 속성 확인 → Sitemaps 제출 → 메인·/jobs 색인 요청 (`docs/검색등록.md` 0번)
- [ ] 1~2주 뒤 검색 노출·검색 결과 로고 확인 (네이버·구글 모두 taesan-recruit.com으로 나오는지)
- [ ] (선택) Cloudflare Bulk Redirects로 pages.dev → 새 주소 301 이동 + 구글 "주소 변경"
- [ ] 네이버 플레이스(지점 3곳)

## 완료
- [x] 추가 개발 (2026-10-15): 메인 속도 개선(제목 글꼴을 쓰는 글자만 남겨 160KB→43KB, next/font로 불러옴, 첫 화면 제목 애니메이션 조정 → 휴대폰 속도 점수 70→96), 페이지별 카톡 미리보기 이미지(한국어 페이지 20개, 빌드 때 자동 생성), 소식 글 아래 공유 버튼·다른 소식
- [x] Vercel 프로젝트 삭제, 휴대폰 실기 확인(문자 앱이 양식 채워진 채로 열림) (2026-10-15)
- [x] 정리 (2026-10-15, 사용자 결정): 지점별 대표 사진·대표 인사말 원문·본점 셔틀/집결지 정보는 넣지 않음. 이메일은 crewts@naver.com 그대로. 고객사 목록은 지금 그대로 둠. 수상·감사패 영역은 삭제(등록증만 보여줌)
- [x] 도메인 taesan-recruit.com 연결 (2026-10-14): Cloudflare Pages 연결, 예전 주소 자동 이동, 네이버 소유확인·사이트맵·RSS 제출, favicon.ico 추가
- [x] 다국어 남은 번역 (2026-10-14): 비자 안내 12개 언어(`src/i18n/visa/<언어>.ts`, 법이 바뀌면 13개 파일 모두 기준일·내용 갱신), 소식 글 uz·mn·th·id·km, 고객사 영문 이름(`clients`의 nameEn)

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
