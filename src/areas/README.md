# 영역(area) 지도

이 사이트는 **영역 단위**로 나뉘어 있다. 한 영역 = 화면의 한 덩어리(섹션) = `src/areas/<페이지>/<영역>/` 폴더 하나.
각 폴더에는 컴포넌트(`index.tsx`)와 설명(`AREA.md`)이 있다. 수정 요청이 오면:

1. 아래 표에서 해당 영역을 찾는다.
2. 그 폴더의 `AREA.md`를 읽는다.
3. 그 폴더 안의 파일만 고친다. 여러 영역이 같이 쓰는 데이터는 `src/lib/site.ts`, 색·글꼴은 `src/app/globals.css`의 `@theme`.
4. 페이지(`src/app/**/page.tsx`)는 영역을 순서대로 쌓기만 한다. 영역 순서를 바꾸거나 추가·삭제할 때만 페이지를 고친다.

| 영역 | 이름 | 보이는 곳 |
| --- | --- | --- |
| `layout/header` | 상단 메뉴바 | 모든 페이지 맨 위 |
| `layout/footer` | 하단 회사 정보 | 모든 페이지 맨 아래 |
| `layout/contact-dock` | 연락·공유 버튼 (PC 오른쪽 아래 / 모바일 하단 바) | 모든 페이지 |
| `shared/client-wall` | 고객사 로고 벽 | 메인·중점분야·일자리 |
| `shared/faq-list` | 자주 묻는 질문 목록(접기/펼치기) | FAQ 페이지, 일자리 페이지 |
| `shared/stats-strip` | 강조 숫자 줄 | 메인, 회사소개 |
| `shared/about-subnav` | 회사소개 탭 | 회사소개·중점분야·지점안내 페이지, 히어로 바로 아래 (스크롤 시 메뉴바 아래 고정) |
| `home/hero` | 메인 첫 화면 + 지점 안내판 | / 맨 위 |
| `home/promises` | 도급사가 다시 찾는 이유 | / 숫자 줄 아래 |
| `home/statement` | 약속 한 줄 | / |
| `home/worker-cta` | 구직자 안내 | / |
| `home/clients` | 고객사 | / |
| `home/awards` | 수상과 인증 미리보기 | / |
| `home/news` | 최근 소식 | / 맨 아래 |
| `about/hero` | 회사소개 상단 | /about 맨 위 |
| `about/greeting` | 대표 인사 | /about |
| `about/focus` | 중점분야 요약 | /about |
| `about/branches` | 지점안내 요약 | /about |
| `about/team` | 지점장 단체 사진 | /about |
| `about/history` | 연혁 | /about#history |
| `business/hero` | 중점분야 상단 | /business 맨 위 |
| `business/promises` | 약속하는 다섯 가지 | /business |
| `business/services` | 서비스 분야 | /business |
| `business/process` | 요청부터 배치, 사후 관리까지 | /business |
| `business/management` | 체계적인 현장 관리 | /business |
| `business/clients` | 주요 고객사 | /business |
| `business/cta` | 상담 안내 | /business 맨 아래 |
| `jobs/hero` | 일자리 첫 화면 | /jobs 맨 위 |
| `jobs/conditions` | 근무 조건 | /jobs |
| `jobs/branches` | 지점 연락처 | /jobs |
| `jobs/postings` | 지금 모집 중인 공고 | /jobs |
| `jobs/clients` | 이런 회사의 물류 현장에서 일해요 | /jobs |
| `jobs/faq` | 자주 묻는 질문(구직) | /jobs 맨 아래 |
| `faq/hero` | FAQ 상단 | /faq |
| `faq/jump-nav` | FAQ 바로가기 | /faq (모바일에서만) |
| `faq/columns` | FAQ 본문 | /faq |
| `faq/cta` | FAQ 하단 안내 | /faq |
| `awards/hero` | 수상·인증 상단 | /awards |
| `awards/awards` | 수상·감사패 | /awards |
| `awards/licenses` | 유료직업소개소 등록증 | /awards |
| `branches/hero` | 지점안내 상단 | /branches |
| `branches/list` | 지점 상세 | /branches |
| `contact/hero` | 문의하기 상단 | /contact |
| `contact/form` | 문의 폼 | /contact |
| `blog/hero` | 소식 상단 | /blog |
| `blog/list` | 소식 목록 | /blog |
| `blog/post` | 소식 글 본문 | /blog/<slug> |
