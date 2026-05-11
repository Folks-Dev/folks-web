import { Container } from "../layout/container";

const team = [
  {
    name: "Co-founder & Design",
    description:
      "Direcao criativa e estrategia visual para marcas que querem impactar.",
    avatar:
      "https://www.figma.com/api/mcp/asset/3bf1b7ca-2031-4a20-97c1-3f10ee782c89",
  },
  {
    name: "Co-founder & Dev",
    description:
      "Arquitetura, performance e integracoes para produtos escalaveis.",
    avatar:
      "https://www.figma.com/api/mcp/asset/0247cfaa-196b-4d51-8c54-4d81e0082549",
  },
  {
    name: "Co-founder & Dev",
    description: "Experiencia fullstack com foco em automacao e IA aplicada.",
    avatar:
      "https://www.figma.com/api/mcp/asset/6600db73-560b-4090-8fb2-7b8a2eb1cc2c",
  },
];

export function TeamSection() {
  return (
    <section className="py-28 bg-[#050505]" id="equipe">
      <Container>
        <div className="text-center space-y-4">
          <p className="text-[12px] tracking-[0.4em] uppercase text-[#0918d0]">
            Nos
          </p>
          <h3 className="text-3xl md:text-[2.2rem] font-semibold uppercase tracking-tight">
            As pessoas por tras da FOLKS.
          </h3>
          <p className="text-zinc-400 text-[14px] max-w-xl mx-auto">
            Tres pessoas, um proposito: criar tecnologia que faz diferenca.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {team.map((member) => (
            <div
              key={member.name}
              className="rounded-2xl border border-white/10 bg-[#0a0a0a]/80 p-6 text-center hover:border-[#0918d0]/50 transition-colors"
            >
              <div className="mx-auto mb-4 h-16 w-16 overflow-hidden rounded-full border border-[#0918d0]/40 bg-[#0e1117]">
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="h-full w-full object-cover"
                />
              </div>
              <h4 className="text-[12px] uppercase tracking-[0.2em] text-white">
                {member.name}
              </h4>
              <p className="mt-3 text-[12px] text-zinc-500 leading-relaxed">
                {member.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
