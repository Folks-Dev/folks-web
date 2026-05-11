import { Container } from "./container";

const links = [
  { href: "#home", label: "Home" },
  { href: "#servicos", label: "Serviços" },
  { href: "#projetos", label: "Projetos" },
  { href: "#processo", label: "Processo" },
  { href: "#equipe", label: "Equipe" },
  { href: "#contato", label: "Contatos" },
];

export function Navbar() {
  return (
    <header className="absolute inset-x-0 top-0 z-30 w-full">
      <Container>
        <div className="relative flex h-24 items-center justify-center">
          <div className="absolute left-0 flex items-center gap-3">
            <img src="/logo/folks.svg" alt="FOLKS" className="h-6 w-auto" />
          </div>

          <nav className="hidden items-center gap-5 lg:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="group inline-flex origin-center items-center justify-center overflow-hidden rounded-full border border-transparent px-4 py-1.5 text-[10px] font-medium uppercase tracking-[0.28em] text-white/72 transition-all duration-300 hover:scale-110 hover:border-white/10 hover:bg-white/[0.04] hover:text-white"
              >
                <span className="relative">
                  {link.label}
                  <span className="absolute inset-x-0 -bottom-1 h-px origin-center scale-x-0 bg-white transition-transform duration-300 group-hover:scale-x-100" />
                </span>
              </a>
            ))}
          </nav>
        </div>
      </Container>
    </header>
  );
}
