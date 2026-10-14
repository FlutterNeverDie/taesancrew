import type { Locale } from "@/i18n";
import { ContactView, contactMeta } from "@/views/contact";

// 다른 언어 페이지 (/en/contact 등). 화면 구성은 src/views/contact.tsx
export async function generateMetadata({ params }: PageProps<"/[lang]/contact">) {
  return contactMeta((await params).lang as Locale);
}

export default async function Page({ params }: PageProps<"/[lang]/contact">) {
  return <ContactView lang={(await params).lang as Locale} />;
}
