# 모바일 하단 고정 바

- **영역 경로:** `src/areas/layout/mobile-call-bar/`
- **보이는 곳:** 모바일(1024px 미만) 화면 맨 아래 고정
- **파일:** `index.tsx`
- **내용:** 전화하기 / 문의 남기기 두 버튼. `PhoneIcon`도 여기서 export
- **데이터:** `company.mainPhone`
- **주의:** PC에서는 숨김. body 아래 여백(pb-16)과 짝

수정은 이 폴더 안에서만. 다른 영역도 쓰는 값(회사 정보·지점·고객사·질문)은 `src/lib/site.ts`에서 고친다.
