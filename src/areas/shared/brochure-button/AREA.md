# 회사소개서 받기 버튼

- **영역 경로:** `src/areas/shared/brochure-button/`
- **보이는 곳:** /business 맨 아래 상담 줄, /contact·/about 첫 화면(남색) 오른쪽
- **파일:** `index.tsx`
- **내용:** 회사소개서 PDF를 내려받는 버튼 (글자 "회사소개서" + PDF 표시)
- **데이터:** site.ts의 `company.brochure`. PDF를 `public/files/`에 넣고 경로(예: `/files/taesan-company-profile.pdf`)를 적는다. 문구는 사전의 `common.brochure·brochurePreparing`
- **주의:** `brochure`가 null이면 실제 사이트에서는 버튼이 안 보이고, 로컬 개발 서버에서만 "준비 중" 자리로 보인다. "파견" 표현이 있는 PDF는 올리지 않는다

수정은 이 폴더 안에서만. 다른 영역도 쓰는 값(회사 정보·지점·고객사·질문)은 `src/lib/site.ts`에서 고친다.
