"use client";

import { useEffect } from "react";

// <html lang dir>을 페이지 언어에 맞춘다. 첫 화면은 [lang]/layout.tsx의 짧은 스크립트가, 페이지를 옮겨 다닐 때는 이 컴포넌트가 맞춘다
export function HtmlLang({ lang, dir }: { lang: string; dir: "ltr" | "rtl" }) {
  useEffect(() => {
    const el = document.documentElement;
    el.lang = lang;
    el.dir = dir;
    return () => {
      el.lang = "ko";
      el.dir = "ltr";
    };
  }, [lang, dir]);
  return null;
}
