import { useInView } from "react-intersection-observer";
import { useState } from "react";

export function AboutSection() {
  const { ref: about, inView: aboutSectionVisible } = useInView();
  const [hasAnimatedTitle, setHasAnimatedTitle] = useState(false);
  const [hasAnimatedText, setHasAnimatedText] = useState(false);

  // Atualizar estados separadamente para título e texto
  if (aboutSectionVisible && !hasAnimatedTitle) {
    setHasAnimatedTitle(true);
  }
  if (aboutSectionVisible && !hasAnimatedText) {
    setHasAnimatedText(true);
  }

  return (
    <section
      ref={about}
      id="about"
      className="w-full h-[400px] bg-[#e6e6e6] text-black flex  items-center justify-around gap-4"
    >
      <h2
        className={`text-5xl font-semibold transition-all duration-700 ${
          hasAnimatedTitle
            ? "translate-y-0 opacity-1"
            : "-translate-y-10 opacity-0"
        }`}
      >
        Sobre Nós
      </h2>
      <p
        style={{ textAlign: "justify" }}
        className={`w-[420px] transition-all duration-700 delay-300 ${
          hasAnimatedText
            ? "translate-x-0 opacity-1"
            : "-translate-x-10 opacity-0"
        }`}
      >
        Na Brothers Company, transformamos ideias em soluções digitais
        incríveis. Somos uma empresa especializada no desenvolvimento de sites e
        plataformas web que conectam marcas a seus públicos, impulsionam
        negócios e criam experiências únicas. Nosso time é formado por
        apaixonados por tecnologia e design, que trabalham juntos para entregar
        projetos personalizados, funcionais e otimizados. Desde sites
        institucionais até e-commerces, nossa missão é oferecer soluções que
        combinam estética, desempenho e inovação.
      </p>
    </section>
  );
}
