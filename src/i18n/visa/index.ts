import type { Locale } from "../config";
import { ko, type VisaText } from "./ko";
import { en } from "./en";
import { zh } from "./zh";
import { ja } from "./ja";
import { vi } from "./vi";
import { uz } from "./uz";
import { mn } from "./mn";
import { ru } from "./ru";
import { ar } from "./ar";
import { ne } from "./ne";
import { th } from "./th";
import { id } from "./id";
import { km } from "./km";

export type { VisaGroup, VisaText } from "./ko";

// 비자 안내(/visa) 문구. 원본은 ko.ts, 법이 바뀌면 13개 언어 파일의 기준일·내용을 같이 고친다
const visa: Record<Locale, VisaText> = { ko, en, zh, ja, vi, uz, mn, ru, ar, ne, th, id, km };

export function getVisa(lang: Locale): VisaText {
  return visa[lang];
}
