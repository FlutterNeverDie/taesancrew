import { ko } from "./dict/ko";
import type { Locale } from "./config";

// 문자 지원 링크. 누르면 양식이 채워진 문자 창이 열린다.
// 문자를 읽는 사람은 지점 대표라서 항목은 언어와 상관없이 항상 한국어.
// 다른 언어 페이지에서 보내면 생년월일 아래에 "국적", "비자 종류"가 붙는다 (외국인 지원자 확인용).
// workplace(지점 한국어 이름)를 넘기면 희망 집결지를 미리 채운다
export function smsApplyHref(phone: string, workplace?: string, lang: Locale = "ko") {
  const choices = ko.sms.workplaceChoices;
  const lines = ko.sms.fields.map((label, i) => (i === 3 ? `${label}${workplace ? "" : ` (${choices})`}: ${workplace ?? ""}` : `${label}: `));
  if (lang !== "ko") lines.splice(2, 0, ...ko.sms.extraFields.map((label) => `${label}: `));
  return `sms:${phone.replaceAll("-", "")}?&body=${encodeURIComponent(["[일자리 지원]", ...lines].join("\n"))}`;
}
