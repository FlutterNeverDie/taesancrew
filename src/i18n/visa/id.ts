import type { VisaText } from "./ko";

// 비자 안내 인도네시아어 번역 (원본 ko.ts와 구조·순서를 같게)
export const id: VisaText = {
  metaTitle: "Panduan Kerja untuk Orang Asing Berdasarkan Visa (F-2·F-4·F-5·F-6·H-2) | Kantor Penempatan Kerja Taesan Crew",
  metaDesc:
    "Orang asing juga bisa bekerja di gudang logistik. Pekerjaan yang boleh dilakukan berbeda menurut visa (status tinggal), jadi kami merangkumnya per visa: F-2, F-4, F-5, F-6, H-2, E-9, D-2, dll. Per Oktober 2026.",
  eyebrow: "Panduan Kerja untuk Orang Asing",
  title: ["Cek berdasarkan visa Anda,", "apakah Anda boleh bekerja"],
  lead: "Orang asing juga bisa bekerja. Namun, pekerjaan yang boleh dilakukan sudah diatur oleh hukum menurut visa (status tinggal), jadi saat mendaftar, wajib beri tahu kewarganegaraan dan jenis visa Anda. Kami hanya memperkenalkan pekerjaan yang sesuai dengan status tinggal Anda.",
  korean: "Di lokasi kerja komunikasi memakai bahasa Korea, jadi Anda harus bisa bercakap bahasa Korea sehari-hari untuk bisa bekerja.",
  updated: "Per Oktober 2026",
  groups: [
    {
      tone: "ok",
      title: "Sebagian besar bisa bekerja",
      desc: "Status tinggal yang hampir tidak punya batasan untuk bekerja.",
      items: [
        { code: "F-5", name: "Penduduk tetap", note: "Tidak ada batasan kerja." },
        { code: "F-6", name: "Imigrasi pernikahan", note: "Tidak ada batasan kerja." },
        { code: "F-2", name: "Tempat tinggal (residen)", note: "Sebagian besar tidak ada batasan. Beberapa jenis khusus hanya boleh bekerja di bidang yang sudah dijalani, jadi perlu dicek." },
      ],
    },
    {
      tone: "check",
      title: "Perlu dicek tergantung jenis pekerjaan",
      desc: "Ada pekerjaan yang boleh dan tidak boleh, jadi cabang akan mengecek setelah melihat pekerjaan di lokasi.",
      items: [
        {
          code: "F-4",
          name: "Warga keturunan Korea di luar negeri",
          note: "Sebagian pekerjaan kasar sederhana tidak boleh. Mulai 12 Februari 2026 berlaku aturan baru, sehingga sebagian pekerjaan seperti bongkar muat dan penumpukan barang menjadi boleh, tetapi kurir paket, pengantaran, kebersihan, dll. masih dibatasi. Jika tinggal di daerah dengan penurunan jumlah penduduk, bisa ada pengecualian.",
        },
      ],
    },
    {
      tone: "no",
      title: "Sulit untuk pekerjaan ini",
      desc: "Status tinggal yang hanya boleh bekerja di tempat kerja yang sudah ditentukan atau perlu izin terpisah.",
      items: [
        {
          code: "H-2",
          name: "Kerja kunjungan",
          note: "Sejak Februari 2026 tidak diterbitkan lagi dan diganti menjadi warga keturunan Korea di luar negeri (F-4). Yang sekarang memegang H-2 hanya boleh bekerja di bidang usaha yang diizinkan, dan saat mulai bekerja harus melapor mulai kerja dalam 15 hari.",
        },
        { code: "E-9", name: "Kerja non-profesional (sistem izin kerja / EPS)", note: "Hanya boleh bekerja di tempat kerja yang mendapat izin mempekerjakan. Pindah tempat kerja juga hanya boleh dalam kasus yang diatur hukum." },
        { code: "D-2·D-4", name: "Pelajar·kursus bahasa", note: "Hanya boleh kerja paruh waktu yang sudah dikonfirmasi sekolah dan diizinkan imigrasi, dan jam kerjanya dibatasi." },
        { code: "C-3 dll.", name: "Kunjungan singkat·wisata", note: "Tidak boleh bekerja." },
        { code: "E-7 dll.", name: "Kerja profesional seperti kegiatan khusus", note: "Hanya boleh bekerja di tempat kerja dan tugas yang diizinkan." },
      ],
    },
  ],
  checkTitle: "Jika ingin tahu pasti apakah visa Anda boleh bekerja",
  checks: [
    { label: "Pusat Informasi Orang Asing 1345", desc: "Telepon 1345 (dari luar negeri +82-1345). Bisa konsultasi dalam banyak bahasa.", href: "tel:1345" },
    { label: "HiKorea", desc: "Informasi per status tinggal, pengajuan izin kerja paruh waktu dan izin kegiatan di luar status tinggal", href: "https://www.hikorea.go.kr" },
    { label: "Kementerian Kehakiman - Layanan Imigrasi Korea", desc: "Teks asli pengumuman batasan kerja warga keturunan Korea di luar negeri (F-4)", href: "https://www.immigration.go.kr" },
  ],
  sourcesTitle: "Sumber yang kami pakai",
  sources: [
    { label: "Pengumuman Kementerian Kehakiman No. 2026-65 tentang batasan kerja warga keturunan Korea di luar negeri (F-4) (bahasa Korea)", href: "https://www.immigration.go.kr/bbs/moj/184/492760/download.do" },
    { label: "Aturan baru batasan kerja F-4 mulai berlaku - Korea Multicultural News (bahasa Korea)", href: "https://www.kmcn.kr/news/article.html?no=9126" },
    {
      label: "Manual mudah urusan warga keturunan Korea berkewarganegaraan asing 2026.2 (bahasa Korea)",
      href: "https://jincci.korcham.net/file/dext5uploaddata/2026/%EB%B6%99%EC%9E%84%203.%20%EC%95%8C%EA%B8%B0%EC%89%AC%EC%9A%B4%20%EC%99%B8%EA%B5%AD%EA%B5%AD%EC%A0%81%EB%8F%99%ED%8F%AC%20%EC%97%85%EB%AC%B4%20%EB%A7%A4%EB%89%B4%EC%96%BC.pdf",
    },
    { label: "Batas pekerjaan yang boleh per status tinggal (2026) - lacha (bahasa Korea)", href: "https://lacha.co.kr/korea-guide/ko/korea-work-permission-by-visa-status/" },
    { label: "Visa Navigator Kementerian Kehakiman (bahasa Korea)", href: "https://www.immigration.go.kr/bbs/immigration_eng/230/454086/download.do" },
  ],
  notice: "Halaman ini adalah panduan umum per Oktober 2026. Hukum dan aturan bisa berubah, dan meskipun visanya sama, syarat tiap orang bisa berbeda. Keputusan akhir ada di kantor imigrasi.",
  applyTitle: "Sudah cek visa? Daftar lewat SMS",
  applyDesc: "Tulis juga kewarganegaraan dan jenis visa Anda, lalu pemilik cabang akan memberi tahu lokasi kerja yang cocok.",
  applyButton: "Lihat lowongan",
  toneLabel: { ok: "Bisa", check: "Perlu dicek", no: "Sulit" },
};
