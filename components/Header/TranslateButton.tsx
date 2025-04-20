"use client";

import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import {
  useChangeLocale,
  useCurrentLocale,
  useI18n,
  useScopedI18n,
} from "@/locales/client";
import React from "react";

const flagsLocation = "/svg/flags/";

export const TranslateButton = () => {
  const changeLocale = useChangeLocale();
  const t = useScopedI18n("translate");

  const locale = useCurrentLocale();

  const getFlagUrl = (locale: string) => {
    return `${flagsLocation}${locale}.svg`;
  };

  return (
    <ul className="relative mx-auto flex rounded-lg bg-white outline-none drop-shadow-[0px_3px_1px_rgba(0,0,0,0.25)] backdrop-blur-sm">
      <DropdownMenu>
        <DropdownMenuTrigger className="flex items-center p-3 text-staticblack outline-none group-hover:text-staticblack-foreground">
          <Image src={getFlagUrl(locale)} width={0} height={0} className="h-3 w-5" alt={"flag-" + locale} />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="mt-4 w-32 rounded-md p-1 text-staticblack">
          <DropdownMenuGroup>
            <DropdownMenuItem onClick={() => changeLocale("en")}>
              <div className="flex items-center gap-2">
                <Image
                  src="/svg/flags/en.svg"
                  width={12}
                  height={0}
                  alt="flag"
                />
                <span>{t("english")}</span>
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => changeLocale("fr")}>
              <div className="flex items-center gap-2">
                <Image
                  src="/svg/flags/fr.svg"
                  width={12}
                  height={0}
                  alt="flag"
                />
                <span>{t("french")}</span>
              </div>
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </ul>
  );
};
