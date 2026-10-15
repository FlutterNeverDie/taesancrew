import { Container } from "@/components/ui";
import { ClientWall } from "@/areas/shared/client-wall";
import { getDict, type Locale } from "@/i18n";

// 문의 페이지 아래: 주요 고객사 로고가 흐르는 줄 (폼을 본 뒤 마지막 확신용)
export function ContactClients({ lang }: { lang: Locale }) {
  const t = getDict(lang).business;
  return (
    <section className="bg-navy-50 py-16 md:py-20">
      <Container>
        <h2 className="text-[1.5rem] font-extrabold text-navy-950 md:text-[2rem]">{t.clientsTitle}</h2>
        <div className="mt-8">
          <ClientWall lang={lang} variant="marquee" />
        </div>
      </Container>
    </section>
  );
}
