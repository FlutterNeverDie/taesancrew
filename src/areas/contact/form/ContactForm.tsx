"use client";

import { useSearchParams } from "next/navigation";
import { useState, type FormEvent, type ReactNode } from "react";
import { branches, company } from "@/lib/site";

type Kind = "business" | "worker";
type Sent = { to: string; toName: string; text: string } | null;

const DAYS = ["월", "화", "수", "목", "금", "토", "일"];
const ANYWHERE = "어디든 괜찮아요";

// 서버가 없는 정적 사이트라, 제출하면 받을 사람에게 보낼 문자를 만들어 준다
// - 기업 문의 → 대표번호(본점)
// - 구직 지원 → 희망 근무지 지점 대표 번호 ("어디든"이면 본점)
// 휴대폰: 문자 앱이 내용이 채워진 채로 열린다 / PC: 받는 번호와 내용을 보여주고 복사할 수 있게 한다
function recipient(kind: Kind, workplace: string | null) {
  if (kind === "business") return { to: company.mainPhone, toName: "본점 대표" };
  const b = branches.find((x) => x.name === workplace) ?? branches[0];
  return { to: b.phone ?? company.mainPhone, toName: `${b.name} 대표` };
}

export function ContactForm() {
  const params = useSearchParams();
  const [kind, setKind] = useState<Kind>(params.get("type") === "worker" ? "worker" : "business");
  const [sent, setSent] = useState<Sent>(null);
  const [copied, setCopied] = useState(false);

  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    // 화면 순서대로 한 줄씩. 빈 칸은 빼고, 희망 요일은 여러 개를 하나로 묶는다
    const lines: string[] = [];
    const seen = new Set<string>();
    for (const k of data.keys()) {
      if (k === "agree" || seen.has(k)) continue;
      seen.add(k);
      const v = data.getAll(k).map(String).filter((x) => x.trim()).join("·");
      if (v) lines.push(`${k}: ${v}`);
    }
    const title = kind === "business" ? "[기업 문의]" : "[구직 지원]";
    const text = [title, ...lines].join("\n");
    const r = recipient(kind, data.get("희망 근무지") as string | null);

    const mobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    if (mobile) location.href = `sms:${r.to.replaceAll("-", "")}?&body=${encodeURIComponent(text)}`;
    setSent({ ...r, text });
    setCopied(false);
  }

  async function copy() {
    if (!sent) return;
    try {
      await navigator.clipboard.writeText(sent.text);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  }

  const input = "w-full rounded-md border border-navy-200 bg-paper px-4 py-3.5 text-base text-ink placeholder:text-muted/70 focus:border-navy-700 focus:placeholder:text-transparent";

  return (
    <div>
      <div className="mb-8 grid grid-cols-2 rounded-lg bg-navy-50 p-1.5">
        {(
          [
            ["business", "기업 문의"],
            ["worker", "구직 지원"],
          ] as const
        ).map(([k, text]) => (
          <button
            key={k}
            type="button"
            onClick={() => {
              setKind(k);
              setSent(null);
            }}
            aria-pressed={kind === k}
            className={`press cursor-pointer rounded-md py-3 font-bold ${kind === k ? "bg-paper text-navy-900 ring-1 ring-navy-200" : "text-muted"}`}
          >
            {text}
          </button>
        ))}
      </div>

      <form key={kind} onSubmit={submit} className="space-y-5">
        {kind === "business" ? (
          <>
            <Field label="회사명"><input name="회사명" autoComplete="organization" required className={input} /></Field>
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="담당자 이름"><input name="이름" autoComplete="name" required className={input} /></Field>
              <Field label="연락처"><input name="연락처" type="tel" autoComplete="tel" inputMode="tel" required className={input} /></Field>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="필요 인원">
                <input name="필요 인원" placeholder="예: 하루 20명…" className={input} />
              </Field>
              <Field label="근무지 지역"><input name="근무지" className={input} /></Field>
            </div>
            <Field label="문의 내용"><textarea name="내용" rows={5} className={input} /></Field>
          </>
        ) : (
          <>
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="성함"><input name="이름" autoComplete="name" required className={input} /></Field>
              <Field label="생년월일"><input name="생년월일" inputMode="numeric" autoComplete="off" placeholder="예: 900101…" className={input} /></Field>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="연락처"><input name="연락처" type="tel" autoComplete="tel" inputMode="tel" required className={input} /></Field>
              <Field label="거주지"><input name="거주지" autoComplete="address-level2" placeholder="예: 성남시 수정구…" className={input} /></Field>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="희망 근무지">
                <select name="희망 근무지" className={input}>
                  {branches.map((b) => (
                    <option key={b.slug}>{b.name}</option>
                  ))}
                  <option>{ANYWHERE}</option>
                </select>
              </Field>
              <Field label="시작 가능일"><input name="시작 가능일" type="date" className={input} /></Field>
            </div>
            {/* 희망 요일: 누르는 칩 (여러 개 선택) */}
            <fieldset>
              <legend className="mb-1.5 text-base font-semibold text-ink">희망 요일</legend>
              <div className="grid grid-cols-7 gap-1.5 sm:gap-2">
                {DAYS.map((d) => (
                  <label key={d} className="cursor-pointer">
                    <input type="checkbox" name="희망 요일" value={d} className="peer sr-only" />
                    <span className="press flex h-12 items-center justify-center rounded-md border border-navy-200 bg-paper text-base font-bold text-ink peer-checked:border-navy-900 peer-checked:bg-navy-900 peer-checked:text-white peer-focus-visible:outline-3 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-navy-700">
                      {d}
                    </span>
                  </label>
                ))}
              </div>
            </fieldset>
            <Field label="하고 싶은 말">
              <textarea name="하고 싶은 말" rows={3} placeholder="물류 경험 유무, 운전 가능 유무, 희망 사항…" className={input} />
            </Field>
          </>
        )}

        <label className="flex items-start gap-2 text-base text-muted">
          <input type="checkbox" name="agree" required className="mt-0.5 h-4 w-4" />
          상담을 위한 개인정보(이름, 연락처 등) 수집·이용에 동의합니다.
        </label>
        <button type="submit" className="press w-full cursor-pointer rounded-md bg-navy-800 py-4 text-lg font-bold text-white hover:bg-navy-900">
          {kind === "business" ? "상담 요청하기" : "지원하기"}
        </button>
        <p className="text-center text-base text-muted md:text-lg">
          {kind === "business" ? "본점 대표에게 문자로 전달됩니다" : "희망 근무지 지점 대표에게 문자로 전달됩니다"}
        </p>
      </form>

      {/* 제출 후: PC에서는 문자 앱이 없으므로 받는 번호와 내용을 보여준다 */}
      {sent && (
        <div role="status" className="mt-6 rounded-lg border-2 border-navy-900 bg-navy-50 p-5">
          <p className="text-lg font-extrabold text-navy-950">
            {sent.toName}에게 보낼 문자가 준비됐어요
          </p>
          <p className="mt-1 text-base text-muted">휴대폰이면 문자 앱이 열립니다. 안 열리면 아래 번호로 내용을 보내주세요.</p>
          <p className="mt-3 text-2xl font-extrabold text-navy-900 tabular-nums">{sent.to}</p>
          <pre className="mt-3 rounded-md bg-paper p-4 font-sans text-base whitespace-pre-wrap text-ink">{sent.text}</pre>
          <div className="mt-3 flex flex-wrap gap-2">
            <button type="button" onClick={copy} className="press min-h-12 cursor-pointer rounded-md bg-navy-900 px-5 font-bold text-white hover:bg-navy-800">
              {copied ? "내용을 복사했어요" : "내용 복사"}
            </button>
            <a href={`tel:${sent.to.replaceAll("-", "")}`} className="press inline-flex min-h-12 items-center rounded-md border-2 border-navy-900 px-5 font-bold text-navy-900 hover:bg-paper">
              전화하기
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-base font-semibold text-ink">{label}</span>
      {children}
    </label>
  );
}
