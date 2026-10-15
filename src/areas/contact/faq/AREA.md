# 문의 페이지 자주 묻는 질문

- **영역 경로:** `src/areas/contact/faq/`
- **보이는 곳:** /contact 맨 아래
- **파일:** `index.tsx`
- **내용:** 기업 고객 질문 앞 3개(접기/펼치기) + 전체 질문 링크
- **데이터:** 사전의 `businessFaq` 앞 3개, `faq.business·faq.title`, 링크 글자 `jobs.faqMore[1]`

수정은 이 폴더 안에서만. 다른 영역도 쓰는 값(회사 정보·지점·고객사·질문)은 `src/lib/site.ts`에서 고친다.
