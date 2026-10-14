import { Container } from "@/components/ui";
import { branches, company } from "@/lib/site";

// 개인정보처리방침. 사이트는 정보를 저장하지 않고, 지원·문의는 문자/전화로 지점에 직접 전달된다
// 내용을 바꾸면 아래 EFFECTIVE(시행일)도 바꾼다
const EFFECTIVE = "2026년 10월 14일";

export function PrivacyBody() {
  const owners = branches.map((b) => `${b.brand} ${b.name} 대표 ${b.owner ?? ""} (${b.phone})`);
  return (
    <section className="py-14 md:py-20">
      <Container className="max-w-3xl">
        <h1 className="text-3xl leading-snug font-extrabold text-navy-950 md:text-4xl">개인정보처리방침</h1>
        <p className="mt-4 text-lg leading-relaxed text-muted">
          {company.title}(경기광주 본점, 성남 수진역점, 천호점. 이하 &ldquo;회사&rdquo;)는 일자리 소개와 상담을 위해 필요한 최소한의 개인정보만 받고, 「개인정보 보호법」에 따라 안전하게 처리합니다.
        </p>

        <div className="prose-post mt-10 text-lg text-ink">
          <h2>1. 받는 개인정보와 받는 방법</h2>
          <ul>
            <li><strong>일자리 지원(구직자):</strong> 성함, 생년월일, 거주지, 휴대폰 번호, 희망 집결지, 시작 가능일, 희망 요일</li>
            <li><strong>인력 요청·도급 상담(기업):</strong> 회사명, 담당자 이름, 연락처, 필요 인원, 근무지, 문의 내용</li>
            <li><strong>받는 방법:</strong> 본인이 직접 보낸 문자·전화. 홈페이지의 문의 양식도 내용을 문자로 만들어 대표번호로 보내는 방식이라, <strong>홈페이지에는 개인정보가 저장되지 않습니다.</strong></li>
            <li><strong>홈페이지 이용 기록:</strong> 방문 통계(Cloudflare Web Analytics)는 쿠키를 쓰지 않고, 개인을 알아볼 수 없는 형태로만 집계됩니다.</li>
          </ul>

          <h2>2. 이용 목적</h2>
          <ul>
            <li>구직자에게 맞는 일자리(현장) 안내, 근무 일정 연락, 출퇴근 안내, 급여 지급</li>
            <li>기업의 인력 요청·도급 상담과 계약 진행</li>
          </ul>

          <h2>3. 보관 기간과 파기</h2>
          <ul>
            <li>이용 목적을 다 이루면 지체 없이 파기합니다. 다만 「직업안정법」 등 관계 법령에서 보관하도록 정한 정보는 그 기간 동안 보관한 뒤 파기합니다.</li>
            <li>종이 문서는 분쇄하거나 소각하고, 전자 파일은 다시 볼 수 없는 방법으로 지웁니다.</li>
          </ul>

          <h2>4. 다른 곳에 제공</h2>
          <p>
            본인의 동의 없이 다른 곳에 제공하지 않습니다. 일자리 소개를 위해 근무할 현장(구인 기업)에 성함·연락처 등 꼭 필요한 정보를 전달해야 할 때는 미리 알리고 동의를 받습니다. 법령에 따라 요청이 있는 경우는 예외입니다.
          </p>

          <h2>5. 처리 업무의 위탁</h2>
          <p>홈페이지 운영(접속 처리)은 Cloudflare, Inc.의 호스팅 서비스를 이용합니다. 홈페이지에는 지원·문의 내용이 저장되지 않습니다.</p>

          <h2>6. 정보주체의 권리</h2>
          <p>언제든지 본인 정보의 열람, 정정, 삭제, 처리 정지를 요청할 수 있습니다. 아래 연락처로 전화 또는 문자 주시면 지체 없이 처리합니다.</p>

          <h2>7. 안전하게 지키기 위한 조치</h2>
          <ul>
            <li>개인정보를 다루는 사람을 지점 대표와 담당자로 최소화합니다.</li>
            <li>연락처가 담긴 휴대폰·문서는 다른 사람이 볼 수 없게 관리합니다.</li>
          </ul>

          <h2>8. 개인정보 보호책임자</h2>
          <ul>
            <li>총괄: {branches[0].brand} {branches[0].name} 대표 {branches[0].owner} ({company.mainPhone})</li>
            {owners.slice(1).map((o) => (
              <li key={o}>{o}</li>
            ))}
          </ul>

          <h2>9. 시행일</h2>
          <p>이 방침은 {EFFECTIVE}부터 적용합니다. 내용이 바뀌면 이 페이지에 알립니다.</p>
        </div>
      </Container>
    </section>
  );
}
