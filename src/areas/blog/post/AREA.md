# 소식 글 본문

- **영역 경로:** `src/areas/blog/post/`
- **보이는 곳:** /blog/<slug>
- **파일:** `index.tsx`
- **내용:** 글 제목·날짜·본문
- **데이터:** content/blog/<slug>.md
- **주의:** 새 글은 md 파일만 추가하면 된다 (README 머리말 형식 참고)

수정은 이 폴더 안에서만. 다른 영역도 쓰는 값(회사 정보·지점·고객사·질문)은 `src/lib/site.ts`에서 고친다.
