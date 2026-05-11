import { Container } from "../layout/container";

const team = [
  {
    name: "Co-founder & Design",
    description:
      "Direção criativa e estratégia visual para marcas que querem impactar.",
    avatar:
      "https://www.figma.com/api/mcp/asset/3bf1b7ca-2031-4a20-97c1-3f10ee782c89",
  },
  {
    name: "Co-founder & Dev",
    description:
      "Arquitetura, performance e integrações para produtos escaláveis.",
    avatar:
      "https://www.figma.com/api/mcp/asset/0247cfaa-196b-4d51-8c54-4d81e0082549",
  },
  {
    name: "Co-founder & Dev",
    description: "Experiência fullstack com foco em automação e IA aplicada.",
    avatar:
      "https://www.figma.com/api/mcp/asset/6600db73-560b-4090-8fb2-7b8a2eb1cc2c",
  },
];

export function TeamSection() {
  return (
    <section className="py-28 md:py-36" id="equipe">
      <Container>
        <div className="rounded-[2rem] border border-[var(--border)] bg-[rgba(8,10,16,0.78)] px-6 py-10 md:px-10 md:py-14">
          <div className="space-y-4 text-center">
            <p className="text-[11px] font-medium uppercase tracking-[0.32em] text-white/58">
              Nos
            </p>
            <h3 className="text-[2.1rem] font-semibold leading-[1.05] tracking-[-0.05em] text-white md:text-[2.8rem]">
              As pessoas por tras da Folks.
            </h3>
            <p className="mx-auto max-w-xl text-[14px] leading-7 text-white/60">
              Tres pessoas, um proposito: criar tecnologia que faz diferenca.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {team.map((member) => (
              <div
                key={member.name}
                className="rounded-[1.6rem] border border-white/7 bg-[rgba(10,12,18,0.32)] p-6 text-center shadow-[0_20px_60px_rgba(0,0,0,0.16)] backdrop-blur-[10px] transition-all duration-300 hover:-translate-y-1 hover:border-white/14"
              >
                <div className="mx-auto mb-5 h-20 w-20 overflow-hidden rounded-full border border-white/12 bg-[#0e1117]">
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <h4 className="text-[12px] font-semibold uppercase tracking-[0.18em] text-white">
                  {member.name}
                </h4>
                <p className="mt-3 text-[12px] leading-6 text-white/54">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
