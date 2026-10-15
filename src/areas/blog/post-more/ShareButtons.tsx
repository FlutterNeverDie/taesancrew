"use client";

import { useState, useSyncExternalStore } from "react";
import type { Dict } from "@/i18n/dict/ko";
import { CheckIcon, LinkIcon, MessageIcon, ShareIcon } from "@/components/icons";

// 글 끝 공유 버튼 3개. 동작은 하단 공유 창(layout/contact-dock)과 같고, 보내는 글은 이 글의 제목
// 카카오톡 등으로 공유: 휴대폰 공유 창(navigator.share)이 있는 브라우저에서만 보인다
const noop = () => () => {};
const useNativeShare = () =>
  useSyncExternalStore(noop, () => typeof navigator.share === "function", () => false);

export function ShareButtons({ t, title, url }: { t: Dict["dock"]; title: string; url: string }) {
  const canNativeShare = useNativeShare();
  const [copied, setCopied] = useState(false);

  const nativeShare = async () => {
    try {
      await navigator.share({ title, url });
    } catch {
      // 사용자가 공유 창을 닫은 경우: 아무것도 하지 않는다
    }
  };
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(url);
    } catch {
      const el = document.createElement("textarea");
      el.value = url;
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      el.remove();
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const btn = "press inline-flex min-h-12 cursor-pointer items-center gap-2.5 rounded-md border border-rule bg-paper px-4 text-base font-bold text-navy-950 hover:bg-navy-50 md:text-lg";

  return (
    <div className="grid gap-2.5 sm:flex sm:flex-wrap">
      {canNativeShare && (
        <button type="button" onClick={nativeShare} className={btn}>
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-point text-navy-950"><ShareIcon className="h-4 w-4" /></span>
          {t.nativeShare}
        </button>
      )}
      <a href={`sms:?&body=${encodeURIComponent(`${title}\n${url}`)}`} className={btn}>
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-navy-900 text-white"><MessageIcon className="h-4 w-4" /></span>
        {t.smsShare}
      </a>
      <button type="button" onClick={copy} className={btn} aria-live="polite">
        <span className={`flex h-8 w-8 items-center justify-center rounded-full ${copied ? "bg-navy-900 text-point" : "bg-navy-100 text-navy-900"}`}>
          {/* 복사되면 링크 아이콘이 체크로 바뀐다 */}
          {copied ? <CheckIcon className="pop-in h-4 w-4" /> : <LinkIcon className="h-4 w-4" />}
        </span>
        {copied ? t.copied : t.copy}
      </button>
    </div>
  );
}
