import logomarca from "../src/assets/logomarca-header.png";
import sitePosto from "../src/assets/bc-iargas.png";
import siteJoalheria from "../src/assets/bc-joalheria.png";
import siteCurso from "../src/assets/bc-medcurso.png";

import iconeLink from "../src/assets/svg/icone-link.svg";
import iconeEmail from "../src/assets/svg/icone-email.svg";
import iconePhone from "../src/assets/svg/icone-phone.svg";
import iconeInstagram from "../src/assets/svg/icone-instagram.svg";
import iconeWhatsapp from "../src/assets/svg/icone-whatsapp.svg";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./components/ui/accordion";

function App() {
  return (
    <>
      <header>
        <nav className="w-full h-16 flex items-center justify-around bg-[#0c1892]">
          <img
            src={logomarca}
            alt="Logomarca Brothers Company"
            className="w-[180px]"
          />

          <div className="flex gap-8 text-white font-bold">
            <a href="/" className="hover:text-[#c5ff00] transition-all">
              Home
            </a>
            <a href="#about" className="hover:text-[#c5ff00] transition-all">
              About Us
            </a>
            <a href="#" className="hover:text-[#c5ff00] transition-all">
              Projects
            </a>
            <a href="#contact" className="hover:text-[#c5ff00] transition-all">
              Contact
            </a>
          </div>
        </nav>
      </header>

      <main>
        <section className="w-full h-[400px] bg-black text-white flex items-center justify-around">
          <div className="w-[600px]">
            <h1 className="text-6xl font-black mb-2">
              <span className="text-[#c5ff00]">Brothers</span> Company
            </h1>
            <p className="text-slate-50/80 text-2xl">
              Transforme sua ideia em um site profissional
            </p>
          </div>

          <div className="flex gap-8 ">
            <a
              href="#"
              className="flex gap-2 text-2xl hover:text-[#c5ff00] transition-all"
            >
              Projects
              <img src={iconeLink} alt="Ícone Link" />
            </a>
            <a
              href="#"
              className="flex gap-2 text-2xl hover:text-[#c5ff00] transition-all"
            >
              Contact
              <img src={iconeLink} alt="Ícone Link" />
            </a>
          </div>
        </section>

        <section
          id="about"
          className="w-full h-[400px] bg-[#e6e6e6] text-black flex items-center justify-around"
        >
          <h2 className="text-5xl font-semibold">Sobre Nós</h2>
          <p style={{ textAlign: "justify" }} className="w-[420px]">
            Na Brothers Company, transformamos ideias em soluções digitais
            incríveis. Somos uma empresa especializada no desenvolvimento de
            sites e plataformas web que conectam marcas a seus públicos,
            impulsionam negócios e criam experiências únicas. Nosso time é
            formado por apaixonados por tecnologia e design, que trabalham
            juntos para entregar projetos personalizados, funcionais e
            otimizados. Desde sites institucionais até e-commerces, nossa missão
            é oferecer soluções que combinam estética, desempenho e inovação.
          </p>
        </section>

        <section className="w-full h-[400px] bg-black text-white flex items-center justify-around">
          <h2 className="text-5xl font-semibold">Soluções Sob Medida</h2>

          <Accordion type="single" collapsible className="w-[400px]">
            <AccordionItem value="item-1">
              <AccordionTrigger>SEO</AccordionTrigger>
              <AccordionContent>
                Mantemos um SEO consistente em todo o site para permanecer fiel
                à imagem da marca e dar aos visitantes uma amostra dos valores e
                da personalidade da empresa e do seu negócio.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Design</AccordionTrigger>
              <AccordionContent>
                Design Sob Medida: Cada site é criado pensando na identidade da
                sua marca, garantindo um visual único e atraente.
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
                Nossas soluções são rápidas, seguras e otimizadas para motores
                de busca (SEO), ajudando você a se destacar online.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>Suporte</AccordionTrigger>
              <AccordionContent>
                Acompanhamos cada etapa do seu projeto e oferecemos
                possibilidade de suporte contínuo, mesmo após a entrega.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        <section className="w-full h-[400px] bg-[#e6e6e6] text-black flex items-center justify-around">
          <h2 className="text-5xl font-semibold">Alguns Projetos</h2>
          <div className="flex flex-wrap gap-4 text-white">
            <div className="flex flex-col items-center gap-4 bg-black p-2 rounded-sm">
              <img src={sitePosto} alt="Imagem Posto" className="w-[200px]" />
              <p>Projeto Posto</p>
              <a
                href="https://www.grupoiargas.com.br/"
                className="bg-transparent text-sm text-center p-1 border-2 rounded-full w-36 hover:bg-white hover:text-black hover:border-white transition-all"
              >
                Ver Projeto
              </a>
            </div>
            <div className="flex flex-col items-center gap-4 bg-black p-2 rounded-sm">
              <img
                src={siteJoalheria}
                alt="Imagem Joalheria"
                className="w-[200px]"
              />
              <p>Projeto Joalheria</p>
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
                alt="Imagem Curso Medicina"
                className="w-[200px]"
              />
              <p>Projeto Curso</p>
              <a
                href="https://web-site-med.vercel.app/"
                className="bg-transparent text-sm text-center p-1 border-2 rounded-full w-36 hover:bg-white hover:text-black hover:border-white transition-all"
              >
                Ver Projeto
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer
        id="contact"
        className="w-full h-[300px] bg-black text-white flex flex-col items-center justify-center gap-20"
      >
        <div className="flex gap-20">
          <div className="flex flex-col items-center">
            <h3 className="text-2xl font-bold">Contate-nos:</h3>
            <div className="flex items-center gap-2">
              <p className="text-slate-50/80">brotherscompany@gmail.com</p>
              <img src={iconeEmail} alt="Ícone Email" />
            </div>
            <div className="flex items-center gap-2">
              <p className="text-slate-50/80">(74)98822-3322</p>
              <img src={iconePhone} alt="Ícone Telefone" />
            </div>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-2xl font-bold">Redes Sociais:</h3>
            <div className="flex items-center gap-2">
              <a
                href="https://www.instagram.com/bcwebcreators/"
                className="text-slate-50/80 cursor-pointer hover:text-white hover:underline"
              >
                Instagram
              </a>
              <img src={iconeInstagram} alt="Ícone Instagram" />
            </div>
            <div className="flex items-center gap-2">
              <a className="text-slate-50/80 cursor-pointer hover:text-white hover:underline">
                Whatsapp
              </a>
              <img src={iconeWhatsapp} alt="Ícone Whatsapp" />
            </div>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-2xl font-bold">Direitos:</h3>
            <p className="text-slate-50/80">Políticas de Privacidade</p>
            <p className="text-slate-50/80">Termos e Condições</p>
          </div>
        </div>
        <div>© 2024 Todos os direitos reservados.</div>
      </footer>
    </>
  );
}

export default App;
