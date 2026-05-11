import { Container } from "../layout/container";

export function CtaSection() {
  return (
    <section className="py-24 md:py-32" id="contato">
      <Container>
        <div className="rounded-[2rem] border border-white/8 bg-[linear-gradient(180deg,rgba(12,15,24,0.5)_0%,rgba(8,10,16,0.38)_100%)] px-6 py-12 text-center shadow-[0_24px_80px_rgba(0,0,0,0.2)] backdrop-blur-[12px] md:px-10">
          {" "}
          <p className="text-[11px] font-medium uppercase tracking-[0.32em] text-white/58">
            Vamos conversar
          </p>
          <h3 className="mt-4 text-[2.1rem] font-semibold leading-[1.05] tracking-[-0.05em] text-white md:text-[2.8rem]">
            Tem um projeto
            <br />
            em mente?
          </h3>
          <p className="mx-auto mt-4 max-w-xl text-[14px] leading-7 text-white/60">
            Conte pra gente. A Folks está pronta para criar a solução perfeita
            para o seu negócio.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button className="rounded-full bg-white px-8 py-3 text-[12px] font-semibold uppercase tracking-[0.18em] text-[#090b11] transition-transform duration-300 hover:scale-[1.03]">
              Enviar email
            </button>
            <button className="rounded-full border border-white/12 bg-white/[0.03] px-8 py-3 text-[12px] font-semibold uppercase tracking-[0.18em] text-white transition-all duration-300 hover:scale-[1.03] hover:border-white/18">
              WhatsApp
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}
