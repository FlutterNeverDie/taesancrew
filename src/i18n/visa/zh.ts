import type { VisaText } from "./ko";

// 비자 안내 중국어(간체) 번역 (원본 ko.ts와 구조·순서를 같게)
export const zh: VisaText = {
  metaTitle: "外国人按签证类型的工作说明 (F-2、F-4、F-5、F-6、H-2) | Taesan Crew 职业介绍所",
  metaDesc:
    "外国人也可以在物流中心工作。能做的工作因签证(滞留资格)而不同，我们按 F-2、F-4、F-5、F-6、H-2、E-9、D-2 等签证类型做了整理。以2026年10月为准。",
  eyebrow: "外国人工作说明",
  title: ["请按签证类型", "确认能否工作"],
  lead: "外国人也可以工作。但是能做什么工作，法律按签证(滞留资格)做了规定，所以报名时请一定告诉我们您的国籍和签证类型。我们只介绍符合您滞留资格的工作。",
  korean: "现场用韩语沟通，所以需要能用韩语进行日常对话才能工作。",
  updated: "以2026年10月为准",
  groups: [
    {
      tone: "ok",
      title: "大部分工作都可以做",
      desc: "这些滞留资格对就业活动几乎没有限制。",
      items: [
        { code: "F-5", name: "永住", note: "没有就业限制。" },
        { code: "F-6", name: "结婚移民", note: "没有就业限制。" },
        { code: "F-2", name: "居住", note: "大部分没有限制。部分细分类型只能从事原来的领域，需要确认。" },
      ],
    },
    {
      tone: "check",
      title: "需要根据工作种类确认",
      desc: "能做和不能做的工作是分开的，门店会看现场工作内容帮您确认。",
      items: [
        {
          code: "F-4",
          name: "在外同胞",
          note: "部分简单劳务不能做。从2026年2月12日起适用新标准，装卸、码货等部分工作变为可以做，但快递、配送、清洁等仍然受限制。如果住在人口减少地区，可能会有例外。",
        },
      ],
    },
    {
      tone: "no",
      title: "这类工作很难做",
      desc: "这些滞留资格只能在指定的工作单位工作，或者需要另外取得许可。",
      items: [
        {
          code: "H-2",
          name: "访问就业",
          note: "从2026年2月起不再新发，已改为在外同胞(F-4)。现在持有 H-2 的人只能在允许的行业工作，开始工作后必须在15天内进行就业开始申报。",
        },
        { code: "E-9", name: "非专业就业(雇佣许可制)", note: "只能在取得雇佣许可的工作单位工作。更换工作单位也只有在法律规定的情况下才可以。" },
        { code: "D-2·D-4", name: "留学·语言研修", note: "只能做经学校确认并取得出入境许可的兼职，工作时间也有规定。" },
        { code: "C-3 等", name: "短期访问·旅游", note: "不能工作。" },
        { code: "E-7 等", name: "特定活动等专业就业", note: "只能在获得许可的工作单位和业务中工作。" },
      ],
    },
  ],
  checkTitle: "想准确知道自己的签证能否工作",
  checks: [
    { label: "外国人综合咨询中心 1345", desc: "拨打 1345 (在国外拨打 +82-1345)。可以用多种语言咨询。", href: "tel:1345" },
    { label: "HiKorea", desc: "按滞留资格的说明，申请兼职就业·滞留资格外活动许可", href: "https://www.hikorea.go.kr" },
    { label: "法务部出入境·外国人政策本部", desc: "在外同胞(F-4)就业活动限制范围告示原文", href: "https://www.immigration.go.kr" },
  ],
  sourcesTitle: "参考资料",
  sources: [
    { label: "法务部告示第2026-65号 在外同胞(F-4)就业活动限制范围 (韩语)", href: "https://www.immigration.go.kr/bbs/moj/184/492760/download.do" },
    { label: "在外同胞(F-4)就业限制新标准实施 - 韩国多文化新闻 (韩语)", href: "https://www.kmcn.kr/news/article.html?no=9126" },
    {
      label: "简明外国国籍同胞业务手册 2026.2 (韩语)",
      href: "https://jincci.korcham.net/file/dext5uploaddata/2026/%EB%B6%99%EC%9E%84%203.%20%EC%95%8C%EA%B8%B0%EC%89%AC%EC%9A%B4%20%EC%99%B8%EA%B5%AD%EA%B5%AD%EC%A0%81%EB%8F%99%ED%8F%AC%20%EC%97%85%EB%AC%B4%20%EB%A7%A4%EB%89%B4%EC%96%BC.pdf",
    },
    { label: "按滞留资格的可就业范围 (2026) - lacha (韩语)", href: "https://lacha.co.kr/korea-guide/ko/korea-work-permission-by-visa-status/" },
    { label: "法务部签证导航 (韩语)", href: "https://www.immigration.go.kr/bbs/immigration_eng/230/454086/download.do" },
  ],
  notice: "本页是以2026年10月为准的一般说明。法律和标准可能会变，即使是同一种签证，每个人的条件也可能不同。最终判断请向出入境·外国人管理机关确认。",
  applyTitle: "确认好签证后，请用短信报名",
  applyDesc: "请在短信里一起写上国籍和签证类型，门店代表会为您介绍合适的现场。",
  applyButton: "去看工作机会",
  toneLabel: { ok: "可以", check: "需要确认", no: "困难" },
};
