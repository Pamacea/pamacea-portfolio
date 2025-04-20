"use client"

import { useScopedI18n } from "@/locales/client";

export const LinkHeader = () => {
    const t = useScopedI18n("linkheader");
    return (
        <div className="absolute left-0 top-0 z-20 mt-16 flex w-full sm:mt-16 md:mt-12 lg:mt-10">
        <div className="absolute flex h-14 w-full items-center justify-center rounded-xl bg-bluetomidgray">
          <h2 className="font-tiltwarp text-center text-2xl sm:text-3xl font-bold text-white lg:text-4xl">
            {t("title")}
          </h2>
        </div>
      </div>
    );
};