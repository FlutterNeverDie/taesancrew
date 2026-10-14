import { ko } from "./dict/ko";
import { getDict } from "./index";
import { localeInfo, type Locale } from "./config";

// 문자 지원 링크. 누르면 양식이 채워진 문자 창이 열린다.
// 문자를 읽는 사람은 지점 대표라서 항목 이름은 항상 한국어. 다른 언어 페이지에서 보내면
// "사용 언어: 영어"를 맨 위에 적고, 항목마다 그 언어 이름을 괄호로 붙여 지원자도 알아보게 한다.
// workplace(지점 한국어 이름)를 넘기면 희망 집결지를 미리 채운다
export function smsApplyHref(phone: string, workplace?: string, lang: Locale = "ko") {
  const local = getDict(lang).sms.fields;
  const choices = ko.sms.workplaceChoices;
  const lines = ko.sms.fields.map((label, i) => {
    const name = lang === "ko" ? label : `${label} (${local[i]})`;
    if (i === 3) return `${name}${workplace ? "" : ` [${choices}]`}: ${workplace ?? ""}`;
    return `${name}: `;
  });
  const head = lang === "ko" ? "[일자리 지원]" : `[일자리 지원] 사용 언어: ${localeInfo[lang].korean}`;
  return `sms:${phone.replaceAll("-", "")}?&body=${encodeURIComponent([head, ...lines].join("\n"))}`;
}
