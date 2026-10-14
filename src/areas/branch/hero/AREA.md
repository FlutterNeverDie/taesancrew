# 지점 페이지 첫 화면

- **영역 경로:** `src/areas/branch/hero/`
- **보이는 곳:** /branches/<gwangju|sujin|cheonho> 맨 위
- **파일:** `index.tsx`
- **내용:** "○○ 인력사무소" + 지점 이름 + 소개 문단 + 전화·문자 지원
- **데이터:** 사전의 `branches.<slug>.region·intro·name`, `branchPage.*`, site.ts의 `phone`
- **주의:** 지역 이름은 사무실이 있는 곳. "권역"처럼 사는 곳을 나누는 말은 쓰지 않는다

수정은 이 폴더 안에서만. 다른 영역도 쓰는 값(회사 정보·지점·고객사·질문)은 `src/lib/site.ts`에서 고친다.
