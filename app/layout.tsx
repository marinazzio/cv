"use client";

import "@/global.css";
import { LocaleProvider, useLocale } from "@/app/locale-context";
import React from "react";

const HomeRoot: React.FC<{ children: React.ReactNode }> = ({ children }) => {

  const { locale } = useLocale();

  return (
    <html lang={locale}>
      <body>{children}</body>
    </html>
  );
}

const HomeRootWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <LocaleProvider>
      <HomeRoot>{children}</HomeRoot>
    </LocaleProvider>
  );
};

export default HomeRootWrapper;
