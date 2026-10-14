// 사이트 공통 아이콘 (선 굵기·크기 통일). 색은 currentColor
type P = { className?: string };
const base = { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, "aria-hidden": true };

export function PhoneIcon({ className = "h-5 w-5" }: P) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11.4 11.4 0 0 0 3.6.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1L6.6 10.8Z" />
    </svg>
  );
}
export function MessageIcon({ className = "h-5 w-5" }: P) {
  return <svg {...base} className={className}><path d="M21 12a8 8 0 0 1-11.6 7.1L4 20.5l1.4-4.6A8 8 0 1 1 21 12Z" /></svg>;
}
export function ShareIcon({ className = "h-5 w-5" }: P) {
  return <svg {...base} className={className}><circle cx="18" cy="5" r="2.5" /><circle cx="6" cy="12" r="2.5" /><circle cx="18" cy="19" r="2.5" /><path d="m8.2 10.8 7.6-4.4M8.2 13.2l7.6 4.4" /></svg>;
}
export function LinkIcon({ className = "h-5 w-5" }: P) {
  return <svg {...base} className={className}><path d="M10 14a4.5 4.5 0 0 0 6.4 0l3-3a4.5 4.5 0 0 0-6.4-6.4l-1 1" /><path d="M14 10a4.5 4.5 0 0 0-6.4 0l-3 3a4.5 4.5 0 0 0 6.4 6.4l1-1" /></svg>;
}
export function CloseIcon({ className = "h-5 w-5" }: P) {
  return <svg {...base} className={className}><path d="M6 6l12 12M18 6 6 18" /></svg>;
}
export function BackIcon({ className = "h-5 w-5" }: P) {
  return <svg {...base} className={className}><path d="M15 18l-6-6 6-6" /></svg>;
}
export function CheckIcon({ className = "h-5 w-5" }: P) {
  return <svg {...base} className={className}><path d="M5 12.5l4.5 4.5L19 7.5" /></svg>;
}
export function GlobeIcon({ className = "h-5 w-5" }: P) {
  return <svg {...base} className={className}><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c2.5 2.6 3.8 5.6 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.6-3.8-9S9.5 5.6 12 3Z" /></svg>;
}
export function ChevronDownIcon({ className = "h-4 w-4" }: P) {
  return <svg {...base} className={className}><path d="m6 9 6 6 6-6" /></svg>;
}
