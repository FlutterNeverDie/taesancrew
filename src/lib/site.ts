// 사이트 전체에서 쓰는 회사 정보. 자료가 오면 여기만 고치면 된다.
// null = 아직 자료 없음 → 화면에 "준비 중" 자리로 표시

export const company = {
  name: "태산크루",
  // 홈페이지 제목 (태산 홈페이지 변경.docx)
  title: "태산 리크루트 & 태산크루",
  nameEn: "TS CREW",
  slogan: "인력이 곧 기업의 경쟁력이다",
  tagline: "믿을 수 있는 일자리 파트너",
  email: "crewts@naver.com",
  // 대표번호 = 경기광주 본점(대표 업무폰)
  mainPhone: "010-5801-2036",
  officePhone: "031-769-1035",
  fax: "031-769-1036",
};

// 메인·회사소개에서 강조하는 숫자
export const stats = [
  { value: "20년+", label: "물류업계 현장 노하우" },
  { value: "100명+", label: "하루 투입 근로자" },
  { value: "3개", label: "직영 지점" },
  { value: "10대+", label: "출퇴근 차량 운영" },
];

export type Branch = {
  slug: string;
  name: string; // 화면에 보이는 지점명
  brand: string; // 지점 상호 브랜드: 경기광주 본점만 "태산 리크루트", 나머지는 "태산크루"
  legalName: string; // 사업자 정보에 쓰는 이름 ({brand} {legalName})
  area: string; // 근로자 모집 권역
  address: string;
  landmark: string | null;
  phone: string | null;
  bizNo: string | null; // 사업자등록번호
  agencyNo: string | null; // 유료직업소개소 등록번호
  owner: string | null;
  opened: string; // 개업 연월
};

// 본점이 맨 앞. 연락은 본점으로 모인다
export const branches: Branch[] = [
  {
    slug: "gwangju",
    name: "경기광주 본점",
    brand: "태산 리크루트",
    legalName: "경기광주 본점",
    area: "경기 광주",
    address: "경기도 광주시 광주대로 11-5, 2층 (역동)",
    landmark: null,
    phone: "010-5801-2036",
    bizNo: "365-14-02519",
    agencyNo: null,
    owner: "이선우",
    opened: "2023. 11",
  },
  {
    slug: "sujin",
    name: "성남 수진역점",
    brand: "태산크루",
    legalName: "성남점",
    area: "성남",
    address: "경기도 성남시 수정구 단대로 7",
    landmark: "수진역 3번 출구 1분",
    phone: "010-2244-0031",
    bizNo: null,
    agencyNo: null,
    owner: "이나라",
    opened: "2025. 9",
  },
  {
    slug: "cheonho",
    name: "천호점",
    brand: "태산크루",
    legalName: "천호점",
    area: "서울 동부",
    address: "서울 강동구 천호대로 1024, 천호역 젠트리스",
    landmark: "천호역 6번 출구 1분",
    phone: "010-8141-0240",
    bizNo: null,
    agencyNo: null,
    owner: "모목원",
    opened: "2026. 10",
  },
];

// 회사소개서의 사업영역
export const services = [
  { title: "물류·유통 아웃소싱", desc: "포장·피킹·검수·입출고·분배 등 물류센터 운영 인력" },
  { title: "제조·생산 아웃소싱", desc: "생산 라인, 조립·포장 공정 인력 공급" },
  { title: "도급", desc: "작업 단위로 맡아 인력 관리와 결과까지 책임집니다" },
  { title: "채용·인사관리 대행", desc: "모집·선별·근태·급여까지 인력 운영 전반 대행" },
];

// 사용자가 정한 5대 강점 (순서 의미 없음 - 번호 붙이지 않는다)
export const strengths = [
  {
    title: "20년 이상의 현장 경력",
    desc: "물류업계에서 20년 넘게 쌓은 노하우로 현장이 원하는 사람을 정확히 압니다.",
  },
  {
    title: "3개 직영 지점",
    desc: "경기 광주·성남·서울 동부 세 권역에서 근로자를 모집해 넓은 지역에 빠르게 공급합니다.",
  },
  {
    title: "하루 100명 이상 투입",
    desc: "매일 100명 이상의 근로자를 현장에 배치하는 규모와 안정적인 인력풀을 갖췄습니다.",
  },
  {
    title: "신속 & 책임",
    desc: "근로자 문제가 생기면 소장이 직접 현장으로 찾아가 해결합니다. 24시간 연중무휴로 도급사의 의견을 듣습니다.",
  },
  {
    title: "맞춤형 인력 + 안전교육",
    desc: "현장 난이도에 맞춰 경력자를 우선 배치하고, 모든 인력은 안전교육을 마친 뒤 투입합니다.",
  },
];

export const process = [
  { step: "수요 분석", desc: "요청 접수, 인력 규모·근무 조건·현장 특성 분석" },
  { step: "인력 확보", desc: "직영점 인력 DB와 신규 채용으로 인력풀 구성" },
  { step: "인력 선별", desc: "경력·근무 이력·업무 적합도 기준 선별" },
  { step: "배치·투입", desc: "안전교육 후 출퇴근 차량으로 신속 배치" },
  { step: "사후 관리", desc: "대표 직접 순회 관리, 고객사 피드백 반영" },
];

// 회사소개서 "주요 고객사 현황". 로고는 회사소개서 PDF에서 뽑아 흰 여백을 잘라낸 것 (public/images/clients/*.png)
// 배열 순서 = 화면 순서. 앞에 둘 회사는 위로 올린다. logo가 없으면 이름을 글자로 보여준다
// w, h = 로고 파일의 실제 픽셀 크기 (화면 크기 계산용, 파일을 바꾸면 같이 바꿀 것)
// 올리브영·스타벅스·신상닷컴·소다는 로고 파일 없음 (스타벅스·신상닷컴·소다는 대표 확인 후 노출 확정)
export type Client = { name: string; logo?: string; w?: number; h?: number };

export const clients: Client[] = [
  { name: "무신사", logo: "musinsa", w: 300, h: 314 },
  { name: "유니클로", logo: "uniqlo", w: 300, h: 311 },
  { name: "올리브영" },
  { name: "CJ대한통운", logo: "cj-logistics", w: 222, h: 132 },
  { name: "신세계", logo: "shinsegae", w: 234, h: 177 },
  { name: "롯데", logo: "lotte", w: 210, h: 210 },
  { name: "나이키", logo: "nike", w: 300, h: 254 },
  { name: "더현대", logo: "the-hyundai", w: 300, h: 313 },
  { name: "현대그린푸드", logo: "hyundai-greenfood", w: 275, h: 238 },
  { name: "LF", logo: "lf", w: 198, h: 194 },
  { name: "자라", logo: "zara", w: 300, h: 313 },
  { name: "폴로 랄프로렌", logo: "polo", w: 300, h: 299 },
  { name: "스타벅스" },
  { name: "이베이", logo: "ebay", w: 289, h: 162 },
  { name: "LX판토스", logo: "lx-pantos", w: 250, h: 57 },
  { name: "리바이스", logo: "levis", w: 252, h: 165 },
  { name: "컨버스", logo: "converse", w: 300, h: 313 },
  { name: "게스", logo: "guess", w: 260, h: 236 },
  { name: "블랙야크", logo: "blackyak", w: 265, h: 313 },
  { name: "K2", logo: "k2", w: 284, h: 223 },
  { name: "아이더", logo: "eider", w: 300, h: 313 },
  { name: "동원", logo: "dongwon", w: 300, h: 313 },
  { name: "스탠리", logo: "stanley", w: 240, h: 138 },
  { name: "웅진", logo: "woongjin", w: 255, h: 78 },
  { name: "일리", logo: "illy", w: 300, h: 313 },
  { name: "구르메F&B", logo: "gourmet-fnb", w: 225, h: 242 },
  { name: "마운티아", logo: "mountia", w: 300, h: 313 },
  { name: "파스퇴르", logo: "pasteur", w: 242, h: 115 },
  { name: "샘표", logo: "sempio", w: 174, h: 94 },
  { name: "DFD", logo: "dfd", w: 284, h: 145 },
  { name: "한익스프레스", logo: "hanexpress", w: 275, h: 77 },
  { name: "C&A Global", logo: "cna-global", w: 300, h: 313 },
  { name: "신상닷컴" },
  { name: "소다" },
];

export const recruitPosts = [
  { src: "/images/recruit/sujin-musinsa.jpg", branch: "성남 수진역점", title: "무신사 물류센터 알바" },
  { src: "/images/recruit/sujin-brandworks.jpg", branch: "성남 수진역점", title: "브랜드웍스 물류센터 포장·피킹" },
  { src: "/images/recruit/cheonho-logistics.jpg", branch: "천호점", title: "물류센터 알바" },
  { src: "/images/recruit/cheonho-cold.jpg", branch: "천호점", title: "냉장물류센터 알바" },
  { src: "/images/recruit/cheonho-icheon.jpg", branch: "천호점", title: "이천 냉장물류센터 알바" },
  { src: "/images/recruit/cheonho-musinsa.jpg", branch: "천호점", title: "무신사 물류센터 알바" },
];

export type NavItem = { href: string; label: string; children?: { href: string; label: string }[] };

export const nav: NavItem[] = [
  {
    href: "/about",
    label: "회사소개",
    children: [
      { href: "/business", label: "중점분야" },
      { href: "/branches", label: "지점안내" },
      { href: "/about#history", label: "연혁" },
    ],
  },
  { href: "/jobs", label: "일자리" },
  { href: "/blog", label: "소식" },
  { href: "/faq", label: "자주 묻는 질문" },
  { href: "/contact", label: "Contact" },
];

// 하단 메뉴처럼 한 줄로 펼친 목록
export const navFlat = nav.flatMap((item) => [{ href: item.href, label: item.label }, ...(item.children ?? [])]);

export type Faq = { q: string; a: string };

// 회사소개서·강점 자료에 있는 사실로만 답한다
export const businessFaq: Faq[] = [
  { q: "하루에 몇 명까지 보낼 수 있나요?", a: "매일 100명 이상의 근로자를 현장에 배치하고 있습니다. 필요한 인원과 기간을 알려주시면 가능한 규모를 바로 안내드립니다." },
  { q: "얼마나 빨리 인력을 받을 수 있나요?", a: "세 직영 지점의 인력 DB를 기반으로 당일 배치도 가능합니다. 요청이 오면 24시간 안에 답을 드립니다." },
  { q: "어느 지역까지 가능한가요?", a: "경기 광주, 성남, 서울 동부 세 권역에서 근로자를 모집하며, 출퇴근 차량으로 경기도 전역 현장에 배치할 수 있습니다." },
  { q: "어떤 업종에 인력을 보내나요?", a: "물류·유통 센터의 포장, 피킹, 검수, 입출고 업무와 제조·생산 현장 인력을 주로 공급합니다." },
  { q: "도급도 맡길 수 있나요?", a: "네. 작업 단위로 맡아 태산크루가 인력 관리와 결과까지 책임집니다." },
  { q: "초보자가 오면 어떡하죠?", a: "현장 난이도에 맞춰 경력자를 우선 배치합니다. 새로 오는 인력은 직무와 안전 교육을 마친 뒤 투입합니다." },
  { q: "근태와 현황은 어떻게 공유받나요?", a: "출퇴근 근태, 근무 만족도와 이슈 개선사항, 신규 채용과 배치 현황을 일일·주간·월간 리포트로 공유합니다." },
  { q: "정식 등록된 업체인가요?", a: "지점별로 유료직업소개소 등록을 마치고 운영하고 있습니다. 등록증은 수상·인증 페이지에서 확인할 수 있습니다." },
];

export const workerFaq: Faq[] = [
  { q: "처음인데 할 수 있나요?", a: "네. 포장, 피킹, 검수처럼 어렵지 않은 업무가 많고, 시작 전에 안전교육을 받습니다." },
  { q: "어떻게 지원하나요?", a: "가까운 지점 번호로 성함, 생년월일, 거주지, 일 시작 가능일을 문자로 보내주세요. 홈페이지 문의하기에서 남겨도 됩니다." },
  { q: "하루만 일해도 되나요?", a: "네. 하루만, 단기, 중장기 모두 가능합니다. 주말에만 일하고 싶은 분도 연락 주세요." },
  { q: "급여는 언제 받나요?", a: "현장에 따라 당일 또는 익일에 지급합니다. 지점에 문의하면 정확히 안내드립니다." },
  { q: "외국인도 가능한가요?", a: "현장에 따라 가능합니다(F비자 등). 지점으로 문의해 주세요." },
  { q: "상하차 업무인가요?", a: "상하차가 없는 현장이 많습니다. 모집 공고마다 업무 내용이 적혀 있습니다." },
  { q: "어느 지점으로 가면 되나요?", a: "사는 곳에서 가까운 지점으로 연락하세요. 경기광주 본점은 경기 광주, 성남 수진역점은 성남, 천호점은 서울 동부 권역입니다. 잘 모르겠으면 본점으로 전화 주세요." },
];

export const tel = (phone: string) => `tel:${phone.replaceAll("-", "")}`;

// 문자 지원 양식. 링크를 누르면 이 내용이 채워진 문자 창이 열린다
// 희망 근무지가 있어야 지점장이 자기 지점 지원자를 바로 알아본다
export const workplaceChoices = "경기광주 / 성남 / 천호";
export const smsFields: { label: string; hint?: string }[] = [
  { label: "성함" },
  { label: "생년월일" },
  { label: "거주지" },
  { label: "희망 근무지", hint: workplaceChoices },
  { label: "시작 가능일" },
];
// workplace를 넘기면 희망 근무지를 미리 채운다 (지점별 "문자 지원" 버튼)
export const smsApplyHref = (phone: string, workplace?: string) => {
  const lines = smsFields.map((f) =>
    f.label === "희망 근무지" ? `희망 근무지${workplace ? "" : ` (${workplaceChoices})`}: ${workplace ?? ""}` : `${f.label}: `,
  );
  return `sms:${phone.replaceAll("-", "")}?&body=${encodeURIComponent(["[일자리 지원]", ...lines].join("\n"))}`;
};
