"use client";

import Link from "next/link";
import { useState, type FormEvent, type ReactNode } from "react";
import { company } from "@/lib/site";

type Sent = { text: string } | null;

// 기업·도급사 문의 전용 폼 (구직자는 일자리 페이지의 문자 지원으로 안내)
// 서버가 없는 정적 사이트라, 제출하면 본점 대표번호로 보낼 문자를 만든다
// 휴대폰: 문자 앱이 내용이 채워진 채로 열린다 / PC: 번호와 내용을 보여주고 복사할 수 있게 한다
export function ContactForm() {
  const [sent, setSent] = useState<Sent>(null);
  const [copied, setCopied] = useState(false);
  const to = company.mainPhone;

  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const lines: string[] = [];
    for (const [k, v] of data.entries()) {
      if (k === "agree" || !String(v).trim()) continue;
      lines.push(`${k}: ${v}`);
    }
    const text = ["[기업 문의]", ...lines].join("\n");
    const mobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    if (mobile) location.href = `sms:${to.replaceAll("-", "")}?&body=${encodeURIComponent(text)}`;
    setSent({ text });
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
      <form onSubmit={submit} className="space-y-5">
        <Field label="회사명"><input name="회사명" autoComplete="organization" required className={input} /></Field>
        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="담당자 이름"><input name="이름" autoComplete="name" required className={input} /></Field>
          <Field label="연락처"><input name="연락처" type="tel" autoComplete="tel" inputMode="tel" required className={input} /></Field>
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="필요 인원">
            <input name="필요 인원" placeholder="예: 하루 20명…" className={input} />
          </Field>
          <Field label="근무지 지역"><input name="근무지" placeholder="예: 이천 물류센터…" className={input} /></Field>
        </div>
        <Field label="문의 내용">
          <textarea name="내용" rows={5} placeholder="업무 내용, 근무 기간, 시작 희망일 등…" className={input} />
        </Field>

        <label className="flex items-start gap-2 text-base text-muted">
          <input type="checkbox" name="agree" required className="mt-1 h-4 w-4" />
          상담을 위한 개인정보(이름, 연락처 등) 수집·이용에 동의합니다.
        </label>
        <button type="submit" className="press w-full cursor-pointer rounded-md bg-navy-800 py-4 text-lg font-bold text-white hover:bg-navy-900">
          상담 요청하기
        </button>
        <p className="text-center text-base text-muted md:text-lg">본점 대표({to})에게 바로 전달됩니다</p>
      </form>

      {/* 제출 후: PC에서는 문자 앱이 없으므로 받는 번호와 내용을 보여준다 */}
      {sent && (
        <div role="status" className="mt-6 rounded-lg border-2 border-navy-900 bg-navy-50 p-5">
          <p className="text-lg font-extrabold text-navy-950">본점 대표에게 보낼 문자가 준비됐어요</p>
          <p className="mt-1 text-base text-muted">휴대폰이면 문자 앱이 열립니다. 안 열리면 아래 번호로 내용을 보내주세요.</p>
          <p className="mt-3 text-2xl font-extrabold text-navy-900 tabular-nums">{to}</p>
          <pre className="mt-3 rounded-md bg-paper p-4 font-sans text-base whitespace-pre-wrap text-ink">{sent.text}</pre>
          <div className="mt-3 flex flex-wrap gap-2">
            <button type="button" onClick={copy} className="press min-h-12 cursor-pointer rounded-md bg-navy-900 px-5 font-bold text-white hover:bg-navy-800">
              {copied ? "내용을 복사했어요" : "내용 복사"}
            </button>
            <a href={`tel:${to.replaceAll("-", "")}`} className="press inline-flex min-h-12 items-center rounded-md border-2 border-navy-900 px-5 font-bold text-navy-900 hover:bg-paper">
              전화하기
            </a>
          </div>
        </div>
      )}

      {/* 실수로 들어온 구직자 안내 */}
      <div className="mt-8 rounded-lg bg-point/30 p-5 md:p-6">
        <p className="text-lg font-bold text-navy-950">일자리를 찾고 계신가요?</p>
        <p className="mt-1 text-base text-ink md:text-lg">
          일자리 페이지에서 문자 한 통으로 지원할 수 있어요.{" "}
          <Link href="/jobs" className="font-bold text-navy-800 underline decoration-2 underline-offset-4">
            일자리 보러 가기
          </Link>
        </p>
      </div>
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
