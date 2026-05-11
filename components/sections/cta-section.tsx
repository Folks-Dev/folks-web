import { Container } from "../layout/container";

export function CtaSection() {
  return (
    <section className="py-12 md:py-20" id="contato">
      <Container>
        <div className="px-6 py-12 text-center md:px-10">
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
