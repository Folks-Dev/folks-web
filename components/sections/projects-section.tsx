import { Container } from "../layout/container";

const codeLines = [
  "import React from 'react';",
  "type AppProps = {",
  "  title?: string;",
  "};",
  "",
  "export function App({ title = 'folks' }: AppProps) {",
  "  return (",
  "    <main>",
  "      <h1>{title}</h1>",
  "      <p>Nós somos a folks.</p>",
  "    </main>",
  "  )",
  "}",
];

export function ProjectsSection() {
  return (
    <section className="py-28 relative bg-[#050505]" id="projetos">
      <div className="rounded-full bg-[#0918d0]/20 blur-[140px] -z-10" />
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
          <div className="rounded-[28px] bg-gradient-to-br from-[#0b1247]/60 via-[#151a5e]/40 to-[#0b1247]/60 p-8">
            <div className="rounded-[20px] bg-[#0e1117] border border-white/5 overflow-hidden">
              <div className="flex items-center gap-3 border-b border-white/10 px-4 py-3 text-[12px] text-zinc-400">
                <span className="h-2 w-2 rounded-full bg-[#ff5f57]" />
                <span className="h-2 w-2 rounded-full bg-[#febc2e]" />
                <span className="h-2 w-2 rounded-full bg-[#28c840]" />
                <span className="ml-3">folks.tsx</span>
              </div>
              <div className="px-6 py-5 text-[12px] leading-6 text-[#c3c3c3] font-mono">
                {codeLines.map((line, index) => (
                  <div key={index} className="flex">
                    <span className="mr-4 w-4 text-right text-[#3b3f4a]">
                      {index + 1}
                    </span>
                    <span className="whitespace-pre">{line}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-5">
            <p className="text-[12px] tracking-[0.4em] uppercase text-[#0918d0]">
              Sobre a FOLKS
            </p>
            <h3 className="text-3xl md:text-[2.4rem] font-semibold uppercase tracking-tight leading-[1.15]">
              Somos tres.
            </h3>
            <p className="text-zinc-400 text-[14px] leading-relaxed">
              Criamos experiencias premium com tecnologia e design. Da
              estrategia ao produto final, entregamos solucoes que elevam o
              nivel do seu negocio.
            </p>
            <div className="flex gap-3">
              <span className="inline-flex items-center rounded-full border border-[#0918d0]/40 px-4 py-2 text-[12px] uppercase tracking-[0.2em] text-zinc-200">
                Produto
              </span>
              <span className="inline-flex items-center rounded-full border border-[#0918d0]/40 px-4 py-2 text-[12px] uppercase tracking-[0.2em] text-zinc-200">
                Design
              </span>
              <span className="inline-flex items-center rounded-full border border-[#0918d0]/40 px-4 py-2 text-[12px] uppercase tracking-[0.2em] text-zinc-200">
                Dev
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
