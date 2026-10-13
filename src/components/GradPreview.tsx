"use client";

import { useEffect } from "react";

// [로컬 미리보기 전용] 주소에 ?grad 가 있으면 상단 남색 영역을 포스터 그라데이션으로
export function GradPreview() {
  useEffect(() => {
    if (location.search.includes("grad")) document.documentElement.classList.add("grad");
  }, []);
  return null;
}
