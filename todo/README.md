# 할 일 (TODO)

ver1.0.0 배포 이후 남은 작업. 끝나면 체크하고, 다 끝난 항목은 아래 "완료"로 옮긴다.

## 자료 받으면 넣기 (2026-10-13 요청함)

받은 파일은 `~/Documents/개인 서류 및 문서/태산/` 에 넣는다.

- [ ] **지점별 대표 사진** (경기광주 본점, 성남 수진역점, 천호점)
  - 넣을 곳: `src/areas/branches/list` 의 사무실 사진 자리
  - 파일: `public/images/branches/<gwangju|sujin|cheonho>.jpg` (가로 1200px 이하 JPG)
- [ ] **사업자등록증** (성남점, 천호점. 광주는 이미 있음)
  - 사진은 사이트에 올리지 않는다 (대표 생년월일 등 개인정보)
  - 사업자등록번호만 `src/lib/site.ts` 의 `branches[].bizNo` 에 입력 → 하단 회사 정보에 자동 표시
- [ ] **상장 / 감사패 / 인증서**
  - 넣을 곳: `src/areas/awards/awards` 의 `awards` 배열 `{ src, title, issuer, date }`
  - 메인 미리보기: `src/areas/home/awards` 사진 자리도 같이 교체
  - 파일: `public/images/awards/`
- [ ] **직업소개소 등록증** (지점별)
  - 등록증 사진: `src/areas/awards/licenses` 자리
  - 등록번호: `src/lib/site.ts` 의 `branches[].agencyNo`

## 확인 필요

- [ ] 고객사 노출 확정: 스타벅스, 신상닷컴, 소다 (대표 확인). 올리브영 포함 4곳 공식 로고 파일 받기
- [ ] 지점장 단체 사진 → `src/areas/about/team`
- [ ] 대표 인사말 원문 → `src/areas/about/greeting`
- [ ] 지점별 운영시간 → `src/areas/branches/list` ("준비 중")
- [ ] 경기광주 본점 출퇴근 셔틀·집결지 정보
- [ ] 이메일 주소 (지금 crewts@naver.com 은 본부장 메일)

## 기능

- [ ] GitHub 저장소 Secret `CLOUDFLARE_API_TOKEN` 등록 → 푸시하면 자동 배포 (등록 전에는 `npx wrangler deploy`로 직접 배포)
- [ ] Vercel 프로젝트 정리 (Cloudflare 주소 확인 후 삭제)

- [ ] Contact 문의 폼 저장: 지금은 메일 앱이 열리기만 함 → 구글 시트 + 메일 알림 연동 (구글 계정, 알림 받을 메일 필요)
- [ ] 그라데이션(`?grad`) 쓸지 결정 → 안 쓰면 `GradPreview`, `.brand-hero` 그라데이션 제거
- [ ] (선택) 카카오톡 전용 공유 카드: 카카오 개발자 JavaScript 키 필요
- [ ] 도메인 연결, 네이버 서치어드바이저·구글 서치콘솔 등록, 네이버 플레이스(지점 3곳)

## 완료

- [x] 호스팅을 Vercel(무료는 상업적 사용 불가) → Cloudflare로 이전 (2026-10-13, https://taesancrew.histlab.workers.dev)

- [x] ver1.0.0 배포 (2026-10-13, 태그 `v1.0.0`)
