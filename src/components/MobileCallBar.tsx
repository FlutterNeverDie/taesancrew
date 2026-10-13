import Link from "next/link";
import { company, tel } from "@/lib/site";

// 모바일 하단 고정 바: 구직자 대부분이 휴대폰으로 들어오므로 전화가 한 번에 되게
export function MobileCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t border-navy-100 bg-white md:hidden">
      <a href={tel(company.mainPhone)} className="flex h-16 items-center justify-center gap-2 bg-point font-bold text-navy-950">
        <PhoneIcon /> 전화하기
      </a>
      <Link href="/contact" className="flex h-16 items-center justify-center bg-navy-800 font-bold text-white">
        문의 남기기
      </Link>
    </div>
  );
}

export function PhoneIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11.4 11.4 0 0 0 3.6.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1L6.6 10.8Z" />
    </svg>
  );
}
