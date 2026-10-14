# 공통 틀 (SiteChrome)

- **영역 경로:** `src/areas/layout/chrome/`
- **보이는 곳:** 모든 페이지 (본문 건너뛰기, 머리글, 본문, 바닥글, 연락 버튼)
- **파일:** `index.tsx` (틀), `HtmlLang.tsx` (다른 언어 페이지에서 `<html lang dir>` 맞추기)
- **내용:** 언어별 `lang`·`dir`을 틀 전체에 건다. 아랍어는 `dir="rtl"`. 검색용 회사 정보(JSON-LD)는 한국어 페이지에만
- **데이터:** `getDict(lang)`, `localeInfo`

수정은 이 폴더 안에서만. 다른 영역도 쓰는 값(회사 정보·지점·고객사·질문)은 `src/lib/site.ts`에서 고친다.
