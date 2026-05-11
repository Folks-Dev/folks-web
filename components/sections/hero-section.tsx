import { Container } from "../layout/container";

export function HeroSection() {
  return (
    <section className="relative min-h-[85vh] flex flex-col justify-center overflow-hidden pt-24">
      <Container>
        <div className="flex flex-col items-center text-center">
          <div className="mb-10 border border-zinc-800 bg-zinc-900/40 rounded-full px-6 py-2 text-[10px] uppercase tracking-[0.4em] text-zinc-400">
            Tecnologia <span className="text-blue-500 mx-2">•</span> Design <span className="text-blue-500 mx-2">•</span> Inovação
          </div>

          <h1 className="text-6xl md:text-[5.5rem] font-bold tracking-tighter leading-[1.05] max-w-5xl uppercase">
            Suas ideias
            <br />
            <span className="text-blue-600 inline-flex items-center">
              Nossas ações
              <span className="ml-3 w-[4px] h-[0.9em] bg-blue-600 animate-cursor" />
            </span>
          </h1>

          <div className="flex items-center gap-5 mt-14">
            <button className="bg-blue-700 hover:bg-blue-600 transition-all px-10 py-4 rounded-full text-sm font-bold shadow-lg shadow-blue-900/20">
              Ver serviços
            </button>

            <button className="border border-zinc-800 bg-zinc-900/30 hover:bg-zinc-800 transition-all px-10 py-4 rounded-full text-sm font-bold">
              Fale com a gente
            </button>
          </div>
        </div>
      </Container>

      <div className="mt-auto w-full border-y border-white/5 py-8 bg-black/20 backdrop-blur-sm overflow-hidden flex whitespace-nowrap">
        <div className="flex animate-marquee shrink-0">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="flex items-center shrink-0 gap-20 px-10 text-zinc-500 font-semibold text-xs uppercase tracking-[0.2em]">
              <span className="flex items-center gap-3">
                <span className="text-blue-600 text-lg">✦</span> Exclusivos
              </span>
              <span className="flex items-center gap-3">
                <span className="text-blue-600 text-lg">✦</span> Automações
              </span>
              <span className="flex items-center gap-3">
                <span className="text-blue-600 text-lg">✦</span> Desenvolvimento
              </span>
              <span className="flex items-center gap-3">
                <span className="text-blue-600 text-lg">✦</span> Soluções Inteligentes
              </span>
              <span className="flex items-center gap-3">
                <span className="text-blue-600 text-lg">✦</span> Softwares
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute top-0 right-[-10%] w-[600px] h-[600px] bg-blue-600/10 blur-[150px] rounded-full -z-10" />
      <div className="absolute bottom-0 left-[-10%] w-[600px] h-[600px] bg-purple-600/5 blur-[150px] rounded-full -z-10" />
    </section>
  );
}