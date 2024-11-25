import { useInView } from "react-intersection-observer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";
import { useState } from "react";

export function SolutionsSection() {
  const { ref: solutions, inView: solutionsSectionVisible } = useInView();

  // Estados para animar o título e o acordeão
  const [hasAnimatedTitle, setHasAnimatedTitle] = useState(false);
  const [hasAnimatedAccordion, setHasAnimatedAccordion] = useState(false);

  if (solutionsSectionVisible && !hasAnimatedTitle) {
    setHasAnimatedTitle(true);
  }
  if (solutionsSectionVisible && !hasAnimatedAccordion) {
    setHasAnimatedAccordion(true);
  }

  return (
    <section
      ref={solutions}
      className="w-full md:h-[400px] bg-black text-white flex flex-col md:flex-row items-center justify-around gap-6 p-10 md:p-0"
    >
      <h2
        className={`text-5xl text-center font-semibold transition-all duration-300 ${
          hasAnimatedTitle
            ? "translate-y-0 opacity-1"
            : "-translate-y-10 opacity-0"
        }`}
      >
        Soluções Sob Medida
      </h2>
      <Accordion
        type="single"
        collapsible
        className={`w-[300px] md:w-[400px] transition-all duration-700 delay-300 ${
          hasAnimatedAccordion
            ? "translate-x-0 opacity-1"
            : "-translate-x-10 opacity-0"
        }`}
      >
        <AccordionItem value="item-1">
          <AccordionTrigger>SEO</AccordionTrigger>
          <AccordionContent>
            Mantemos um SEO consistente em todo o site para permanecer fiel à
            imagem da marca e dar aos visitantes uma amostra dos valores e da
            personalidade da empresa e do seu negócio.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Design</AccordionTrigger>
          <AccordionContent>
            Design Sob Medida: Cada site é criado pensando na identidade da sua
            marca, garantindo um visual único e atraente.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Responsividade</AccordionTrigger>
          <AccordionContent>
            Desenvolvemos sites que funcionam perfeitamente em qualquer
            dispositivo, do desktop ao smartphone.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>Performance</AccordionTrigger>
          <AccordionContent>
            Nossas soluções são rápidas, seguras e otimizadas para motores de
            busca (SEO), ajudando você a se destacar online.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger>Suporte</AccordionTrigger>
          <AccordionContent>
            Acompanhamos cada etapa do seu projeto e oferecemos possibilidade de
            suporte contínuo, mesmo após a entrega.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
}
