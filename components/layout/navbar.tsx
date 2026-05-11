import { Container } from "./container";

export function Navbar() {
  return (
    <header className="w-full border-b border-white/10">
      <Container>
        <div className="flex items-center justify-between h-20">
          <h1 className="text-2xl font-bold">Folks</h1>

          <nav className="flex items-center gap-6">
            <a href="#">Home</a>
            <a href="#">Serviços</a>
            <a href="#">Sobre</a>
            <a href="#">Contato</a>
          </nav>
        </div>
      </Container>
    </header>
  );
}