"use client";

import { Container } from "../layout/container";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

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
    title: "Criação",
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
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="space-y-4 text-center"
          >
            <p className="text-[12px] md:text-[13px] font-medium uppercase tracking-[0.32em] text-white/58">
              Como trabalhamos
            </p>
            <h3 className="text-[3rem] font-semibold leading-[1.05] tracking-[-0.05em] text-white md:text-[4rem]">
              Do briefing ao resultado,
              <br />
              sem surpresas.
            </h3>
            <p className="mx-auto max-w-3xl text-[16px] md:text-[18px] leading-8 text-white/60">
              Um processo claro e alinhado para garantir que cada etapa entregue
              valor real ao seu negócio.
            </p>
          </motion.div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-5"
          >
            {steps.map((step, index) => (
              <motion.div
                variants={itemVariants}
                whileHover={{ y: -5 }}
                key={step.title}
                className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] px-6 py-8 text-center transition-colors duration-300 hover:border-white/20 hover:bg-white/[0.06]"
              >
                <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-full border border-white/12 text-[14px] font-semibold text-white/86 bg-black/20">
                  {index + 1}
                </div>
                <h4 className="text-[14px] md:text-[15px] font-semibold uppercase tracking-[0.14em] text-white">
                  {step.title}
                </h4>
                <p className="mt-4 text-[14px] md:text-[15px] leading-7 text-white/54">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
