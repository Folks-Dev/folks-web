"use client";

import { useEffect, useState } from "react";
import { Container } from "../layout/container";

export function HeroSection() {
  const [text, setText] = useState("");
  const fullText = "Nossas ações";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i + 1));
      i++;
      if (i >= fullText.length) clearInterval(interval);
    }, 150);
    return () => clearInterval(interval);
  }, []);
  return (
    <section className="relative flex min-h-screen flex-col justify-between overflow-hidden pt-24">
      <Container>
        <div className="relative flex min-h-[calc(100vh-11rem)] flex-col items-center justify-center pb-16 text-center">
          <div className="mb-8 flex items-center justify-center rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-[10px] font-medium uppercase tracking-[0.32em] text-white/66 backdrop-blur-md md:mb-10">
            Tecnologia <span className="mx-3 h-1 w-1 rounded-full bg-[var(--accent)]" />{" "}
            Design <span className="mx-3 h-1 w-1 rounded-full bg-[var(--accent)]" /> Inovação
          </div>

          <div className="absolute left-1/2 top-1/2 -z-10 h-[20rem] w-[20rem] -translate-x-1/2 -translate-y-[42%] rounded-full bg-[radial-gradient(circle,rgba(69,85,255,0.34)_0%,rgba(69,85,255,0.08)_42%,transparent_72%)] blur-3xl md:h-[30rem] md:w-[30rem]" />

          <h1 className="max-w-5xl text-[3.4rem] font-semibold leading-[0.94] tracking-[-0.06em] text-white md:text-[5.9rem]">
            Suas ideias
            <br />
            <span className="inline-flex items-center text-[var(--accent)]">
              {text}
              <span className="ml-3 h-[0.88em] w-[4px] bg-[var(--accent)] animate-cursor" />
            </span>
          </h1>

          <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row md:mt-12">
            <a
              href="#servicos"
              className="inline-flex rounded-full bg-white px-6 py-3 text-[12px] font-semibold uppercase tracking-[0.18em] text-[#090b11] transition-transform duration-300 hover:scale-[1.03]"
            >
              Ver serviços
            </a>
            <a
              href="#contato"
              className="inline-flex rounded-full border border-white/10 bg-white/[0.03] px-6 py-3 text-[12px] font-semibold uppercase tracking-[0.18em] text-white transition-all duration-300 hover:scale-[1.03] hover:border-white/18 hover:bg-white/[0.05]"
            >
              Fale com a gente
            </a>
          </div>
        </div>
      </Container>

      <div className="mt-auto flex w-full overflow-hidden border-y border-white/5 bg-black/20 py-8 whitespace-nowrap backdrop-blur-sm">
        <div className="flex animate-marquee shrink-0">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="flex shrink-0 items-center gap-20 px-10 text-[11px] font-semibold uppercase tracking-[0.24em] text-white/38"
            >
              <span className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />{" "}
                Exclusivos
              </span>
              <span className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />{" "}
                Automações
              </span>
              <span className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />{" "}
                Desenvolvimento
              </span>
              <span className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" /> Soluções
                Inteligentes
              </span>
              <span className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />{" "}
                Softwares
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
