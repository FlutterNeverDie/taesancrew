// 비자(체류자격)별 안내 페이지(/visa) 문구.
// 법령이 자주 바뀌는 내용이라 사전(dict)과 따로 둔다. 바뀌면 updated(기준일)와 근거 링크도 같이 고친다.
// 이 파일이 원본이고, 번역은 같은 폴더의 <언어>.ts (구조·배열 순서·개수를 같게. 다르면 빌드 실패)
// 근거: 출입국관리법 시행령 제23조, 법무부고시 제2026-65호(재외동포 F-4 취업활동 제한범위, 2026.2.12 시행),
//      외국국적동포 업무 매뉴얼(2026.2, H-2 신규 발급 중단), 대학 유학생 시간제 취업 안내

export type VisaGroup = {
  tone: "ok" | "check" | "no"; // 가능 / 확인 필요 / 어려움 (색으로 구분)
  title: string;
  desc: string;
  items: { code: string; name: string; note: string }[];
};

export const ko = {
  metaTitle: "외국인 비자별 근무 안내 (F-2·F-4·F-5·F-6·H-2) | 태산크루 인력사무소",
  metaDesc:
    "외국인도 물류센터에서 일할 수 있어요. 비자(체류자격)에 따라 가능한 일이 달라서 F-2, F-4, F-5, F-6, H-2, E-9, D-2 등 비자별로 정리했습니다. 2026년 10월 기준.",
  eyebrow: "외국인 근무 안내",
  title: ["비자별로", "일할 수 있는지 확인하세요"],
  lead: "외국인도 일할 수 있어요. 다만 비자(체류자격)에 따라 할 수 있는 일이 법으로 정해져 있어서, 지원할 때 국적과 비자 종류를 꼭 알려주세요. 체류자격에 맞는 일만 소개합니다.",
  korean: "현장에서 한국어로 소통하기 때문에, 일상적인 한국어 대화가 가능해야 일할 수 있어요.",
  updated: "2026년 10월 기준",
  groups: [
    {
      tone: "ok",
      title: "대부분 일할 수 있어요",
      desc: "취업 활동에 제한이 거의 없는 체류자격이에요.",
      items: [
        { code: "F-5", name: "영주", note: "취업 제한이 없어요." },
        { code: "F-6", name: "결혼이민", note: "취업 제한이 없어요." },
        { code: "F-2", name: "거주", note: "대부분 제한이 없어요. 일부 세부 유형은 하던 분야만 가능해서 확인이 필요해요." },
      ],
    },
    {
      tone: "check",
      title: "일의 종류에 따라 확인이 필요해요",
      desc: "할 수 있는 일과 없는 일이 나뉘어 있어서, 현장 업무를 보고 지점에서 확인해 드려요.",
      items: [
        {
          code: "F-4",
          name: "재외동포",
          note: "일부 단순노무는 할 수 없어요. 2026년 2월 12일부터 새 기준이 적용되어 하역·적재 등 일부 일이 가능해졌고, 택배·배달·청소 등은 여전히 제한돼요. 인구감소지역에 사는 경우 예외가 있을 수 있어요.",
        },
      ],
    },
    {
      tone: "no",
      title: "이 일로는 어려워요",
      desc: "정해진 사업장에서만 일하거나 따로 허가가 필요한 체류자격이에요.",
      items: [
        {
          code: "H-2",
          name: "방문취업",
          note: "2026년 2월부터 새로 발급되지 않고 재외동포(F-4)로 바뀌었어요. 지금 H-2를 가진 분은 허용된 업종에서만 일할 수 있고, 일을 시작하면 15일 안에 취업개시 신고를 해야 해요.",
        },
        { code: "E-9", name: "비전문취업(고용허가제)", note: "고용허가를 받은 사업장에서만 일할 수 있어요. 사업장 변경도 법에서 정한 경우에만 가능해요." },
        { code: "D-2·D-4", name: "유학·어학연수", note: "학교 확인과 출입국 허가를 받은 시간제 아르바이트만 가능하고, 일할 수 있는 시간이 정해져 있어요." },
        { code: "C-3 등", name: "단기방문·관광", note: "일할 수 없어요." },
        { code: "E-7 등", name: "특정활동 등 전문 취업", note: "허가받은 근무처와 업무에서만 일할 수 있어요." },
      ],
    },
  ] as VisaGroup[],
  checkTitle: "내 비자로 일할 수 있는지 정확히 알고 싶다면",
  checks: [
    { label: "외국인종합안내센터 1345", desc: "전화 1345 (외국에서는 +82-1345). 여러 나라 말로 상담해 줘요.", href: "tel:1345" },
    { label: "하이코리아 (HiKorea)", desc: "체류자격별 안내, 시간제 취업·체류자격 외 활동 허가 신청", href: "https://www.hikorea.go.kr" },
    { label: "법무부 출입국·외국인정책본부", desc: "재외동포(F-4) 취업활동 제한범위 고시 원문", href: "https://www.immigration.go.kr" },
  ],
  // 이 페이지 내용의 근거 (바뀌면 같이 고친다)
  sourcesTitle: "참고한 자료",
  sources: [
    { label: "법무부고시 제2026-65호 재외동포(F-4) 취업활동 제한범위", href: "https://www.immigration.go.kr/bbs/moj/184/492760/download.do" },
    { label: "재외동포(F-4) 취업 제한 새 기준 시행 - 한국다문화뉴스", href: "https://www.kmcn.kr/news/article.html?no=9126" },
    {
      label: "알기쉬운 외국국적동포 업무 매뉴얼 2026.2",
      href: "https://jincci.korcham.net/file/dext5uploaddata/2026/%EB%B6%99%EC%9E%84%203.%20%EC%95%8C%EA%B8%B0%EC%89%AC%EC%9A%B4%20%EC%99%B8%EA%B5%AD%EA%B5%AD%EC%A0%81%EB%8F%99%ED%8F%AC%20%EC%97%85%EB%AC%B4%20%EB%A7%A4%EB%89%B4%EC%96%BC.pdf",
    },
    { label: "체류자격별 취업 가능 범위 (2026) - lacha", href: "https://lacha.co.kr/korea-guide/ko/korea-work-permission-by-visa-status/" },
    { label: "법무부 비자 내비게이터", href: "https://www.immigration.go.kr/bbs/immigration_eng/230/454086/download.do" },
  ],
  notice: "이 페이지는 2026년 10월 기준의 일반 안내예요. 법과 기준은 바뀔 수 있고, 같은 비자라도 사람마다 조건이 다를 수 있어요. 최종 판단은 출입국·외국인관서에서 받으세요.",
  applyTitle: "비자를 확인했다면 문자로 지원하세요",
  applyDesc: "국적과 비자 종류를 함께 적어 주시면 지점 대표가 맞는 현장을 안내합니다.",
  applyButton: "일자리 보러 가기",
  toneLabel: { ok: "가능", check: "확인 필요", no: "어려움" },
};

export type VisaText = typeof ko;
