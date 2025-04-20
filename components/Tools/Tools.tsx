"use client";

import { useScopedI18n } from "@/locales/client";
import { Title } from "../Title";
import { Icons } from "./Icons";
import { toolsData } from "@/data/ToolsData";

export function Tools() {
  const t = useScopedI18n("skills");
  return (
    <section id="competences" className="mt-16 min-h-screen px-4 py-20">
      <Title title={t("title")} subtitle={t("subtitle")} />

      {/* Tools => TODO: Need to be optimized! */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {Object.entries(toolsData).map(([category, items]) => (
          <div
            key={category}
            className="flex flex-col space-y-6 rounded-xl border p-6 shadow-xl"
          >
            <h3 className="text-whitetomidgray mb-4 text-xl font-semibold uppercase">
              {category}
            </h3>

            {/* Section des meilleurs outils */}
            {items.better.length > 0 && (
              <div>
                {/* <h4 className="mb-2 text-lg font-medium text-green-400">Meilleurs</h4> */}
                <div className="grid grid-cols-3 gap-4">
                  {items.better.map((item, index) => (
                    <div
                      key={index}
                      className="bg-reversed text-center group relative flex transform flex-col items-center rounded-lg p-4 shadow-md backdrop-blur-md transition-all hover:scale-105 hover:shadow-xl"
                    >
                      <Icons
                        srcIcon={item.icon}
                        className="size-10 md:size-20"
                      />
                      <p className="text-whitetomidgray/30 group-hover:text-whitetomidgray mt-2 text-sm font-medium">
                        {item.name}
                      </p>
                      <div className="absolute inset-0 rounded-lg bg-ternary/20 opacity-0 transition-opacity group-hover:opacity-100" />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Section des outils moins modernes */}
            {items.less.length > 0 && (
              <div>
                {/* <h4 className="mb-2 text-lg font-medium text-red-400">Moins modernes</h4> */}
                <div className="grid grid-cols-3 gap-4">
                  {items.less.map((item, index) => (
                    <div
                      key={index}
                      className="bg-reversed text-center group relative flex transform flex-col items-center rounded-lg p-2 shadow-md backdrop-blur-md transition-all hover:scale-105 hover:shadow-xl"
                    >
                      <Icons srcIcon={item.icon} className="size-6 md:size-8" />
                      <p className="text-whitetomidgray/30 group-hover:text-whitetomidgray mt-2 text-sm font-medium">
                        {item.name}
                      </p>
                      <div className="absolute inset-0 rounded-lg bg-ternary/20 opacity-0 transition-opacity group-hover:opacity-100" />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
