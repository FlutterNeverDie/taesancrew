// subset-font 패키지에는 타입이 없어서 쓰는 모양만 적어 둔다 (scripts/subset-fonts.mjs, og-images.mts)
declare module "subset-font" {
  export default function subsetFont(
    font: Buffer,
    text: string,
    options?: { targetFormat?: "woff2" | "woff" | "truetype" | "sfnt"; variationAxes?: Record<string, number | { min: number; max: number }> },
  ): Promise<Buffer>;
}
