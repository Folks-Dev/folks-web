"use client";

import { Globe, Laptop, Cpu, Settings } from "lucide-react";
import { Container } from "../layout/container";
import { motion, Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

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
    <section className="relative py-12 md:py-20" id="servicos">
      <Container>
        <div className="px-6 py-10 md:px-10 md:py-14">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:gap-14">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="space-y-6"
            >
              <p className="text-[12px] md:text-[13px] font-medium uppercase tracking-[0.32em] text-white/58">
                Soluções
              </p>
              <h2 className="max-w-[500px] text-[3rem] font-semibold leading-[1.05] tracking-[-0.05em] text-white md:text-[4rem] lg:text-[4.5rem]">
                Soluções tech
                <br />
                do início ao fim.
              </h2>
              <p className="max-w-[480px] text-[16px] md:text-[18px] leading-8 text-white/62">
                Da ideia ao deploy - construimos produtos digitais que funcionam
                de verdade, com tecnologia de ponta e atenção a cada detalhe do
                seu negócio.
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 gap-6 md:grid-cols-2"
            >
              {services.map((service) => (
                <motion.div
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  key={service.title}
                  className="min-h-[200px] rounded-[1.5rem] border border-white/10 bg-white/[0.03] px-6 py-6 shadow-[0_20px_60px_rgba(0,0,0,0.18)] backdrop-blur-[10px] transition-colors duration-300 hover:border-white/20 hover:bg-white/[0.06]"
                >
                  <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-[0.95rem] border border-white/10 bg-black/20">
                    {service.icon}
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-[16px] md:text-[18px] font-semibold tracking-[0.02em] text-white">
                      {service.title}
                    </h3>
                    <p className="text-[14px] leading-7 text-white/58">
                      {service.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
