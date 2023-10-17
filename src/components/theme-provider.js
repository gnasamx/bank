"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";

export default function ThemeProvider({ children }) {
  return (
    <NextThemesProvider
      disableTransitionOnChange
      defaultTheme="system"
      attribute="class"
    >
      {children}
    </NextThemesProvider>
  );
}
