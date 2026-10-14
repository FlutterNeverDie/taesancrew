# 유료직업소개소 등록증

- **영역 경로:** `src/areas/awards/licenses/`
- **보이는 곳:** /awards
- **파일:** `index.tsx`
- **내용:** 지점별 등록증 이미지(누르면 크게) + 등록번호. 이미지가 없는 지점은 "준비 중" 자리
- **데이터:** `branches[].agencyNo`, 이미지는 `public/images/licenses/<slug>.webp`에 넣고 `site.ts`의 `branches[].licenseImage`에 경로 입력. 문구는 사전의 `awards.*`
- **주의:** 등록증 이미지는 대표 생년월일을 가린 사본만 올린다. 사업자등록증 이미지는 올리지 않는다(번호만)

수정은 이 폴더 안에서만. 다른 영역도 쓰는 값(회사 정보·지점·고객사·질문)은 `src/lib/site.ts`에서 고친다.
