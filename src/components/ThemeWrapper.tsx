"use client";

import { useTheme } from "next-themes";

export default function ThemeWrapper({ children }: { children: React.ReactNode }) {
  useTheme(); // ← Apenas força o contexto do tema
  return <>{children}</>;
}