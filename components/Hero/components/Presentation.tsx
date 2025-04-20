"use client";

import { useScopedI18n } from "@/locales/client";

export const Presentation = () => {
  const t = useScopedI18n("presentation");

  return (
    <div className="text-dynamic">
      <h1 className="font-tiltwarp mb-4 text-6xl lg:text-7xl font-bold uppercase">
        {t("title")}
      </h1>
      <p className="mb-8 ml-12 text-xl lg:ml-0 xl:ml-12">{t("subtitle")}</p>
    </div>
  );
};
