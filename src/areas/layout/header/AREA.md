# 상단 메뉴바

- **영역 경로:** `src/areas/layout/header/`
- **보이는 곳:** 모든 페이지 맨 위
- **파일:** `index.tsx` (서버: 그 언어 메뉴 이름표와 언어 목록을 고른다), `HeaderClient.tsx` (브라우저: 메뉴·모바일 메뉴), `LanguageMenu.tsx` (언어 고르기)
- **내용:** 로고(심볼+"태산 리크루트 & 태산크루"), 메뉴, Contact 옆 언어 고르기(지구본 + 지금 언어), 대표번호 노란 버튼. 회사소개에 마우스를 올리면 하위 메뉴(중점분야·지점안내). 휴대폰 메뉴 맨 아래에도 언어 목록
- **데이터:** 메뉴 = site.ts `nav`(주소·열쇠), 이름표 = 사전의 `nav`, 언어 = `src/i18n/config.ts`의 `locales`·`localeInfo`, 번호 = `company.mainPhone`, 로고 = components/Logo.tsx
- **주의:** 언어를 바꾸면 지금 보는 페이지의 같은 자리로 간다 (/jobs → /en/jobs). 링크는 항상 `lp(lang, 주소)`로 만든다

수정은 이 폴더 안에서만. 다른 영역도 쓰는 값(회사 정보·지점·고객사·질문)은 `src/lib/site.ts`에서 고친다.
