import type { VisaText } from "./ko";

// 비자 안내 우즈베크어 번역 (원본 ko.ts와 구조·순서를 같게)
export const uz: VisaText = {
  metaTitle: "Chet elliklar uchun viza boʻyicha ish qoʻllanmasi (F-2·F-4·F-5·F-6·H-2) | Taesan Crew ishga joylashtirish idorasi",
  metaDesc:
    "Chet elliklar ham logistika markazida ishlashi mumkin. Vizaga (yashash maqomiga) qarab qilish mumkin boʻlgan ish har xil, shuning uchun F-2, F-4, F-5, F-6, H-2, E-9, D-2 va boshqa vizalar boʻyicha jamladik. 2026-yil oktabr holatiga.",
  eyebrow: "Chet elliklar uchun ish qoʻllanmasi",
  title: ["Vizangiz boʻyicha", "ishlay olishingizni tekshiring"],
  lead: "Chet elliklar ham ishlashi mumkin. Lekin vizaga (yashash maqomiga) qarab qanday ish qilish mumkinligi qonunda belgilangan, shuning uchun ariza berganda fuqaroligingiz va viza turini albatta ayting. Faqat yashash maqomingizga mos ishni tavsiya qilamiz.",
  korean: "Ish joyida koreys tilida muloqot qilinadi, shuning uchun kundalik koreyscha suhbatni bilsangizgina ishlay olasiz.",
  updated: "2026-yil oktabr holatiga",
  groups: [
    {
      tone: "ok",
      title: "Deyarli hamma ishni qilish mumkin",
      desc: "Ishlashga deyarli cheklov yoʻq yashash maqomlari.",
      items: [
        { code: "F-5", name: "Doimiy yashash", note: "Ishlashga cheklov yoʻq." },
        { code: "F-6", name: "Nikoh orqali immigratsiya", note: "Ishlashga cheklov yoʻq." },
        { code: "F-2", name: "Yashash", note: "Koʻpincha cheklov yoʻq. Ayrim turlarida faqat avval ishlagan sohada ishlash mumkin, shuning uchun tekshirish kerak." },
      ],
    },
    {
      tone: "check",
      title: "Ish turiga qarab tekshirish kerak",
      desc: "Qilish mumkin va mumkin boʻlmagan ishlar ajratilgan, shuning uchun filial ish joyidagi vazifani koʻrib, tekshirib beradi.",
      items: [
        {
          code: "F-4",
          name: "Chet eldagi koreyslar",
          note: "Ayrim oddiy jismoniy ishlarni qilish mumkin emas. 2026-yil 12-fevraldan yangi qoida qoʻllanilib, yuk tushirish va yuklash kabi ayrim ishlar mumkin boʻldi, lekin posilka, yetkazib berish, tozalash kabi ishlar hali ham cheklangan. Aholi kamayayotgan hududda yashasangiz, istisno boʻlishi mumkin.",
        },
      ],
    },
    {
      tone: "no",
      title: "Bu ish uchun qiyin",
      desc: "Faqat belgilangan ish joyida ishlash mumkin yoki alohida ruxsat kerak boʻlgan yashash maqomlari.",
      items: [
        {
          code: "H-2",
          name: "Tashrif orqali ishlash",
          note: "2026-yil fevraldan boshlab yangi berilmaydi va chet eldagi koreyslar (F-4) vizasiga oʻtkazildi. Hozir H-2 vizasi borlar faqat ruxsat etilgan sohalarda ishlashi mumkin va ish boshlaganidan keyin 15 kun ichida ish boshlanganini xabar qilishi kerak.",
        },
        { code: "E-9", name: "Malakasiz ish (ishga yollash ruxsati tizimi)", note: "Faqat ishga yollash ruxsatini olgan ish joyida ishlash mumkin. Ish joyini almashtirish ham faqat qonunda belgilangan hollarda mumkin." },
        { code: "D-2·D-4", name: "Talaba · til kursi", note: "Faqat maktab tasdigʻi va immigratsiya ruxsatini olgan qisman ish (part-time) mumkin, ishlash soatlari ham belgilangan." },
        { code: "C-3 va boshqalar", name: "Qisqa muddatli tashrif · sayohat", note: "Ishlash mumkin emas." },
        { code: "E-7 va boshqalar", name: "Maxsus faoliyat va boshqa mutaxassis ishlari", note: "Faqat ruxsat berilgan ish joyida va vazifada ishlash mumkin." },
      ],
    },
  ],
  checkTitle: "Vizangiz bilan ishlay olishingizni aniq bilmoqchi boʻlsangiz",
  checks: [
    { label: "Chet elliklar uchun yagona maʼlumot markazi 1345", desc: "Telefon 1345 (chet eldan +82-1345). Koʻp tillarda maslahat beradi.", href: "tel:1345" },
    { label: "HiKorea", desc: "Yashash maqomi boʻyicha maʼlumot, qisman ish va maqomdan tashqari faoliyatga ruxsat olish uchun ariza", href: "https://www.hikorea.go.kr" },
    { label: "Adliya vazirligi Immigratsiya va chet elliklar siyosati boshqarmasi", desc: "Chet eldagi koreyslar (F-4) ish faoliyati cheklovlari haqidagi eʼlonning asl matni", href: "https://www.immigration.go.kr" },
  ],
  sourcesTitle: "Foydalanilgan manbalar",
  sources: [
    { label: "Adliya vazirligining 2026-65-son eʼloni: chet eldagi koreyslar (F-4) ish faoliyati cheklovlari (koreys tilida)", href: "https://www.immigration.go.kr/bbs/moj/184/492760/download.do" },
    { label: "Chet eldagi koreyslar (F-4) uchun yangi ish cheklovi qoidasi kuchga kirdi - Korea Multicultural News (koreys tilida)", href: "https://www.kmcn.kr/news/article.html?no=9126" },
    {
      label: "Chet el fuqaroligidagi koreyslar bilan ishlash boʻyicha oson qoʻllanma 2026.2 (koreys tilida)",
      href: "https://jincci.korcham.net/file/dext5uploaddata/2026/%EB%B6%99%EC%9E%84%203.%20%EC%95%8C%EA%B8%B0%EC%89%AC%EC%9A%B4%20%EC%99%B8%EA%B5%AD%EA%B5%AD%EC%A0%81%EB%8F%99%ED%8F%AC%20%EC%97%85%EB%AC%B4%20%EB%A7%A4%EB%89%B4%EC%96%BC.pdf",
    },
    { label: "Yashash maqomi boʻyicha ishlash mumkin boʻlgan doira (2026) - lacha (koreys tilida)", href: "https://lacha.co.kr/korea-guide/ko/korea-work-permission-by-visa-status/" },
    { label: "Adliya vazirligi viza navigatori (koreys tilida)", href: "https://www.immigration.go.kr/bbs/immigration_eng/230/454086/download.do" },
  ],
  notice: "Bu sahifa 2026-yil oktabr holatidagi umumiy maʼlumot. Qonun va qoidalar oʻzgarishi mumkin, bir xil vizada ham har bir odamning sharti har xil boʻlishi mumkin. Yakuniy qarorni immigratsiya idorasidan oling.",
  applyTitle: "Vizangizni tekshirgan boʻlsangiz, SMS orqali ariza bering",
  applyDesc: "Fuqaroligingiz va viza turini birga yozsangiz, filial rahbari sizga mos ish joyini aytib beradi.",
  applyButton: "Ishlarni koʻrish",
  toneLabel: { ok: "Mumkin", check: "Tekshirish kerak", no: "Qiyin" },
};
