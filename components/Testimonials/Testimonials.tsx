"use client";

import { useScopedI18n } from "@/locales/client";
import { Reviews } from "./Reviews";
import { Title } from "../Title";

export function Testimonials() {
  const t = useScopedI18n("notice");

  return (
    <section id="avis" className="min-h-screen px-4 py-20">
      <Title title={t("title")} />
      <Reviews />
    </section>
  );
}
