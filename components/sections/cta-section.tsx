"use client";

import { Container } from "../layout/container";
import { motion } from "framer-motion";

export function CtaSection() {
  return (
    <section className="py-20 md:py-32" id="contato">
      <Container>
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="px-6 py-12 text-center md:px-10"
        >
          <p className="text-[12px] md:text-[13px] font-medium uppercase tracking-[0.32em] text-white/58">
            Vamos conversar
          </p>
          <h3 className="mt-6 text-[3.5rem] font-semibold leading-[1.05] tracking-[-0.05em] text-white md:text-[5rem] lg:text-[6rem]">
            Tem um projeto
            <br />
            em mente?
          </h3>
          <p className="mx-auto mt-8 max-w-2xl text-[16px] md:text-[18px] leading-8 text-white/60">
            Conte pra gente. A Folks está pronta para criar a solução perfeita
            para o seu negócio.
          </p>
          <div className="mt-12 flex flex-col items-center justify-center gap-6 sm:flex-row">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="rounded-full bg-white px-10 py-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#090b11] shadow-[0_0_40px_rgba(255,255,255,0.15)]"
            >
              Enviar email
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.06)" }}
              whileTap={{ scale: 0.95 }}
              className="rounded-full border border-white/12 bg-white/[0.03] px-10 py-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-white transition-colors duration-300 hover:border-white/20"
            >
              WhatsApp
            </motion.button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

