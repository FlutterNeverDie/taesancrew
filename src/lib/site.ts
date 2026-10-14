// 사이트 전체에서 쓰는 회사 정보. 자료가 오면 여기만 고치면 된다.
// null = 아직 자료 없음 → 화면에 "준비 중" 자리로 표시

export const company = {
  name: "태산크루",
  // 홈페이지 제목 (태산 홈페이지 변경.docx)
  title: "태산 리크루트 & 태산크루",
  // 배포 주소 (카톡 미리보기 등 절대 주소에 쓰임). 도메인을 연결하면 여기만 바꾼다
  siteUrl: "https://taesancrew.pages.dev",
  // 검색 등록 소유 확인 코드 (docs/검색등록.md). 받은 content 값만 넣는다. 빈 값이면 태그가 안 나간다
  verification: { google: "", naver: "1ac66f9851f34ee99246e2b1016d689ca858229a" },
  nameEn: "TS CREW",
  slogan: "인력이 곧 기업의 경쟁력이다",
  tagline: "믿을 수 있는 일자리 파트너",
  email: "crewts@naver.com",
  // 대표번호 = 경기광주 본점(대표 업무폰)
  mainPhone: "010-5801-2036",
  // 운영시간: 세 지점 모두 항시 운영 (지점안내·검색용 정보에 쓰임)
  hours: "항시 운영",
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
  address: string;
  landmark: string | null;
  mapQuery?: string; // 지도 검색어. 없으면 도로명 주소(쉼표 앞)로 검색
  phone: string | null;
  bizNo: string | null; // 사업자등록번호
  agencyNo: string | null; // 유료직업소개소 등록번호
  licenseImage: string | null; // 직업소개소 등록증 이미지 (대표 생년월일 가린 사본, public/images/licenses/)
  owner: string | null;
  opened: string; // 개업 연월
  // 지점 상세 페이지(/branches/<slug>)와 검색용. 지역 이름은 사무실이 있는 곳 (사는 곳과 상관없이 누구나 올 수 있다)
  region: string; // "성남"처럼 검색어에 쓰는 지역 이름
  locality: string; // 시·구 (검색용 주소)
  province: string; // 시·도 (검색용 주소)
  seoTitle: string; // 검색 결과에 뜨는 제목
  seoDesc: string; // 검색 결과 설명
  intro: string; // 지점 페이지 첫 문단
};

// 본점이 맨 앞. 연락은 본점으로 모인다
export const branches: Branch[] = [
  {
    slug: "gwangju",
    name: "경기광주 본점",
    brand: "태산 리크루트",
    legalName: "경기광주 본점",
    address: "경기도 광주시 광주대로 11-5, 2층 (역동)",
    landmark: null,
    phone: "010-5801-2036",
    bizNo: "365-14-02519",
    agencyNo: null,
    licenseImage: null,
    owner: "이선우",
    opened: "2023. 11",
    region: "경기광주",
    locality: "광주시",
    province: "경기도",
    seoTitle: "경기광주 인력사무소 | 태산 리크루트 경기광주 본점",
    seoDesc: "경기 광주시 역동 인력사무소 태산 리크루트 본점. 물류센터 알바·1일 알바 소개, 기업 인력 요청·도급 상담. 항시 운영, 010-5801-2036.",
    intro: "경기 광주시 광주대로에 있는 태산 리크루트 본점입니다. 일하실 분께는 물류센터 일을 소개하고, 인력이 필요한 기업의 요청과 도급 상담은 모두 이곳 대표번호로 받습니다.",
  },
  {
    slug: "sujin",
    name: "성남 수진역점",
    brand: "태산크루",
    legalName: "성남점",
    address: "경기도 성남시 수정구 탄리로 7, 1층 102호 (수진동)",
    landmark: "수진역 3번 출구 1분",
    phone: "010-2244-0031",
    bizNo: "252-33-01651",
    agencyNo: "제2025-3780385-14-5-00029호",
    licenseImage: "/images/licenses/sujin.webp",
    owner: "이나라",
    opened: "2025. 10",
    region: "성남",
    locality: "성남시",
    province: "경기도",
    seoTitle: "성남 인력사무소 | 태산크루 성남 수진역점 (수진역 3번 출구)",
    seoDesc: "성남 수진역 3번 출구 1분 인력사무소 태산크루. 무신사·브랜드웍스 물류센터 알바, 당일지급, 초보 가능, 수진역 출퇴근 통근버스. 010-2244-0031.",
    intro: "수진역 3번 출구에서 1분 거리의 태산크루 성남 수진역점입니다. 무신사·브랜드웍스 물류센터 일을 소개하고, 수진역에서 통근버스로 함께 출퇴근합니다.",
  },
  {
    slug: "cheonho",
    name: "천호점",
    brand: "태산크루",
    legalName: "천호점",
    address: "서울 강동구 천호대로 1024, 힐스테이트 천호역 젠트리스 지하 2층 242호 (성내동)",
    landmark: "천호역 6번 출구 1분",
    mapQuery: "힐스테이트 천호역 젠트리스", // 도로명 주소로는 구글 지도가 위치를 못 찾음
    phone: "010-8141-0240",
    bizNo: "239-95-02048",
    agencyNo: "제2026-3240289-14-5-00011호",
    licenseImage: "/images/licenses/cheonho.webp",
    owner: "모목원",
    opened: "2026. 10",
    region: "천호",
    locality: "강동구",
    province: "서울특별시",
    seoTitle: "천호 인력사무소 | 태산크루 천호점 (천호역 6번 출구, 강동구)",
    seoDesc: "서울 강동구 천호역 6번 출구 1분 인력사무소 태산크루 천호점. 물류센터·냉장물류센터 알바, 초보 가능, 천호역 출퇴근 셔틀. 010-8141-0240.",
    intro: "천호역 6번 출구 바로 앞 힐스테이트 천호역 젠트리스에 있는 태산크루 천호점입니다. 무신사 물류센터, 이천 냉장물류센터 등 일을 소개하고, 천호역에서 셔틀로 함께 출퇴근합니다.",
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
    desc: "경기광주·성남·천호 세 지점에서 서울·경기 곳곳의 근로자를 모집해 빠르게 공급합니다.",
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

// 회사소개서 "주요 고객사 현황". 로고는 회사소개서 PDF에서 뽑아 흰 여백을 잘라낸 것 (public/images/clients/*.webp)
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

export type RecruitPost = {
  slug: string;
  src: string; // 전단 이미지
  branchSlug: string;
  branch: string;
  title: string;
  site: string; // 일하는 곳
  tasks: string; // 하는 일
  hours: string; // 근무 시간
  days?: string; // 근무 요일
  pay: string; // 지급 방식 (금액은 사이트에 넣지 않는다)
  meet: string; // 집결지
  perks: string[]; // 혜택·조건
};

// 지금 모집 중인 공고. 전단 이미지 + 같은 내용을 글자로 (검색엔진이 글자만 읽을 수 있어서). 일급 금액·나이 조건은 넣지 않는다
// datePosted: 사이트에 올린 날 (구글 채용 정보용)
export const recruitPostedAt = "2026-10-13";
export const recruitPosts: RecruitPost[] = [
  {
    slug: "sujin-musinsa", src: "/images/recruit/sujin-musinsa.webp", branchSlug: "sujin", branch: "성남 수진역점",
    title: "무신사 물류센터 알바", site: "무신사 물류센터", tasks: "포장 · 피킹 · 검수 · 입고 · 출고",
    hours: "09:00 ~ 18:00", days: "월 ~ 금", pay: "당일 지급", meet: "수진역 3번 출구 태산크루 사무실 (신규는 7시 집결)",
    perks: ["수진역 ↔ 물류센터 통근버스", "점심 식사 제공", "초보 가능 · 경력자 우대", "외국인 가능", "스타렉스 운전 가능자 우대", "주말엔 다른 물류센터 근무 가능"],
  },
  {
    slug: "sujin-brandworks", src: "/images/recruit/sujin-brandworks.webp", branchSlug: "sujin", branch: "성남 수진역점",
    title: "브랜드웍스 물류센터 포장·피킹", site: "브랜드웍스 물류센터", tasks: "포장 · 피킹 · 검수 · 입고 · 출고",
    hours: "09:00 ~ 18:00", days: "월 ~ 금", pay: "당일 지급", meet: "수진역 3번 출구 태산크루 사무실 (신규는 7시 집결)",
    perks: ["수진역 ↔ 물류센터 통근버스", "점심 식사 제공", "초보 가능 · 경력자 우대", "외국인 가능", "스타렉스 운전 가능자 우대", "주말엔 다른 물류센터 근무 가능"],
  },
  {
    slug: "cheonho-logistics", src: "/images/recruit/cheonho-logistics.webp", branchSlug: "cheonho", branch: "천호점",
    title: "물류센터 알바", site: "물류센터", tasks: "물류센터 작업",
    hours: "09:00 ~ 18:00 (잔업 시 1.5배 수당)", pay: "월~목 근무는 다음 날, 금~토 근무는 다음 주 월요일 지급", meet: "힐스테이트 천호역 젠트리스 (천호역 6번 출구)",
    perks: ["천호역 출퇴근 셔틀", "점심 식사 무료", "1종 운전 가능 시 인센티브", "친구 동반 가능", "초보 환영", "당일 지원 가능"],
  },
  {
    slug: "cheonho-cold", src: "/images/recruit/cheonho-cold.webp", branchSlug: "cheonho", branch: "천호점",
    title: "냉장물류센터 알바", site: "냉장물류센터", tasks: "냉장물류센터 작업",
    hours: "11:00 ~ 20:00", pay: "지점에 문의", meet: "천호역 집결",
    perks: ["천호역 출퇴근 셔틀", "점심 식사 제공", "초보 가능", "단기 · 중장기 환영"],
  },
  {
    slug: "cheonho-icheon", src: "/images/recruit/cheonho-icheon.webp", branchSlug: "cheonho", branch: "천호점",
    title: "이천 냉장물류센터 알바", site: "이천 냉장물류센터", tasks: "포장 · 피킹 · 검수 · 분배",
    hours: "11:00 ~ 20:00", days: "월 ~ 금", pay: "당일 지급", meet: "천호역 6번 출구 1분, 힐스테이트 천호역 젠트리스",
    perks: ["천호역 → 이천 냉장물류센터 셔틀", "점심 식사 제공", "초보 가능 · 경력자 우대", "외국인 가능 (F비자)", "운전 가능자 당일 인센티브", "주말엔 다른 물류센터 근무 가능"],
  },
  {
    slug: "cheonho-musinsa", src: "/images/recruit/cheonho-musinsa.webp", branchSlug: "cheonho", branch: "천호점",
    title: "무신사 물류센터 알바", site: "무신사 물류센터", tasks: "물류센터 작업",
    hours: "09:00 ~ 18:00 (잔업 시 1.5배 수당)", pay: "다음 날 지급", meet: "천호역 집결",
    perks: ["천호역 출퇴근 셔틀", "점심 제공", "1종 운전 가능 시 인센티브", "초보 가능", "단기 · 중장기 환영"],
  },
];


export type NavItem = { href: string; label: string; children?: { href: string; label: string }[] };

export const nav: NavItem[] = [
  {
    href: "/about",
    label: "회사소개",
    children: [
      { href: "/business", label: "중점분야" },
      { href: "/branches", label: "지점안내" },
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
  { q: "어느 지역까지 가능한가요?", a: "경기광주·성남·천호 세 지점에서 근로자를 모집하며, 출퇴근 차량으로 경기도 전역 현장에 배치할 수 있습니다." },
  { q: "어떤 업종에 인력을 보내나요?", a: "물류·유통 센터의 포장, 피킹, 검수, 입출고 업무와 제조·생산 현장 인력을 주로 공급합니다." },
  { q: "도급도 맡길 수 있나요?", a: "네. 작업 단위로 맡아 태산크루가 인력 관리와 결과까지 책임집니다." },
  { q: "초보자가 오면 어떡하죠?", a: "현장 난이도에 맞춰 경력자를 우선 배치합니다. 새로 오는 인력은 직무와 안전 교육을 마친 뒤 투입합니다." },
  { q: "근태와 현황은 어떻게 공유받나요?", a: "출퇴근 근태, 근무 만족도와 이슈 개선사항, 신규 채용과 배치 현황을 일일·주간·월간 리포트로 공유합니다." },
  { q: "정식 등록된 업체인가요?", a: "지점별로 유료직업소개소 등록을 마치고 운영하고 있습니다. 등록증은 메인 화면과 등록증 페이지에서 확인할 수 있습니다." },
];

export const workerFaq: Faq[] = [
  { q: "처음인데 할 수 있나요?", a: "네. 포장, 피킹, 검수처럼 어렵지 않은 업무가 많고, 시작 전에 안전교육을 받습니다." },
  { q: "어떻게 지원하나요?", a: "편한 지점 번호로 성함, 생년월일, 거주지, 희망 집결지, 시작 가능일, 희망 요일을 문자로 보내주세요. 일자리 페이지에서 '문자 보내기'를 누르면 양식이 채워진 문자 창이 열립니다." },
  { q: "하루만 일해도 되나요?", a: "네. 하루만, 단기, 중장기 모두 가능합니다. 주말에만 일하고 싶은 분도 연락 주세요." },
  { q: "급여는 언제 받나요?", a: "현장에 따라 당일 또는 익일에 지급합니다. 지점에 문의하면 정확히 안내드립니다." },
  { q: "잔업하면 수당이 있나요?", a: "네. 잔업하면 1.5배 수당을 지급합니다." },
  { q: "외국인도 가능한가요?", a: "현장에 따라 가능합니다(F비자 등). 지점으로 문의해 주세요." },
  { q: "상하차 업무인가요?", a: "상하차가 없는 현장이 많습니다. 모집 공고마다 업무 내용이 적혀 있습니다." },
  { q: "어느 지점으로 가면 되나요?", a: "사는 곳과 상관없이 오가기 편한 지점으로 연락하시면 됩니다. 잘 모르겠으면 본점으로 전화 주세요." },
];

export const tel = (phone: string) => `tel:${phone.replaceAll("-", "")}`;

// 지도 검색어: 따로 정한 값(mapQuery)이 있으면 그것, 없으면 도로명 주소까지만 (층·호수·괄호가 붙으면 위치를 못 찾을 때가 있음)
export const mapQuery = (b: Branch) => b.mapQuery ?? b.address.split(",")[0];

// 문자 지원 양식. 링크를 누르면 이 내용이 채워진 문자 창이 열린다
// 희망 집결지가 있어야 지점 대표가 자기 지점 지원자를 바로 알아본다
export const workplaceChoices = "경기광주 / 성남 / 천호";
export const smsFields: { label: string; hint?: string }[] = [
  { label: "성함" },
  { label: "생년월일" },
  { label: "거주지" },
  { label: "희망 집결지", hint: `${workplaceChoices} 중` },
  { label: "시작 가능일" },
  { label: "희망 요일", hint: "예: 월·수·금, 주말만" },
];
// workplace를 넘기면 희망 집결지를 미리 채운다 (지점별 "문자 지원" 버튼)
export const smsApplyHref = (phone: string, workplace?: string) => {
  const lines = smsFields.map((f) =>
    f.label === "희망 집결지" ? `희망 집결지${workplace ? "" : ` (${workplaceChoices})`}: ${workplace ?? ""}` : `${f.label}: `,
  );
  return `sms:${phone.replaceAll("-", "")}?&body=${encodeURIComponent(["[일자리 지원]", ...lines].join("\n"))}`;
};
