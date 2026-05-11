import { Globe, Laptop, Cpu, Settings } from "lucide-react";
import { Container } from "../layout/container";

const services = [
  {
    title: "DESENVOLVIMENTO DE SITES",
    description:
      "Sites institucionais, landing pages e portfólios com design sofisticado, performance otimizada e foco total na conversão do seu negócio.",
    icon: <Globe className="w-5 h-5 text-white" />,
  },
  {
    title: "DESENVOLVIMENTO DE SOFTWARE",
    description:
      "Sistemas web e aplicações sob medida para resolver problemas reais: dashboards, plataformas internas, APIs e muito mais.",
    icon: <Laptop className="w-5 h-5 text-white" />,
  },
  {
    title: "AGENTES DE IA",
    description:
      "Criamos agentes inteligentes que executam tarefas complexas, interagem com usuários e integram com as ferramentas que você já usa.",
    icon: <Cpu className="w-5 h-5 text-white" />,
  },
  {
    title: "AUTOMAÇÕES",
    description:
      "Eliminamos tarefas repetitivas do seu fluxo de trabalho com automações inteligentes que economizam tempo e reduzem erros humanos.",
    icon: <Settings className="w-5 h-5 text-white" />,
  },
];

export function ServicesSection() {
  return (
    <section className="py-32 relative bg-[#050505]" id="servicos">
      <div className="absolute -top-10 left-[-120px] w-[420px] h-[620px] bg-[#0918d0]/10 blur-[140px] rounded-full -z-10" />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-20 items-center">
          <div className="space-y-6">
            <p className="text-[12px] tracking-[0.4em] uppercase text-zinc-500">
              Soluções
            </p>
            <h2 className="text-4xl md:text-[2.6rem] font-semibold tracking-tight leading-[1.1] uppercase text-white">
              Soluções tech
              <br />
              do início ao fim.
            </h2>
            <p className="text-zinc-400 text-[14px] leading-relaxed max-w-[340px]">
              Da ideia ao deploy, construímos produtos digitais com tecnologia
              de ponta e atenção total ao seu negócio.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative p-6 rounded-2xl border border-[#0918d0]/20 bg-[#0a0a0a]/80 backdrop-blur-sm hover:border-[#0918d0]/60 transition-all duration-300 flex flex-col gap-4 min-h-[180px] justify-center"
              >
                <div className="w-10 h-10 rounded-lg border border-white/10 bg-[#050505] flex items-center justify-center group-hover:border-[#0918d0]/60 transition-colors">
                  {service.icon}
                </div>

                <div className="space-y-2">
                  <h3 className="font-semibold text-[12px] tracking-[0.12em] uppercase text-zinc-100">
                    {service.title}
                  </h3>
                  <p className="text-zinc-500 text-[12px] leading-snug">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
