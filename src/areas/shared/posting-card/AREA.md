# 채용 공고 카드 (공용)

- **영역 경로:** `src/areas/shared/posting-card/`
- **보이는 곳:** /jobs 모집 공고, /branches/<지점>
- **파일:** `index.tsx` (`PostingCard`: 전단 이미지 + 같은 내용 글자 / `PostingsJsonLd`: 구글 채용 정보용 데이터, 화면에 안 보임)
- **데이터:** `recruitPosts`, `recruitPostedAt`, `branches`
- **주의:** 일급 금액·나이 조건은 넣지 않는다. 새 공고는 site.ts `recruitPosts`에 이미지와 글자를 같이 넣고, 올린 날을 `recruitPostedAt`에 적는다

수정은 이 폴더 안에서만. 다른 영역도 쓰는 값(회사 정보·지점·고객사·질문)은 `src/lib/site.ts`에서 고친다.
