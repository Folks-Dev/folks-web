"use client";

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
  hidden: { opacity: 0, scale: 0.9 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

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
    <section className="py-12 md:py-20" id="equipe">
      <Container>
        <div className="px-6 py-10 md:px-10 md:py-14">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="space-y-4 text-center"
          >
            <p className="text-[12px] md:text-[13px] font-medium uppercase tracking-[0.32em] text-white/58">
              Nós
            </p>
            <h3 className="text-[3rem] font-semibold leading-[1.05] tracking-[-0.05em] text-white md:text-[4rem]">
              As pessoas por trás da Folks.
            </h3>
            <p className="mx-auto max-w-2xl text-[16px] md:text-[18px] leading-8 text-white/60">
              Três pessoas, um propósito: criar tecnologia que faz diferença.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3"
          >
            {team.map((member, index) => (
              <motion.div
                variants={itemVariants}
                whileHover={{ y: -5 }}
                key={`${member.name}-${index}`}
                className="rounded-[1.6rem] border border-white/10 bg-white/[0.03] p-8 text-center shadow-[0_20px_60px_rgba(0,0,0,0.16)] backdrop-blur-[10px] transition-colors duration-300 hover:border-white/20 hover:bg-white/[0.06]"
              >
                <div className="mx-auto mb-6 h-28 w-28 overflow-hidden rounded-full border border-white/12 bg-[#0e1117]">
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <h4 className="text-[14px] md:text-[15px] font-semibold uppercase tracking-[0.18em] text-white">
                  {member.name}
                </h4>
                <p className="mt-4 text-[14px] md:text-[15px] leading-7 text-white/54">
                  {member.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
