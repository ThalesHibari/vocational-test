export type ThemeName = "purple" | "orange" | "green" | "pink";

export interface ThemeTokens {
  bgHex: string;
  primaryHex: string;
  darkHex: string;
  lightHex: string;
}

export const THEMES: Record<ThemeName, ThemeTokens> = {
  purple: { bgHex: "#fbf3fe", primaryHex: "#9267f4", darkHex: "#6443af", lightHex: "#dabff9" },
  orange: { bgHex: "#fffaf0", primaryHex: "#fd7867", darkHex: "#ce4938", lightHex: "#f8d7d3" },
  green:  { bgHex: "#faffed", primaryHex: "#02bc59", darkHex: "#06773b", lightHex: "#d9eba4" },
  pink:   { bgHex: "#fff6fd", primaryHex: "#f56bd6", darkHex: "#b12a93", lightHex: "#f9d3f0" },
};

/** Deriva o tema pelo índice da questão (0-based):
 *  0-14  → Roxo  (Q1-15,  Lista ABCD)
 *  15-29 → Laranja (Q16-30, Likert)
 *  30-44 → Verde   (Q31-45, Cards)
 *  45-59 → Rosa    (Q46-60, Dilema)
 */
export function getThemeForIndex(index: number): ThemeName {
  if (index < 15)  return "purple";
  if (index < 30)  return "orange";
  if (index < 45)  return "green";
  return "pink";
}
