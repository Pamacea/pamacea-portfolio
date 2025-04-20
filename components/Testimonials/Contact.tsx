"use client"

import { useScopedI18n } from "@/locales/client";
import { Button } from "../ui/button";

export function Contact() {
  const t = useScopedI18n("contact");

  return (
    <section className="mb-16 flex flex-col items-center">
      <div className="text-center font-semibold text-whitetomidgray">
        <p className="mb-2">{t("title")}</p>
        <p className="mb-4">{t("subtitle")}</p>
      </div>
      <div className="">
        <Button variant="secondary" typeButton="contact" />
      </div>
    </section>
  );
}
