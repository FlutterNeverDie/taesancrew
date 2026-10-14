import type { VisaText } from "./ko";

// 비자 안내 영어 번역 (원본 ko.ts와 구조·순서를 같게)
export const en: VisaText = {
  metaTitle: "Work Guide by Visa for Foreigners (F-2, F-4, F-5, F-6, H-2) | Taesan Crew Staffing Office",
  metaDesc:
    "Foreigners can also work at logistics centers. The work you can do depends on your visa (status of stay), so we sorted it by visa: F-2, F-4, F-5, F-6, H-2, E-9, D-2 and more. As of October 2026.",
  eyebrow: "Work guide for foreigners",
  title: ["Check by visa", "whether you can work"],
  lead: "Foreigners can work too. But the law decides what work you can do based on your visa (status of stay), so please tell us your nationality and visa type when you apply. We only introduce work that fits your status of stay.",
  korean: "Work at the site is done in Korean, so you need to be able to speak everyday Korean to work.",
  updated: "As of October 2026",
  groups: [
    {
      tone: "ok",
      title: "You can do most work",
      desc: "These statuses of stay have almost no limits on work.",
      items: [
        { code: "F-5", name: "Permanent Resident", note: "No limits on work." },
        { code: "F-6", name: "Marriage Migrant", note: "No limits on work." },
        { code: "F-2", name: "Resident", note: "Mostly no limits. Some sub-types can only work in the field they worked in before, so this needs to be checked." },
      ],
    },
    {
      tone: "check",
      title: "Depends on the type of work",
      desc: "Some work is allowed and some is not, so the branch will look at the site work and check it for you.",
      items: [
        {
          code: "F-4",
          name: "Overseas Korean",
          note: "Some simple labor jobs are not allowed. A new standard has applied since February 12, 2026, and some work such as loading and unloading is now allowed, but parcel delivery, delivery and cleaning are still limited. There may be exceptions if you live in a population decline area.",
        },
      ],
    },
    {
      tone: "no",
      title: "Hard to do this work",
      desc: "These statuses of stay only allow work at a set workplace or need a separate permit.",
      items: [
        {
          code: "H-2",
          name: "Working Visit",
          note: "Since February 2026 it is no longer newly issued and has been changed to Overseas Korean (F-4). If you have H-2 now, you can only work in allowed industries, and you must report the start of employment within 15 days of starting work.",
        },
        { code: "E-9", name: "Non-professional Employment (Employment Permit System)", note: "You can only work at the workplace that received the employment permit. Changing workplaces is only possible in cases set by law." },
        { code: "D-2·D-4", name: "Study Abroad / Language Training", note: "Only part-time work confirmed by your school and permitted by immigration is allowed, and your working hours are limited." },
        { code: "C-3, etc.", name: "Short-term Visit / Tourism", note: "You cannot work." },
        { code: "E-7, etc.", name: "Professional employment such as Special Activities", note: "You can only work at the permitted workplace and in the permitted job." },
      ],
    },
  ],
  checkTitle: "If you want to know exactly whether you can work with your visa",
  checks: [
    { label: "Immigration Contact Center 1345", desc: "Call 1345 (from abroad +82-1345). Help is available in many languages.", href: "tel:1345" },
    { label: "HiKorea", desc: "Guides by status of stay, applications for part-time work and activities outside your status of stay", href: "https://www.hikorea.go.kr" },
    { label: "Korea Immigration Service, Ministry of Justice", desc: "Original notice on employment restrictions for Overseas Koreans (F-4)", href: "https://www.immigration.go.kr" },
  ],
  sourcesTitle: "Sources",
  sources: [
    { label: "Ministry of Justice Notice No. 2026-65: Employment restrictions for Overseas Koreans (F-4) (Korean)", href: "https://www.immigration.go.kr/bbs/moj/184/492760/download.do" },
    { label: "New employment restriction standard for Overseas Koreans (F-4) takes effect - Korea Multicultural News (Korean)", href: "https://www.kmcn.kr/news/article.html?no=9126" },
    {
      label: "Easy Manual for Foreign Nationals of Korean Descent, February 2026 (Korean)",
      href: "https://jincci.korcham.net/file/dext5uploaddata/2026/%EB%B6%99%EC%9E%84%203.%20%EC%95%8C%EA%B8%B0%EC%89%AC%EC%9A%B4%20%EC%99%B8%EA%B5%AD%EA%B5%AD%EC%A0%81%EB%8F%99%ED%8F%AC%20%EC%97%85%EB%AC%B4%20%EB%A7%A4%EB%89%B4%EC%96%BC.pdf",
    },
    { label: "Work allowed by status of stay (2026) - lacha (Korean)", href: "https://lacha.co.kr/korea-guide/ko/korea-work-permission-by-visa-status/" },
    { label: "Ministry of Justice Visa Navigator (Korean)", href: "https://www.immigration.go.kr/bbs/immigration_eng/230/454086/download.do" },
  ],
  notice: "This page is a general guide as of October 2026. Laws and standards can change, and conditions can differ from person to person even with the same visa. Get the final decision from an immigration office.",
  applyTitle: "Checked your visa? Apply by text",
  applyDesc: "Write your nationality and visa type in the text, and the branch manager will guide you to a suitable site.",
  applyButton: "See jobs",
  toneLabel: { ok: "Possible", check: "Check needed", no: "Difficult" },
};
