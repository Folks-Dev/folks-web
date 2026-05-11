import { Container } from "./container";

export function Navbar() {
  return (
    <header className="w-full">
      <Container>
        <div className="relative flex items-center justify-center h-24">
          <div className="absolute left-0 flex items-center gap-3">
            <img src="/logo/folks.svg" alt="FOLKS" className="h-6 w-auto" />
          </div>

          <nav className="hidden lg:flex items-center gap-8 text-[13px] tracking-[0.2em] text-zinc-200 uppercase">
            <a href="#inicio" className="hover:text-white transition-colors">
              Início
            </a>
            <a href="#servicos" className="hover:text-white transition-colors">
              Serviços
            </a>
            <a href="#projetos" className="hover:text-white transition-colors">
              Projetos
            </a>
            <a href="#processo" className="hover:text-white transition-colors">
              Processo
            </a>
            <a href="#equipe" className="hover:text-white transition-colors">
              Equipe
            </a>
            <a href="#contato" className="hover:text-white transition-colors">
              Contatos
            </a>
          </nav>
        </div>
      </Container>
    </header>
  );
}
