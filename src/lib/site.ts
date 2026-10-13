// 사이트 전체에서 쓰는 회사 정보. 자료가 오면 여기만 고치면 된다.
// null = 아직 자료 없음 → 화면에 "준비 중" 자리로 표시

export const company = {
  name: "태산크루",
  nameEn: "TS CREW",
  slogan: "인력이 곧 기업의 경쟁력이다",
  tagline: "믿을 수 있는 일자리 파트너",
  email: "crewts@naver.com",
  mainPhone: "010-2244-0031",
  officePhone: "031-753-8000",
  // 회사소개서에 "0331.721.0925"로 적혀 있어 031로 추정 — 확인 필요
  fax: "031-721-0925",
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
  name: string;
  area: string; // 근로자 모집 권역
  address: string;
  landmark: string | null;
  phone: string | null;
  bizNo: string | null; // 사업자등록번호
  agencyNo: string | null; // 유료직업소개소 등록번호
  owner: string | null;
};

export const branches: Branch[] = [
  {
    slug: "sujin",
    name: "수진역점",
    area: "성남",
    address: "경기도 성남시 수정구 탄리로 7, 1층",
    landmark: "수진역 3번 출구 앞",
    phone: "010-2244-0031",
    bizNo: null,
    agencyNo: null,
    owner: null,
  },
  {
    slug: "cheonho",
    name: "천호점",
    area: "서울 동부",
    address: "서울특별시 강동구 천호대로 1024, 힐스테이트 천호역젠트리스 지하2층 242호",
    landmark: "천호역 6번 출구 1분 거리",
    phone: "010-8141-0240",
    bizNo: null,
    agencyNo: null,
    owner: null,
  },
  {
    slug: "gwangju",
    name: "경기광주점",
    area: "경기 광주",
    address: "경기도 광주시 광주대로 11-5, 2층 (역동)",
    landmark: null,
    phone: null,
    bizNo: "365-14-02519",
    agencyNo: null,
    owner: "이선우",
  },
];

// 회사소개서의 사업영역
export const services = [
  { title: "물류·유통 아웃소싱", desc: "포장·피킹·검수·입출고·분배 등 물류센터 운영 인력" },
  { title: "제조·생산 아웃소싱", desc: "생산 라인, 조립·포장 공정 인력 공급" },
  { title: "근로자 파견·도급", desc: "필요한 인원만 보내는 파견부터 작업 단위로 맡는 도급까지" },
  { title: "채용·인사관리 대행", desc: "모집·선별·근태·급여까지 인력 운영 전반 대행" },
];

// 사용자가 정한 5대 강점 (순서 의미 없음 — 번호 붙이지 않는다)
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

// 회사소개서 "주요 고객사 현황". 로고 게재는 각 사 동의 후 이미지로 교체
export const clients = [
  "CJ대한통운", "LF", "롯데", "신세계", "LX판토스", "현대그린푸드", "더현대", "DFD",
  "무신사", "유니클로", "이베이", "자라", "폴로 랄프로렌", "리바이스", "스탠리", "아이더",
  "일리", "웅진", "게스", "동원", "컨버스", "구르메F&B", "블랙야크", "K2",
  "한익스프레스", "나이키", "마운티아", "파스퇴르", "C&A Global", "샘표",
];

export const recruitPosts = [
  { src: "/images/recruit/sujin-musinsa.jpg", branch: "수진역점", title: "무신사 물류센터 알바" },
  { src: "/images/recruit/sujin-brandworks.jpg", branch: "수진역점", title: "브랜드웍스 물류센터 포장·피킹" },
  { src: "/images/recruit/cheonho-logistics.jpg", branch: "천호점", title: "물류센터 일급 세후 10만원 이상" },
  { src: "/images/recruit/cheonho-cold.jpg", branch: "천호점", title: "냉장물류센터 알바" },
  { src: "/images/recruit/cheonho-icheon.jpg", branch: "천호점", title: "이천 냉장물류센터 알바" },
  { src: "/images/recruit/cheonho-musinsa.jpg", branch: "천호점", title: "무신사 물류센터 알바" },
];

export const nav = [
  { href: "/about", label: "회사소개" },
  { href: "/business", label: "기업 고객" },
  { href: "/jobs", label: "일자리" },
  { href: "/awards", label: "수상·인증" },
  { href: "/branches", label: "지점 안내" },
  { href: "/blog", label: "소식" },
];

export const tel = (phone: string) => `tel:${phone.replaceAll("-", "")}`;
