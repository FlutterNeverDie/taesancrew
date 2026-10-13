# 태산크루 웹사이트

인력 아웃소싱 기업 태산크루(TS CREW) 홈페이지. 수진역점 · 천호점 · 경기광주점.

- Next.js 16 (App Router) · TypeScript · Tailwind CSS 4
- 정적 export: `npm run build` → `out/` 폴더를 그대로 호스팅

## 실행

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # out/ 생성
```

## 내용 고치는 곳

| 무엇 | 파일 |
| --- | --- |
| 회사 정보, 지점, 강점, 고객사, 채용 공고 | `src/lib/site.ts` (`null` = 화면에 "준비 중") |
| 블로그 글 | `content/blog/*.md` — 파일 하나가 글 하나, 파일 이름이 주소 |
| 채용 전단 이미지 | `public/images/recruit/` |
| 수상·인증 | `src/app/awards/page.tsx`의 `awards` 배열 |
| 기획서 | `docs/기획서.html` |

블로그 글 머리말 형식:

```md
---
title: "글 제목"
date: 2026-10-13
category: 공지   # 공지 · 현장 소식 · 기업 인사이트 · 구직 가이드
summary: 목록과 검색 결과에 보이는 한 줄 요약
---
```
