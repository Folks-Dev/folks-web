import { Container } from "./container";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#050505] py-10">
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img src="/logo/folks.svg" alt="FOLKS" className="h-5 w-auto" />
          </div>
          <p className="text-[12px] text-zinc-500">
            Tecnologia, design e inovacao para negocios modernos.
          </p>
        </div>
      </Container>
    </footer>
  );
}
