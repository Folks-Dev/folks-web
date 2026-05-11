import { Globe, Laptop, Cpu, Settings } from "lucide-react";
import { Container } from "../layout/container";

const services = [
  {
    title: "Desenvolvimento de sites",
    description:
      "Sites institucionais, landing pages e portfólios com design sofisticado, performance otimizada e foco total na conversão do seu negócio.",
    icon: <Globe className="h-5 w-5 text-white" />,
  },
  {
    title: "Desenvolvimento de Software",
    description:
      "Sistemas web e aplicações sob medida para resolver problemas reais: dashboards, plataformas internas, APIs e muito mais.",
    icon: <Laptop className="h-5 w-5 text-white" />,
  },
  {
    title: "Agentes de IA",
    description:
      "Criamos agentes inteligentes que executam tarefas complexas, interagem com usuários e integram com as ferramentas que você já usa.",
    icon: <Cpu className="h-5 w-5 text-white" />,
  },
  {
    title: "Automações",
    description:
      "Eliminamos tarefas repetitivas do seu fluxo de trabalho com automações inteligentes que economizam tempo e reduzem erros humanos.",
    icon: <Settings className="h-5 w-5 text-white" />,
  },
];

export function ServicesSection() {
  return (
    <section className="relative py-28 md:py-36" id="servicos">
      <Container>
        <div className="rounded-[2rem] border border-[var(--border)] bg-[rgba(10,12,18,0.82)] px-6 py-10 backdrop-blur-sm md:px-10 md:py-14">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:gap-14">
            <div className="space-y-6">
              <p className="text-[11px] font-medium uppercase tracking-[0.32em] text-white/58">
                Soluções
              </p>
              <h2 className="max-w-[380px] text-[2.35rem] font-semibold leading-[1.05] tracking-[-0.05em] text-white md:text-[3.2rem]">
                Soluções tech
                <br />
                do início ao fim.
              </h2>
              <p className="max-w-[392px] text-[14px] leading-7 text-white/62">
                Da ideia ao deploy - construimos produtos digitais que funcionam
                de verdade, com tecnologia de ponta e atenção a cada detalhe do
                seu negócio.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="min-h-[184px] rounded-[1.5rem] border border-white/7 bg-[rgba(10,12,18,0.34)] px-5 py-5 shadow-[0_20px_60px_rgba(0,0,0,0.18)] backdrop-blur-[10px] transition-all duration-300 hover:-translate-y-1 hover:border-white/14 hover:bg-[rgba(255,255,255,0.04)]"
                >
                  <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-[0.95rem] border border-white/10 bg-black/20">
                    {service.icon}
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-[13px] font-semibold tracking-[0.02em] text-white">
                      {service.title}
                    </h3>
                    <p className="text-[13px] leading-6 text-white/58">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
