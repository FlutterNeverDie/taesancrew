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

수정은 **영역 단위**로 한다. 영역 지도: [`src/areas/README.md`](src/areas/README.md), 작업 규칙: [`CLAUDE.md`](CLAUDE.md)

| 무엇 | 파일 |
| --- | --- |
| 화면 한 덩어리(섹션) | `src/areas/<페이지>/<영역>/index.tsx` + `AREA.md` |
| 회사 정보, 지점, 강점, 고객사, 질문, 메뉴 | `src/lib/site.ts` |
| 색·글꼴 | `src/app/globals.css`의 `@theme` |
| 블로그 글 | `content/blog/*.md` - 파일 하나가 글 하나, 파일 이름이 주소 |
| 채용 전단 / 고객사 로고 / 대표 사진 | `public/images/recruit/`, `public/images/clients/`, `public/images/team/` |
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

## 디자인 스킬 (Claude Code)

`.claude/skills/`에 디자인 스킬 5개가 들어 있어, 이 폴더에서 Claude Code를 열면 자동으로 쓸 수 있다.

| 스킬 | 용도 | 출처 |
| --- | --- | --- |
| frontend-design | 디자인 방향·타이포·템플릿 티 안 나게 | Anthropic 공식 플러그인 |
| hallmark | AI 티 나는 디자인 패턴 점검(audit/redesign) | github.com/Nutlope/hallmark |
| emil-design-eng | 애니메이션·눌림·마이크로 인터랙션 | github.com/emilkowalski/skill |
| ui-ux-pro-max | 접근성·UX 규칙 검색 (`scripts/search.py`) | github.com/nextlevelbuilder/ui-ux-pro-max-skill |
| web-design-guidelines | Vercel 웹 인터페이스 가이드라인 점검 | vercel-labs/agent-skills |

디자인 토큰(색·글꼴)은 `src/app/globals.css`의 `@theme` 블록에만 둔다. 색은 남색(회사소개서) + 안전 노랑(채용 전단, 배차판·전화 버튼에만).
