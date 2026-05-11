import { Container } from "../layout/container";

const steps = [
  {
    title: "Descoberta",
    description:
      "Entendemos o contexto, objetivos e público para definir o caminho certo.",
  },
  {
    title: "Planejamento",
    description:
      "Mapeamos backlog, fluxo e arquitetura para acelerar a entrega.",
  },
  {
    title: "Design",
    description:
      "Criamos interfaces premium com foco em conversão e usabilidade.",
  },
  {
    title: "Desenvolvimento",
    description: "Código robusto, performance e integrações sob medida.",
  },
  {
    title: "Lançamento",
    description: "Publicação assistida, monitoramento e iteração contínua.",
  },
];

export function ProcessSection() {
  return (
    <section className="py-12 md:py-20" id="processo">
      <Container>
        <div className="px-6 py-10 md:px-10 md:py-14">
          {" "}
          <div className="space-y-4 text-center">
            <p className="text-[11px] font-medium uppercase tracking-[0.32em] text-white/58">
              Como trabalhamos
            </p>
            <h3 className="text-[2.1rem] font-semibold leading-[1.05] tracking-[-0.05em] text-white md:text-[2.8rem]">
              Do briefing ao resultado,
              <br />
              sem surpresas.
            </h3>
            <p className="mx-auto max-w-2xl text-[14px] leading-7 text-white/60">
              Um processo claro e alinhado para garantir que cada etapa entregue
              valor real ao seu negócio.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-5">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] px-5 py-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.06]"
              >
                <div className="mx-auto mb-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/12 text-[12px] font-semibold text-white/86">
                  {index + 1}
                </div>
                <h4 className="text-[13px] font-semibold uppercase tracking-[0.14em] text-white">
                  {step.title}
                </h4>
                <p className="mt-3 text-[12px] leading-6 text-white/54">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
