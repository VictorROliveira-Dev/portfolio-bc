import { useState } from "react";
import sitePosto from "../assets/bc-iargas.png";
import siteContabilidade from "../assets/bc-lucasContabilidade.png";
import siteCurso from "../assets/bc-medcurso.png";
import { useInView } from "react-intersection-observer";

export function ProjectsSection() {
  const { ref: projects, inView: projectsSectionVisible } = useInView();

  const [hasAnimatedTitle, setHasAnimatedTitle] = useState(false);
  const [hasAnimatedProjects, setHasAnimatedProjects] = useState(false);

  if (projectsSectionVisible && !hasAnimatedTitle) {
    setHasAnimatedTitle(true);
  }
  if (projectsSectionVisible && !hasAnimatedProjects) {
    setHasAnimatedProjects(true);
  }

  return (
    <section
      ref={projects}
      className="w-full h-[400px] bg-[#e6e6e6] text-black flex items-center justify-around gap-6"
    >
      {/* Animação do título */}
      <h2
        className={`text-5xl font-semibold transition-all duration-700 ${
          hasAnimatedTitle
            ? "translate-y-0 opacity-1"
            : "-translate-y-10 opacity-0"
        }`}
      >
        Alguns Projetos
      </h2>

      {/* Animação dos itens de projeto */}
      <div
        className={`flex flex-wrap gap-4 text-white transition-all duration-700 delay-300 ${
          hasAnimatedProjects
            ? "translate-x-0 opacity-1"
            : "-translate-x-10 opacity-0"
        }`}
      >
        <div className="flex flex-col items-center gap-4 bg-black p-2 rounded-sm">
          <img src={sitePosto} alt="Imagem Site Posto" className="w-[200px]" />
          <p>Projeto Posto Iargas</p>
          <a
            href="https://www.grupoiargas.com.br/"
            className="bg-transparent text-sm text-center p-1 border-2 rounded-full w-36 hover:bg-white hover:text-black hover:border-white transition-all"
          >
            Ver Projeto
          </a>
        </div>
        <div className="flex flex-col items-center gap-4 bg-black p-2 rounded-sm">
          <img
            src={siteContabilidade}
            alt="Imagem Site Contabilidade"
            className="w-[200px]"
          />
          <p>Projeto Site Contabilidade</p>
          <a
            href="https://joalheria-page.vercel.app/"
            className="bg-transparent text-sm text-center p-1 border-2 rounded-full w-36 hover:bg-white hover:text-black hover:border-white transition-all"
          >
            Ver Projeto
          </a>
        </div>
        <div className="flex flex-col items-center gap-4 bg-black p-2 rounded-sm">
          <img
            src={siteCurso}
            alt="Imagem Site Curso Medicina"
            className="w-[200px]"
          />
          <p>Projeto Curso Medicina</p>
          <a
            href="https://web-site-med.vercel.app/"
            className="bg-transparent text-sm text-center p-1 border-2 rounded-full w-36 hover:bg-white hover:text-black hover:border-white transition-all"
          >
            Ver Projeto
          </a>
        </div>
      </div>
    </section>
  );
}
