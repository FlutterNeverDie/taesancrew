import type { VisaText } from "./ko";

// 비자 안내 베트남어 번역 (원본 ko.ts와 구조·순서를 같게)
export const vi: VisaText = {
  metaTitle: "Hướng dẫn làm việc theo từng loại visa cho người nước ngoài (F-2, F-4, F-5, F-6, H-2) | Văn phòng giới thiệu việc làm Taesan Crew",
  metaDesc:
    "Người nước ngoài cũng có thể làm việc ở kho logistics. Công việc được làm khác nhau tùy theo visa (tư cách lưu trú), nên chúng tôi đã sắp xếp theo từng loại visa: F-2, F-4, F-5, F-6, H-2, E-9, D-2... Thông tin tính đến tháng 10 năm 2026.",
  eyebrow: "Hướng dẫn làm việc cho người nước ngoài",
  title: ["Hãy kiểm tra theo visa", "xem bạn có thể làm việc không"],
  lead: "Người nước ngoài cũng có thể làm việc. Nhưng luật quy định bạn được làm công việc gì tùy theo visa (tư cách lưu trú), nên khi ứng tuyển, hãy cho chúng tôi biết quốc tịch và loại visa. Chúng tôi chỉ giới thiệu công việc phù hợp với tư cách lưu trú của bạn.",
  korean: "Ở hiện trường mọi người trao đổi bằng tiếng Hàn, nên bạn cần giao tiếp được tiếng Hàn hằng ngày mới có thể làm việc.",
  updated: "Tính đến tháng 10 năm 2026",
  groups: [
    {
      tone: "ok",
      title: "Làm được hầu hết công việc",
      desc: "Đây là các tư cách lưu trú gần như không bị hạn chế khi đi làm.",
      items: [
        { code: "F-5", name: "Thường trú", note: "Không bị hạn chế việc làm." },
        { code: "F-6", name: "Kết hôn di trú", note: "Không bị hạn chế việc làm." },
        { code: "F-2", name: "Cư trú", note: "Hầu hết không bị hạn chế. Một số loại chi tiết chỉ được làm trong lĩnh vực đã làm trước đây, nên cần kiểm tra." },
      ],
    },
    {
      tone: "check",
      title: "Cần kiểm tra tùy loại công việc",
      desc: "Có việc được làm và việc không được làm, nên chi nhánh sẽ xem công việc ở hiện trường và kiểm tra giúp bạn.",
      items: [
        {
          code: "F-4",
          name: "Đồng bào Hàn ở nước ngoài",
          note: "Không được làm một số công việc lao động đơn giản. Từ ngày 12 tháng 2 năm 2026 áp dụng tiêu chuẩn mới, một số việc như bốc dỡ, xếp hàng đã được phép làm, nhưng giao bưu kiện, giao hàng, dọn dẹp... vẫn bị hạn chế. Nếu bạn sống ở khu vực dân số giảm thì có thể có ngoại lệ.",
        },
      ],
    },
    {
      tone: "no",
      title: "Khó làm công việc này",
      desc: "Đây là các tư cách lưu trú chỉ được làm ở nơi làm việc đã định sẵn hoặc cần xin phép riêng.",
      items: [
        {
          code: "H-2",
          name: "Thăm thân lao động",
          note: "Từ tháng 2 năm 2026 không còn cấp mới và đã chuyển sang Đồng bào Hàn ở nước ngoài (F-4). Người đang có H-2 chỉ được làm trong các ngành nghề được phép, và khi bắt đầu đi làm phải khai báo bắt đầu làm việc trong vòng 15 ngày.",
        },
        { code: "E-9", name: "Lao động phổ thông (Chế độ cấp phép tuyển dụng)", note: "Chỉ được làm ở nơi làm việc đã được cấp phép tuyển dụng. Việc chuyển nơi làm việc cũng chỉ được phép trong các trường hợp luật quy định." },
        { code: "D-2·D-4", name: "Du học · Học tiếng", note: "Chỉ được làm thêm bán thời gian khi có xác nhận của trường và giấy phép của cơ quan xuất nhập cảnh, và số giờ được làm có giới hạn." },
        { code: "C-3, v.v.", name: "Thăm ngắn hạn · Du lịch", note: "Không được làm việc." },
        { code: "E-7, v.v.", name: "Việc làm chuyên môn như Hoạt động đặc định", note: "Chỉ được làm ở nơi làm việc và công việc đã được cấp phép." },
      ],
    },
  ],
  checkTitle: "Nếu muốn biết chính xác visa của mình có làm việc được không",
  checks: [
    { label: "Trung tâm hỗ trợ người nước ngoài 1345", desc: "Gọi 1345 (từ nước ngoài gọi +82-1345). Có tư vấn bằng nhiều ngôn ngữ.", href: "tel:1345" },
    { label: "HiKorea", desc: "Hướng dẫn theo tư cách lưu trú, nộp đơn xin phép làm thêm bán thời gian và hoạt động ngoài tư cách lưu trú", href: "https://www.hikorea.go.kr" },
    { label: "Cục Xuất nhập cảnh và Chính sách người nước ngoài, Bộ Tư pháp", desc: "Bản gốc thông báo về phạm vi hạn chế việc làm của Đồng bào Hàn ở nước ngoài (F-4)", href: "https://www.immigration.go.kr" },
  ],
  sourcesTitle: "Tài liệu tham khảo",
  sources: [
    { label: "Thông báo Bộ Tư pháp số 2026-65: Phạm vi hạn chế việc làm của Đồng bào Hàn ở nước ngoài (F-4) (tiếng Hàn)", href: "https://www.immigration.go.kr/bbs/moj/184/492760/download.do" },
    { label: "Áp dụng tiêu chuẩn mới về hạn chế việc làm của Đồng bào Hàn ở nước ngoài (F-4) - Korea Multicultural News (tiếng Hàn)", href: "https://www.kmcn.kr/news/article.html?no=9126" },
    {
      label: "Sổ tay nghiệp vụ dễ hiểu về đồng bào có quốc tịch nước ngoài, tháng 2 năm 2026 (tiếng Hàn)",
      href: "https://jincci.korcham.net/file/dext5uploaddata/2026/%EB%B6%99%EC%9E%84%203.%20%EC%95%8C%EA%B8%B0%EC%89%AC%EC%9A%B4%20%EC%99%B8%EA%B5%AD%EA%B5%AD%EC%A0%81%EB%8F%99%ED%8F%AC%20%EC%97%85%EB%AC%B4%20%EB%A7%A4%EB%89%B4%EC%96%BC.pdf",
    },
    { label: "Phạm vi được làm việc theo tư cách lưu trú (2026) - lacha (tiếng Hàn)", href: "https://lacha.co.kr/korea-guide/ko/korea-work-permission-by-visa-status/" },
    { label: "Visa Navigator của Bộ Tư pháp (tiếng Hàn)", href: "https://www.immigration.go.kr/bbs/immigration_eng/230/454086/download.do" },
  ],
  notice: "Trang này là hướng dẫn chung tính đến tháng 10 năm 2026. Luật và tiêu chuẩn có thể thay đổi, và cùng một loại visa nhưng điều kiện của mỗi người có thể khác nhau. Hãy hỏi cơ quan xuất nhập cảnh để có quyết định cuối cùng.",
  applyTitle: "Đã kiểm tra visa thì hãy ứng tuyển qua tin nhắn",
  applyDesc: "Hãy ghi cả quốc tịch và loại visa trong tin nhắn, giám đốc chi nhánh sẽ hướng dẫn hiện trường phù hợp cho bạn.",
  applyButton: "Xem việc làm",
  toneLabel: { ok: "Được", check: "Cần kiểm tra", no: "Khó" },
};
