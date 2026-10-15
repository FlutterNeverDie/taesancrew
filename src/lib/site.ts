// 사이트 전체에서 쓰는 회사 정보. 자료가 오면 여기만 고치면 된다.
// null = 아직 자료 없음 → 화면에 "준비 중" 자리로 표시

export const company = {
  name: "태산크루",
  // 홈페이지 제목 (태산 홈페이지 변경.docx)
  title: "태산 리크루트 & 태산크루",
  // 사이트 주소 (카톡 미리보기·검색 등록·사이트맵 등 절대 주소에 쓰임). 도메인이 바뀌면 여기만 바꾼다
  siteUrl: "https://taesan-recruit.com",
  // 예전 주소·www 주소로 들어오면 siteUrl의 같은 페이지로 넘긴다 (layout.tsx의 hostScript)
  oldHosts: ["taesancrew.pages.dev", "www.taesan-recruit.com"],
  // 검색 등록 소유 확인 코드 (docs/검색등록.md). 받은 content 값만 넣는다. 빈 값이면 태그가 안 나간다
  verification: { google: "", naver: "6c1ffcd2e541cbf1ba058edf6a80de1c55324ea6" },
  nameEn: "TS CREW",
  slogan: "인력이 곧 기업의 경쟁력이다",
  tagline: "믿을 수 있는 일자리 파트너",
  email: "crewts@naver.com",
  // 대표번호 = 경기광주 본점(대표 업무폰)
  mainPhone: "010-5801-2036",
  officePhone: "031-769-1035",
  fax: "031-769-1036",
};

// 화면에 보이는 문구(강조 숫자, 강점, 서비스, 질문, 문자 양식 등)는 src/i18n/dict/ko.ts (언어별 사전)

export type Branch = {
  slug: string;
  name: string; // 공식 지점명(한국어). 문자 지원의 "희망 집결지"와 사업자 정보에 쓴다. 화면 이름은 사전에
  brand: string; // 지점 상호 브랜드: 경기광주 본점만 "태산 리크루트", 나머지는 "태산크루"
  legalName: string; // 사업자 정보에 쓰는 이름 ({brand} {legalName})
  address: string;
  mapQuery?: string; // 지도 검색어. 없으면 도로명 주소(쉼표 앞)로 검색
  phone: string | null;
  bizNo: string | null; // 사업자등록번호
  agencyNo: string | null; // 유료직업소개소 등록번호
  licenseImage: string | null; // 직업소개소 등록증 이미지 (대표 생년월일 가린 사본, public/images/licenses/)
  owner: string | null;
  opened: string; // 개업 연월
  // 검색용 주소 (구조화 데이터). 지점 이름·소개·찾아오기 등 화면 문구는 사전(dict)의 branches
  locality: string; // 시·구
  province: string; // 시·도
};

// 본점이 맨 앞. 연락은 본점으로 모인다
export const branches: Branch[] = [
  {
    slug: "gwangju",
    name: "경기광주 본점",
    brand: "태산 리크루트",
    legalName: "경기광주 본점",
    address: "경기도 광주시 광주대로 11-5, 2층 (역동)",
    phone: "010-5801-2036",
    bizNo: "365-14-02519",
    agencyNo: null,
    licenseImage: null,
    owner: "이선우",
    opened: "2023. 11",
    locality: "광주시",
    province: "경기도",
  },
  {
    slug: "sujin",
    name: "성남 수진역점",
    brand: "태산크루",
    legalName: "성남점",
    address: "경기도 성남시 수정구 탄리로 7, 1층 102호 (수진동)",
    phone: "010-2244-0031",
    bizNo: "252-33-01651",
    agencyNo: "제2025-3780385-14-5-00029호",
    licenseImage: "/images/licenses/sujin.webp",
    owner: "이나라",
    opened: "2025. 10",
    locality: "성남시",
    province: "경기도",
  },
  {
    slug: "cheonho",
    name: "천호점",
    brand: "태산크루",
    legalName: "천호점",
    address: "서울 강동구 천호대로 1024, 힐스테이트 천호역 젠트리스 지하 2층 242호 (성내동)",
    mapQuery: "힐스테이트 천호역 젠트리스", // 도로명 주소로는 구글 지도가 위치를 못 찾음
    phone: "010-8141-0240",
    bizNo: "239-95-02048",
    agencyNo: "제2026-3240289-14-5-00011호",
    licenseImage: "/images/licenses/cheonho.webp",
    owner: "모목원",
    opened: "2026. 10",
    locality: "강동구",
    province: "서울특별시",
  },
];

// 회사소개서 "주요 고객사 현황". 로고는 회사소개서 PDF에서 뽑아 흰 여백을 잘라낸 것 (public/images/clients/*.webp)
// 배열 순서 = 화면 순서. 앞에 둘 회사는 위로 올린다. logo가 없으면 이름을 글자로 보여준다
// w, h = 로고 파일의 실제 픽셀 크기 (화면 크기 계산용, 파일을 바꾸면 같이 바꿀 것)
// 올리브영·스타벅스·신상닷컴·소다는 로고 파일 없이 이름 글자로 보여준다
// nameEn: 다른 언어 화면에 보이는 이름 (없으면 name 그대로. LF·K2처럼 원래 영문인 곳은 생략)
export type Client = { name: string; nameEn?: string; logo?: string; w?: number; h?: number };

export const clients: Client[] = [
  { name: "무신사", nameEn: "MUSINSA", logo: "musinsa", w: 300, h: 314 },
  { name: "유니클로", nameEn: "UNIQLO", logo: "uniqlo", w: 300, h: 311 },
  { name: "올리브영", nameEn: "OLIVE YOUNG" },
  { name: "CJ대한통운", nameEn: "CJ Logistics", logo: "cj-logistics", w: 222, h: 132 },
  { name: "신세계", nameEn: "SHINSEGAE", logo: "shinsegae", w: 234, h: 177 },
  { name: "롯데", nameEn: "LOTTE", logo: "lotte", w: 210, h: 210 },
  { name: "나이키", nameEn: "Nike", logo: "nike", w: 300, h: 254 },
  { name: "더현대", nameEn: "The Hyundai", logo: "the-hyundai", w: 300, h: 313 },
  { name: "현대그린푸드", nameEn: "Hyundai Green Food", logo: "hyundai-greenfood", w: 275, h: 238 },
  { name: "LF", logo: "lf", w: 198, h: 194 },
  { name: "자라", nameEn: "ZARA", logo: "zara", w: 300, h: 313 },
  { name: "폴로 랄프로렌", nameEn: "Polo Ralph Lauren", logo: "polo", w: 300, h: 299 },
  { name: "스타벅스", nameEn: "Starbucks" },
  { name: "이베이", nameEn: "eBay", logo: "ebay", w: 289, h: 162 },
  { name: "LX판토스", nameEn: "LX Pantos", logo: "lx-pantos", w: 250, h: 57 },
  { name: "리바이스", nameEn: "Levi's", logo: "levis", w: 252, h: 165 },
  { name: "컨버스", nameEn: "Converse", logo: "converse", w: 300, h: 313 },
  { name: "게스", nameEn: "GUESS", logo: "guess", w: 260, h: 236 },
  { name: "블랙야크", nameEn: "BLACKYAK", logo: "blackyak", w: 265, h: 313 },
  { name: "K2", logo: "k2", w: 284, h: 223 },
  { name: "아이더", nameEn: "EIDER", logo: "eider", w: 300, h: 313 },
  { name: "동원", nameEn: "Dongwon", logo: "dongwon", w: 300, h: 313 },
  { name: "스탠리", nameEn: "Stanley", logo: "stanley", w: 240, h: 138 },
  { name: "웅진", nameEn: "Woongjin", logo: "woongjin", w: 255, h: 78 },
  { name: "일리", nameEn: "illy", logo: "illy", w: 300, h: 313 },
  { name: "구르메F&B", nameEn: "Gourmet F&B", logo: "gourmet-fnb", w: 225, h: 242 },
  { name: "마운티아", nameEn: "Mountia", logo: "mountia", w: 300, h: 313 },
  { name: "파스퇴르", nameEn: "Pasteur", logo: "pasteur", w: 242, h: 115 },
  { name: "샘표", nameEn: "Sempio", logo: "sempio", w: 174, h: 94 },
  { name: "DFD", logo: "dfd", w: 284, h: 145 },
  { name: "한익스프레스", nameEn: "HanExpress", logo: "hanexpress", w: 275, h: 77 },
  { name: "C&A Global", logo: "cna-global", w: 300, h: 313 },
  { name: "신상닷컴", nameEn: "Sinsang.com" },
  { name: "소다", nameEn: "SODA" },
];

export type RecruitPost = {
  slug: string; // 사전(dict)의 posts 열쇠와 같다. 공고 글자(업무·시간·지급·집결지·혜택)는 사전에
  src: string; // 전단 이미지
  branchSlug: string;
  site: string; // 일하는 곳 (한국어, 구글 채용 정보용)
};

// 지금 모집 중인 공고. 전단 이미지 + 같은 내용을 글자로(사전의 posts). 일급 금액·나이 조건은 넣지 않는다
// datePosted: 사이트에 올린 날 (구글 채용 정보용)
export const recruitPostedAt = "2026-10-13";
export const recruitPosts: RecruitPost[] = [
  { slug: "sujin-musinsa", src: "/images/recruit/sujin-musinsa.webp", branchSlug: "sujin", site: "무신사 물류센터" },
  { slug: "sujin-brandworks", src: "/images/recruit/sujin-brandworks.webp", branchSlug: "sujin", site: "브랜드웍스 물류센터" },
  { slug: "cheonho-logistics", src: "/images/recruit/cheonho-logistics.webp", branchSlug: "cheonho", site: "물류센터" },
  { slug: "cheonho-cold", src: "/images/recruit/cheonho-cold.webp", branchSlug: "cheonho", site: "냉장물류센터" },
  { slug: "cheonho-icheon", src: "/images/recruit/cheonho-icheon.webp", branchSlug: "cheonho", site: "이천 냉장물류센터" },
  { slug: "cheonho-musinsa", src: "/images/recruit/cheonho-musinsa.webp", branchSlug: "cheonho", site: "무신사 물류센터" },
];

// 메뉴. key = 사전(dict)의 nav 이름표
export type NavKey = "about" | "business" | "branches" | "jobs" | "blog" | "faq" | "contact";
export type NavItem = { href: string; key: NavKey; children?: { href: string; key: NavKey }[] };

export const nav: NavItem[] = [
  {
    href: "/about",
    key: "about",
    children: [
      { href: "/business", key: "business" },
      { href: "/branches", key: "branches" },
    ],
  },
  { href: "/jobs", key: "jobs" },
  { href: "/blog", key: "blog" },
  { href: "/faq", key: "faq" },
  { href: "/contact", key: "contact" },
];

// 하단 메뉴처럼 한 줄로 펼친 목록
export const navFlat = nav.flatMap((item) => [{ href: item.href, key: item.key }, ...(item.children ?? [])]);

export const tel = (phone: string) => `tel:${phone.replaceAll("-", "")}`;

// 지도 검색어: 따로 정한 값(mapQuery)이 있으면 그것, 없으면 도로명 주소까지만 (층·호수·괄호가 붙으면 위치를 못 찾을 때가 있음)
export const mapQuery = (b: Branch) => b.mapQuery ?? b.address.split(",")[0];

// 문자 지원 링크는 src/i18n/sms.ts (언어별로 항목 이름을 붙인다)
