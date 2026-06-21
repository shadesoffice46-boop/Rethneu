"use client";

import { useId, useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { IconChevron } from "@/components/ui/icons";
import { faqs } from "@/lib/data";

/*
  Zugaengliches Accordion.
  - Button steuert das Panel ueber aria-expanded / aria-controls
  - Panel oeffnet sanft per CSS-Grid (kein JS-Hoehenmessen), bei reduzierter
    Bewegung springt es dank globaler Regel sofort
  - immer nur ein Eintrag offen
*/
export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const baseId = useId();

  return (
    <section id="faq" className="py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-6">
        <Reveal className="text-center">
          <h2 className="text-4xl md:text-5xl">Gut zu wissen</h2>
        </Reveal>

        <Reveal className="mt-12">
          <ul className="border-t border-ink/10">
            {faqs.map((faq, i) => {
              const open = openIndex === i;
              const btnId = `${baseId}-btn-${i}`;
              const panelId = `${baseId}-panel-${i}`;
              return (
                <li key={faq.question} className="border-b border-ink/10">
                  <h3>
                    <button
                      type="button"
                      id={btnId}
                      aria-expanded={open}
                      aria-controls={panelId}
                      onClick={() => setOpenIndex(open ? null : i)}
                      className="flex w-full items-center justify-between gap-4 py-5 text-left transition-colors hover:text-lavender-700"
                    >
                      <span className="text-lg font-medium">
                        {faq.question}
                      </span>
                      <IconChevron
                        className={`h-5 w-5 shrink-0 text-lavender-700 transition-transform duration-300 ${
                          open ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  </h3>
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={btnId}
                    aria-hidden={!open}
                    className="grid transition-[grid-template-rows] duration-300 ease-out"
                    style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
                  >
                    <div className="overflow-hidden">
                      <p className="pb-6 pr-10 leading-relaxed text-muted">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
