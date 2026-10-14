"use client";

import { useEffect, useRef, useState } from "react";
import { branches, company, smsApplyHref, tel } from "@/lib/site";
import { BackIcon, CheckIcon, CloseIcon, LinkIcon, MessageIcon, PhoneIcon, ShareIcon } from "@/components/icons";

// 어느 화면에서나 보이는 연락·공유 버튼
// - PC: 오른쪽 아래에 [공유] 위, [연락하기] 아래로 쌓인다. 누르면 버튼 위로 창이 열린다
// - 모바일: 화면 맨 아래 바([공유] [연락하기]). 누르면 아래에서 창이 올라온다
// 연락하기 흐름: 기업·도급사 → 무조건 본점 대표번호 / 개인 → 세 지점 중 선택 → 전화 or 문자 지원
type Panel = null | "share" | "contact";
type Step = "choose" | "business" | "worker";

export function ContactDock() {
  const [panel, setPanel] = useState<Panel>(null);
  const [step, setStep] = useState<Step>("choose");
  const rootRef = useRef<HTMLDivElement>(null);

  const open = (p: Exclude<Panel, null>) => {
    setPanel((cur) => (cur === p ? null : p));
    setStep("choose");
  };
  const close = () => setPanel(null);

  // Esc, 바깥 클릭으로 닫기
  useEffect(() => {
    if (!panel) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    const onDown = (e: PointerEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) close();
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("pointerdown", onDown);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("pointerdown", onDown);
    };
  }, [panel]);

  return (
    <div ref={rootRef}>
      {/* 열린 창: PC는 버튼 위 팝오버, 모바일은 하단 시트 */}
      {panel && (
        <div
          role="dialog"
          aria-label={panel === "share" ? "공유하기" : "연락하기"}
          className="dock-panel fixed inset-x-0 bottom-16 z-50 max-h-[calc(100svh-6rem)] overflow-y-auto rounded-t-2xl border border-rule bg-paper p-5 pb-6 shadow-[0_-8px_30px_rgb(0_0_0/0.12)] lg:inset-x-auto lg:right-6 lg:bottom-40 lg:w-[22rem] lg:rounded-2xl lg:shadow-[0_12px_40px_rgb(0_0_0/0.18)]"
        >
          {panel === "share" ? <SharePanel onClose={close} /> : <ContactPanel step={step} setStep={setStep} onClose={close} />}
        </div>
      )}

      {/* PC: 오른쪽 아래 버튼 묶음 */}
      <div className="fixed right-6 bottom-6 z-50 hidden flex-col items-end gap-3 lg:flex">
        <button
          type="button"
          onClick={() => open("share")}
          aria-expanded={panel === "share"}
          className="press flex h-14 w-14 cursor-pointer items-center justify-center rounded-full border border-rule bg-paper text-navy-900 shadow-[0_6px_20px_rgb(0_0_0/0.12)] hover:bg-navy-50"
        >
          <ShareIcon className="h-6 w-6" />
          <span className="sr-only">공유하기</span>
        </button>
        <button
          type="button"
          onClick={() => open("contact")}
          aria-expanded={panel === "contact"}
          className="press flex h-16 cursor-pointer items-center gap-2.5 rounded-full bg-point px-7 text-lg font-extrabold text-navy-950 shadow-[0_8px_24px_rgb(0_0_0/0.18)] hover:bg-point-dark"
        >
          <PhoneIcon className="h-5 w-5" /> 연락하기
        </button>
      </div>

      {/* 모바일: 하단 바 */}
      <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-[minmax(0,1fr)_minmax(0,2fr)] border-t border-rule bg-paper pb-[env(safe-area-inset-bottom)] lg:hidden">
        <button type="button" onClick={() => open("share")} aria-expanded={panel === "share"} className="flex h-16 cursor-pointer items-center justify-center gap-2 font-bold text-navy-900">
          <ShareIcon /> 공유
        </button>
        <button type="button" onClick={() => open("contact")} aria-expanded={panel === "contact"} className="flex h-16 cursor-pointer items-center justify-center gap-2 bg-point text-lg font-extrabold text-navy-950">
          <PhoneIcon /> 연락하기
        </button>
      </div>
    </div>
  );
}

function PanelHead({ title, onBack, onClose }: { title: string; onBack?: () => void; onClose: () => void }) {
  return (
    <div className="mb-4 flex items-center gap-2">
      {onBack && (
        <button type="button" onClick={onBack} className="-ml-2 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full text-navy-900 hover:bg-navy-50">
          <BackIcon />
          <span className="sr-only">뒤로</span>
        </button>
      )}
      <p className="flex-1 text-xl font-extrabold text-navy-950">{title}</p>
      <button type="button" onClick={onClose} className="-mr-2 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full text-muted hover:bg-navy-50">
        <CloseIcon />
        <span className="sr-only">닫기</span>
      </button>
    </div>
  );
}

const choiceCls = "press flex w-full cursor-pointer flex-col items-start rounded-xl border-2 border-rule px-5 py-4 text-left hover:border-navy-700";
const callCls = "press flex min-h-12 flex-1 items-center justify-center gap-2 rounded-lg bg-navy-900 px-4 text-base font-bold whitespace-nowrap text-white hover:bg-navy-800";
const smsCls = "press flex min-h-12 flex-1 items-center justify-center gap-2 rounded-lg border-2 border-navy-900 px-4 text-base font-bold whitespace-nowrap text-navy-900 hover:bg-navy-50";

function ContactPanel({ step, setStep, onClose }: { step: Step; setStep: (s: Step) => void; onClose: () => void }) {
  if (step === "choose") {
    return (
      <>
        <PanelHead title="어떤 문의인가요?" onClose={onClose} />
        <div className="grid gap-3">
          <button type="button" className={choiceCls} onClick={() => setStep("business")}>
            <span className="text-lg font-extrabold text-navy-950">기업·도급사 인력 요청</span>
            <span className="mt-0.5 text-base text-muted">인력이 필요한 회사</span>
          </button>
          <button type="button" className={choiceCls} onClick={() => setStep("worker")}>
            <span className="text-lg font-extrabold text-navy-950">일자리 지원</span>
            <span className="mt-0.5 text-base text-muted">일하고 싶은 개인</span>
          </button>
        </div>
      </>
    );
  }

  if (step === "business") {
    // 기업 문의는 무조건 본점 대표번호
    return (
      <>
        <PanelHead title="기업·도급사 인력 요청" onBack={() => setStep("choose")} onClose={onClose} />
        <p className="text-base leading-relaxed text-muted">기업 문의는 본점 대표가 직접 받습니다.</p>
        <p className="mt-3 text-2xl font-extrabold text-navy-950 tabular-nums">{company.mainPhone}</p>
        <div className="mt-4 flex gap-2">
          <a href={tel(company.mainPhone)} className={callCls}>
            <PhoneIcon /> 전화
          </a>
          <a href={`sms:${company.mainPhone.replaceAll("-", "")}`} className={smsCls}>
            <MessageIcon /> 문자
          </a>
        </div>
      </>
    );
  }

  // 개인: 지점 선택
  return (
    <>
      <PanelHead title="어느 지점에서 일할까요?" onBack={() => setStep("choose")} onClose={onClose} />
      <ul className="grid gap-3">
        {branches.map((b) =>
          b.phone ? (
            <li key={b.slug} className="rounded-xl border border-rule p-4">
              <p className="flex flex-wrap items-baseline gap-x-2">
                <span className="text-lg font-extrabold text-navy-950">{b.name}</span>
                <span className="text-base text-muted">{b.landmark ?? b.address}</span>
              </p>
              <div className="mt-3 flex gap-2">
                <a href={tel(b.phone)} className={callCls}>
                  <PhoneIcon /> 전화
                </a>
                <a href={smsApplyHref(b.phone, b.name)} className={smsCls}>
                  <MessageIcon /> 문자 지원
                </a>
              </div>
            </li>
          ) : null,
        )}
      </ul>
    </>
  );
}

function SharePanel({ onClose }: { onClose: () => void }) {
  const [copied, setCopied] = useState(false);
  // 이 창은 버튼을 누른 뒤 브라우저에서만 그려지므로 location·navigator를 바로 읽어도 된다
  const [url] = useState(() => location.origin + location.pathname);
  const [canNativeShare] = useState(() => typeof navigator.share === "function");

  const text = `${company.title} - 물류·제조 인력 소개·도급`;

  const nativeShare = async () => {
    try {
      await navigator.share({ title: company.title, text, url });
    } catch {
      // 사용자가 공유 창을 닫은 경우: 아무것도 하지 않는다
    }
  };
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(url);
    } catch {
      const t = document.createElement("textarea");
      t.value = url;
      document.body.appendChild(t);
      t.select();
      document.execCommand("copy");
      t.remove();
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const rowCls = "press flex w-full cursor-pointer items-center gap-3 rounded-xl border border-rule px-4 py-3.5 text-left text-lg font-bold text-navy-950 hover:bg-navy-50";

  return (
    <>
      <PanelHead title="이 페이지 공유하기" onClose={onClose} />
      <div className="grid gap-2.5">
        {canNativeShare && (
          <button type="button" onClick={nativeShare} className={rowCls}>
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-point text-navy-950"><ShareIcon /></span>
            카카오톡 등으로 공유
          </button>
        )}
        <a href={`sms:?&body=${encodeURIComponent(`${text}\n${url}`)}`} className={rowCls}>
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-navy-900 text-white"><MessageIcon /></span>
          문자로 보내기
        </a>
        <button type="button" onClick={copy} className={rowCls} aria-live="polite">
          <span className={`flex h-9 w-9 items-center justify-center rounded-full ${copied ? "bg-navy-900 text-point" : "bg-navy-100 text-navy-900"}`}>
            {/* 복사되면 링크 아이콘이 체크로 바뀐다 */}
            {copied ? <CheckIcon className="pop-in h-5 w-5" /> : <LinkIcon />}
          </span>
          {copied ? "링크를 복사했어요" : "링크 복사"}
        </button>
      </div>
      <p className="mt-3 truncate text-sm text-muted">{url}</p>
    </>
  );
}
