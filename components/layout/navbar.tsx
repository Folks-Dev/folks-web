import { Container } from "./container";

export function Navbar() {
  return (
    <header className="w-full"> {/* Removida a borda */}
      <Container>
        <div className="relative flex items-center justify-center h-24">
          <h1 className="absolute left-0 text-2xl font-bold tracking-tighter flex items-center gap-1">
            {/* Se tiver o logo em SVG, substitua aqui */}
            <span className="text-blue-500"></span> folks<span className="text-blue-600">.</span>
          </h1>

          <nav className="hidden md:flex items-center gap-10 text-sm font-light text-zinc-400">
            {["Início", "Serviços", "Projetos", "Processo", "Equipe", "Contatos"].map((item) => (
              <a key={item} href="#" className="hover:text-white transition-colors uppercase tracking-tight">
                {item}
              </a>
            ))}
          </nav>
        </div>
      </Container>
    </header>
  );
}