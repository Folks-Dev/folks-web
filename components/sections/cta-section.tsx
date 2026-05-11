import { Container } from "../layout/container";

export function CtaSection() {
  return (
    <section className="py-24 bg-[#050505]" id="contato">
      <Container>
        <div className="rounded-[28px] border border-[#0918d0]/30 bg-gradient-to-br from-[#0b1247]/40 via-[#0a0a0a]/70 to-[#0b1247]/40 px-8 py-12 text-center">
          <p className="text-[12px] tracking-[0.4em] uppercase text-[#0918d0]">
            Vamos conversar
          </p>
          <h3 className="mt-4 text-3xl md:text-[2.2rem] font-semibold uppercase tracking-tight">
            Tem um projeto
            <br />
            em mente?
          </h3>
          <p className="mt-4 text-zinc-400 text-[14px] max-w-xl mx-auto">
            Conte pra gente. A FOLKS esta pronta para criar a solucao perfeita
            para o seu negocio.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="rounded-full bg-[#0918d0] px-8 py-3 text-[12px] uppercase tracking-[0.2em] text-white shadow-lg shadow-[#0918d0]/30 hover:bg-[#0d21ff] transition-colors">
              Enviar email
            </button>
            <button className="rounded-full border border-[#0918d0]/40 px-8 py-3 text-[12px] uppercase tracking-[0.2em] text-white hover:border-[#0918d0] transition-colors">
              Whatsapp
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}
