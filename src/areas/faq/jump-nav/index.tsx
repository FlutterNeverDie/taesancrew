import { Container } from "@/components/ui";

export function FaqJumpNav() {
  return (
    <nav aria-label="질문 분류" className="border-b border-rule lg:hidden">
      <Container className="flex gap-2 py-4">
        <a href="#business" className="press rounded-md border border-navy-200 px-4 py-2 font-bold text-navy-800 hover:bg-navy-50">기업 고객</a>
        <a href="#worker" className="press rounded-md border border-navy-200 px-4 py-2 font-bold text-navy-800 hover:bg-navy-50">일하려는 분</a>
      </Container>
    </nav>
  );
}
