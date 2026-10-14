# 지점 페이지 모집 공고

- **영역 경로:** `src/areas/branch/postings/`
- **보이는 곳:** /branches/<지점>
- **파일:** `index.tsx`
- **내용:** 이 지점 공고 카드(`shared/posting-card`) + 구글 채용 정보용 데이터. 공고가 없으면 전화 안내
- **데이터:** `recruitPosts` (branchSlug로 거른다)

수정은 이 폴더 안에서만. 다른 영역도 쓰는 값(회사 정보·지점·고객사·질문)은 `src/lib/site.ts`에서 고친다.
