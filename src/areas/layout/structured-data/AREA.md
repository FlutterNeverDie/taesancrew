# 검색용 회사·지점 정보 (구조화 데이터)

- **영역 경로:** `src/areas/layout/structured-data/`
- **보이는 곳:** 화면에는 안 보임. 모든 페이지의 HTML 안에 들어가서 구글·네이버가 읽는다
- **파일:** `index.tsx`
- **내용:** 회사(Organization) 1개 + 지점(EmploymentAgency, 직업소개소) 3개의 이름·주소·전화
- **데이터:** `company`, `branches`
- **주의:** 확인은 구글 "리치 결과 테스트"(search.google.com/test/rich-results)에 사이트 주소를 넣어 본다

수정은 이 폴더 안에서만. 다른 영역도 쓰는 값(회사 정보·지점·고객사·질문)은 `src/lib/site.ts`에서 고친다.
