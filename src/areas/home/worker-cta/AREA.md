# 구직자 안내

- **영역 경로:** `src/areas/home/worker-cta/`
- **보이는 곳:** /
- **파일:** `index.tsx`
- **내용:** "처음이어도 괜찮아요" + 일자리 링크 + 짧은 조건 목록
- **데이터:** 사전의 `home.workerTitle·workerDesc·workerPerks`, 보낼 항목은 `sms.fields`(일자리 문자 양식과 같은 목록)
- **주의:** 일급 금액은 넣지 않는다

수정은 이 폴더 안에서만. 다른 영역도 쓰는 값(회사 정보·지점·고객사·질문)은 `src/lib/site.ts`에서 고친다.
