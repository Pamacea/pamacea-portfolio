"use client"

import { useScopedI18n } from "@/locales/client";
import { Project } from "./Project";
import * as React from "react";
import { Title } from "../Title";

export function Projects() {
  const t = useScopedI18n("projects");
  return (
    <section id="projets" className="min-h-screen px-4 py-20">
      <Title title={t("title")}/>
      <Project />
    </section>
  );
}
