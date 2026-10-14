# 지금 모집 중인 공고

- **영역 경로:** `src/areas/jobs/postings/`
- **보이는 곳:** /jobs
- **파일:** `index.tsx`
- **내용:** 공고 카드 격자(전단 이미지 + 같은 내용 글자, `shared/posting-card`) + 구글 채용 정보용 데이터
- **데이터:** `recruitPosts`, public/images/recruit/
- **주의:** 새 전단은 1200px 이하로 줄여 WebP로 바꿔 넣고(`cwebp -q 80 원본.jpg -o 이름.webp`) recruitPosts에 이미지와 글자를 같이 추가. 일급 금액은 글자로 쓰지 않는다

수정은 이 폴더 안에서만. 다른 영역도 쓰는 값(회사 정보·지점·고객사·질문)은 `src/lib/site.ts`에서 고친다.
