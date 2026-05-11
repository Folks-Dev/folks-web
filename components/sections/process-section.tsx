import { Container } from "../layout/container";

const steps = [
  {
    title: "Descoberta",
    description:
      "Entendemos o contexto, objetivos e publico para definir o caminho certo.",
  },
  {
    title: "Planejamento",
    description:
      "Mapeamos backlog, fluxo e arquitetura para acelerar a entrega.",
  },
  {
    title: "Design",
    description:
      "Criamos interfaces premium com foco em conversao e usabilidade.",
  },
  {
    title: "Desenvolvimento",
    description: "Codigo robusto, performance e integracoes sob medida.",
  },
  {
    title: "Lancamento",
    description: "Publicacao assistida, monitoramento e iteracao continua.",
  },
];

export function ProcessSection() {
  return (
    <section className="py-28 bg-[#050505]" id="processo">
      <Container>
        <div className="text-center space-y-4">
          <p className="text-[12px] tracking-[0.4em] uppercase text-[#0918d0]">
            Como trabalhamos
          </p>
          <h3 className="text-3xl md:text-[2.2rem] font-semibold uppercase tracking-tight">
            Do briefing ao resultado,
            <br />
            sem surpresas.
          </h3>
          <p className="text-zinc-400 text-[14px] max-w-2xl mx-auto">
            Um processo claro e alinhado para garantir que cada etapa entregue
            valor real ao seu negocio.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="rounded-2xl border border-white/10 bg-[#0a0a0a]/80 px-5 py-6 text-center hover:border-[#0918d0]/50 transition-colors"
            >
              <div className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-xl border border-[#0918d0]/40 text-[12px] text-zinc-200">
                {index + 1}
              </div>
              <h4 className="text-[13px] uppercase tracking-[0.2em] text-white">
                {step.title}
              </h4>
              <p className="mt-3 text-[12px] text-zinc-500 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
