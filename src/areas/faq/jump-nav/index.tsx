import { Container } from "@/components/ui";
import { getDict, type Locale } from "@/i18n";

export function FaqJumpNav({ lang }: { lang: Locale }) {
  const t = getDict(lang).faq;
  return (
    <nav aria-label={t.jumpLabel} className="border-b border-rule lg:hidden">
      <Container className="flex gap-2 py-4">
        <a href="#business" className="press rounded-md border border-navy-200 px-4 py-2 font-bold text-navy-800 hover:bg-navy-50">{t.business}</a>
        <a href="#worker" className="press rounded-md border border-navy-200 px-4 py-2 font-bold text-navy-800 hover:bg-navy-50">{t.worker}</a>
      </Container>
    </nav>
  );
}
