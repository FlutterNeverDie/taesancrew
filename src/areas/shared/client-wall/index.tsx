import type { CSSProperties } from "react";
import { clients, type Client } from "@/lib/site";
import type { Locale } from "@/i18n";

// 로고마다 가로세로 비율이 달라서(LX판토스 4:1, 무신사 1:1) 높이를 같게 맞추면 들쭉날쭉해 보인다.
// 대신 "보이는 면적"이 비슷하도록 크기를 정한다. 숫자를 키우면 전체 로고가 커진다
const AREA = 2400; // 로고 하나가 차지할 면적(px²), PC 기준
const MAX_W = 128;
const MAX_H = 52;

function logoSize(c: Client) {
  const ratio = (c.w ?? 1) / (c.h ?? 1);
  let h = Math.sqrt(AREA / ratio);
  let w = h * ratio;
  if (w > MAX_W) [w, h] = [MAX_W, MAX_W / ratio];
  if (h > MAX_H) [w, h] = [MAX_H * ratio, MAX_H];
  return { w: Math.round(w), h: Math.round(h) };
}

function Logo({ c, lang }: { c: Client; lang: Locale }) {
  const s = c.logo ? logoSize(c) : null;
  // 한국어 화면은 한국어 이름, 다른 언어는 영문 이름 (글자로 보이는 회사와 로고 대체 글자 모두)
  const name = lang === "ko" ? c.name : (c.nameEn ?? c.name);
  return c.logo && s ? (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={`/images/clients/${c.logo}.webp`}
      alt={name}
      width={s.w}
      height={s.h}
      loading="lazy"
      style={{ width: `calc(${s.w}px * var(--logo-scale))`, height: `calc(${s.h}px * var(--logo-scale))` }}
      className="object-contain"
    />
  ) : (
    <span className="text-center text-sm font-extrabold whitespace-nowrap text-navy-900/80 sm:text-base md:text-lg">{name}</span>
  );
}

// variant="marquee": 두 줄이 서로 반대 방향으로 천천히 흐른다 (메인). 마우스를 올리면 멈춘다.
// '동작 줄이기'를 켠 사람에게는 흐르지 않고 가운데 정렬 목록으로 보인다 (globals.css의 .marquee)
export function ClientWall({ lang, variant = "grid" }: { lang: Locale; variant?: "grid" | "marquee" }) {
  if (variant === "marquee") {
    const rows = [clients.filter((_, i) => i % 2 === 0), clients.filter((_, i) => i % 2 === 1)];
    return (
      <div dir="ltr" className="marquee space-y-2 overflow-hidden rounded-lg border border-rule bg-white py-4 [--logo-scale:0.7] md:space-y-4 md:py-8 md:[--logo-scale:1]">
        {rows.map((row, r) => (
          <ul key={r} className="marquee-track" data-reverse={r === 1 ? "" : undefined} style={{ "--marquee-duration": `${row.length * 3.2}s` } as CSSProperties}>
            {[...row, ...row].map((c, i) => (
              <li
                key={`${c.name}-${i}`}
                data-dup={i >= row.length ? "" : undefined}
                aria-hidden={i >= row.length ? true : undefined}
                className="flex h-16 shrink-0 items-center justify-center px-5 md:h-20 md:px-9"
              >
                <Logo c={c} lang={lang} />
              </li>
            ))}
          </ul>
        ))}
      </div>
    );
  }

  return (
    <ul className="grid grid-cols-4 rounded-lg border border-rule bg-white px-1 py-3 [--logo-scale:0.62] sm:grid-cols-5 sm:[--logo-scale:0.8] md:grid-cols-6 md:px-6 md:py-6 md:[--logo-scale:1] lg:grid-cols-9">
      {clients.map((c) => (
        <li key={c.name} className="flex h-16 items-center justify-center px-1 sm:h-20 md:h-24 md:px-2">
          <Logo c={c} lang={lang} />
        </li>
      ))}
    </ul>
  );
}
