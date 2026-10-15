# 현장 사진

- **영역 경로:** `src/areas/about/photos/`
- **보이는 곳:** /about 숫자 줄 아래
- **파일:** `index.tsx`
- **내용:** 현장 사진 격자 (휴대폰 2칸, PC 3칸). 사진 아래에 제목, 누르면 크게. 사진이 없으면 실제 사이트에서는 섹션이 안 보이고, 로컬 개발 서버에서만 "준비 중" 자리 6칸
- **사진 넣는 법:** `content/photos/`에 `01-제목.jpg`처럼 넣는다 (자세한 건 그 폴더의 README.md). 빌드할 때 `scripts/field-photos.mjs`가 WebP로 줄여 `public/images/field/`에 만들고 목록(manifest.json)을 쓴다. 로컬에서 바로 보려면 `npm run photos`
- **데이터:** 제목·설명 문구는 사전의 `about.photosTitle·photosDesc`. 사진 제목은 파일 이름 그대로라 모든 언어에서 같은 글자
- **주의:** 사람 얼굴은 동의를 받거나 흐리게. 촬영 위치(GPS) 정보는 변환할 때 지워진다

수정은 이 폴더 안에서만. 다른 영역도 쓰는 값(회사 정보·지점·고객사·질문)은 `src/lib/site.ts`에서 고친다.
