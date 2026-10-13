"use client";

import { useSearchParams } from "next/navigation";
import { useState, type FormEvent, type ReactNode } from "react";
import { branches, company } from "@/lib/site";

type Kind = "business" | "worker";

// 서버가 없는 정적 사이트라 지금은 메일 앱을 여는 방식. 나중에 폼 서비스(알림 메일/카톡)로 교체
export function ContactForm() {
  const params = useSearchParams();
  const [kind, setKind] = useState<Kind>(params.get("type") === "worker" ? "worker" : "business");

  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const lines = [...data.entries()].filter(([k]) => k !== "agree").map(([k, v]) => `${k}: ${v}`);
    const subject = kind === "business" ? "[기업 문의]" : "[구직 지원]";
    window.location.href = `mailto:${company.email}?subject=${encodeURIComponent(`${subject} ${data.get("이름") ?? ""}`)}&body=${encodeURIComponent(lines.join("\n"))}`;
  }

  const input = "w-full rounded-md border border-navy-200 bg-paper px-4 py-3.5 text-base text-ink focus:border-navy-700";

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
            onClick={() => setKind(k)}
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
              <Field label="희망 지점">
                <select name="희망 지점" className={input}>
                  {branches.map((b) => (
                    <option key={b.slug}>{b.name}</option>
                  ))}
                </select>
              </Field>
              <Field label="시작 가능일"><input name="시작 가능일" type="date" className={input} /></Field>
            </div>
            <Field label="경력·하고 싶은 말"><textarea name="내용" rows={3} className={input} /></Field>
          </>
        )}

        <label className="flex items-start gap-2 text-sm text-muted">
          <input type="checkbox" name="agree" required className="mt-0.5 h-4 w-4" />
          상담을 위한 개인정보(이름, 연락처 등) 수집·이용에 동의합니다.
        </label>
        <button type="submit" className="press w-full cursor-pointer rounded-md bg-navy-800 py-4 text-lg font-bold text-white hover:bg-navy-900">
          {kind === "business" ? "상담 요청하기" : "지원하기"}
        </button>
      </form>
    </div>
  );
}

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-semibold text-ink">{label}</span>
      {children}
    </label>
  );
}
