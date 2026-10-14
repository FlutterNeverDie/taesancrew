# 문자 보내기 → 지점 고르기 (공용)

- **영역 경로:** `src/areas/shared/sms-picker/`
- **보이는 곳:** /jobs 첫 화면
- **파일:** `index.tsx` (서버: 지점별 문자 링크를 만든다), `Picker.tsx` (브라우저: 버튼과 창)
- **내용:** [문자 보내기] 버튼 → 지점 고르는 창(모바일은 아래에서 올라옴) → 고른 지점 번호로 양식(희망 집결지 포함)이 채워진 문자 창
- **데이터:** `branches` (site.ts), 사전의 `smsPicker`, 문자 링크 `smsApplyHref` (src/i18n/sms.ts)

수정은 이 폴더 안에서만. 다른 영역도 쓰는 값(회사 정보·지점·고객사·질문)은 `src/lib/site.ts`에서 고친다.
