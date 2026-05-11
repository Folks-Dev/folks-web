"use client";

import { Container } from "../layout/container";
import { motion } from "framer-motion";

const codeLines = [
  'import React from "react";',
  "",
  "type AppProps = {",
  "  title?: string;",
  "};",
  "",
  'export function App({ title = "Folks" }: AppProps) {',
  "  return (",
  "    <main>",
  "      <h1>{title}</h1>",
  "      <p>Nos somos a Folks.</p>",
  "    </main>",
  "  );",
  "}",
];

export function ProjectsSection() {
  return (
    <section className="relative py-12 md:py-20" id="projetos">
      <Container>
        <div className="px-6 py-10 md:px-10 md:py-14">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="rounded-[1.75rem] bg-[linear-gradient(180deg,rgba(24,29,45,0.94)_0%,rgba(16,18,27,0.94)_100%)] p-5 md:p-8"
            >
              <div className="overflow-hidden rounded-[1.4rem] border border-white/8 bg-[#11141d]">
                <div className="flex items-center gap-4 border-b border-white/8 bg-[#171b26] px-4 py-3 text-[12px] text-white/50">
                  <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-[#ff5f56]" />
                    <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
                    <span className="h-3 w-3 rounded-full bg-[#27c93f]" />
                  </div>
                  <div className="flex items-center ml-2">
                    <span className="text-white/80">folks.tsx</span>
                  </div>
                </div>
                <div className="px-4 py-5 font-mono text-[12px] leading-7 text-[#cfd7ff] md:px-6">
                  {codeLines.map((line, index) => (
                    <div key={index} className="flex">
                      <span className="mr-4 w-4 text-right text-white/24">
                        {index + 1}
                      </span>
                      <span className="whitespace-pre">{line}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-6"
            >
              <p className="text-[12px] md:text-[13px] font-medium uppercase tracking-[0.32em] text-white/58">
                Sobre a folks
              </p>
              <h3 className="text-[3rem] font-semibold leading-[1.05] tracking-[-0.05em] text-white md:text-[4rem]">
                Somos três.
              </h3>
              <p className="max-w-[600px] text-[16px] md:text-[18px] leading-8 text-white/62">
                A Folks nasceu da vontade de três amigos de criar tecnologia que
                realmente importa. Não somos somente uma fabrica de software -
                somos parceiros que entendem o seu negócio e constroem soluções
                com propósito. Combinamos expertise em desenvolvimento, design
                de produto e inteligência artificial para entregar soluções que
                vão além do esperado.
              </p>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
