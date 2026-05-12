"use client";

import { useForm, ValidationError } from "@formspree/react";
import { motion } from "framer-motion";

import { Container } from "../layout/container";

export function CtaSection() {
  const [state, handleSubmit] = useForm("mwvyyzry");
  const whatsappHref =
    "https://wa.me/5511975232132?text=Ol%C3%A1!%20Gostaria%20de%20conversar%20sobre%20um%20projeto%20com%20a%20Folks.";

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
          <p className="text-[12px] font-medium uppercase tracking-[0.32em] text-white/58 md:text-[13px]">
            Vamos conversar
          </p>
          <h3 className="mt-6 text-[3.5rem] font-semibold leading-[1.05] tracking-[-0.05em] text-white md:text-[5rem] lg:text-[6rem]">
            Tem um projeto
            <br />
            em mente?
          </h3>
          <p className="mx-auto mt-8 max-w-2xl text-[16px] leading-8 text-white/60 md:text-[18px]">
            Conte pra gente. A Folks está pronta para criar a solução perfeita
            para o seu negócio.
          </p>

          <form
            onSubmit={handleSubmit}
            className="mx-auto mt-12 max-w-4xl rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 text-left shadow-[0_24px_80px_rgba(0,0,0,0.28)] backdrop-blur-[14px] md:p-8"
          >
            <input
              type="hidden"
              name="_subject"
              value="Novo contato enviado pelo site da Folks"
            />

            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.22em] text-white/55"
                >
                  Nome
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  placeholder="Como você se chama?"
                  className="h-14 w-full rounded-2xl border border-white/12 bg-black/20 px-5 text-[15px] text-white outline-none transition-colors placeholder:text-white/28 focus:border-white/30"
                />
                <ValidationError
                  prefix="Nome"
                  field="name"
                  errors={state.errors}
                  className="mt-2 text-sm text-[#ffb4b4]"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.22em] text-white/55"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  placeholder="você@empresa.com"
                  className="h-14 w-full rounded-2xl border border-white/12 bg-black/20 px-5 text-[15px] text-white outline-none transition-colors placeholder:text-white/28 focus:border-white/30"
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                  className="mt-2 text-sm text-[#ffb4b4]"
                />
              </div>
            </div>

            <div className="mt-5">
              <label
                htmlFor="message"
                className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.22em] text-white/55"
              >
                Projeto
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                required
                placeholder="Me conte o que você está construindo, o prazo e como a Folks pode ajudar."
                className="w-full rounded-[1.6rem] border border-white/12 bg-black/20 px-5 py-4 text-[15px] text-white outline-none transition-colors placeholder:text-white/28 focus:border-white/30"
              />
              <ValidationError
                prefix="Mensagem"
                field="message"
                errors={state.errors}
                className="mt-2 text-sm text-[#ffb4b4]"
              />
            </div>

            <ValidationError
              errors={state.errors}
              className="mt-4 text-sm text-[#ffb4b4]"
            />

            {state.succeeded ? (
              <p className="mt-5 rounded-2xl border border-emerald-400/20 bg-emerald-400/10 px-4 py-3 text-sm text-emerald-200">
                Mensagem enviada com sucesso. A gente responde em breve.
              </p>
            ) : null}

            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <motion.button
                type="submit"
                disabled={state.submitting}
                whileHover={{ scale: state.submitting ? 1 : 1.05 }}
                whileTap={{ scale: state.submitting ? 1 : 0.95 }}
                className="inline-flex min-w-[220px] justify-center rounded-full bg-white px-10 py-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#090b11] shadow-[0_0_40px_rgba(255,255,255,0.15)] disabled:cursor-not-allowed disabled:opacity-70"
              >
                {state.submitting ? "Enviando..." : "Enviar email"}
              </motion.button>

              <motion.a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "rgba(255,255,255,0.06)",
                }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex min-w-[220px] justify-center rounded-full border border-white/12 bg-white/[0.03] px-10 py-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-white transition-colors duration-300 hover:border-white/20"
              >
                WhatsApp
              </motion.a>
            </div>
          </form>
        </motion.div>
      </Container>
    </section>
  );
}
