import iconeEmail from "../assets/svg/icone-email.svg";
import iconePhone from "../assets/svg/icone-phone.svg";
import iconeInstagram from "../assets/svg/icone-instagram.svg";
import iconeWhatsapp from "../assets/svg/icone-whatsapp.svg";
import { useInView } from "react-intersection-observer";
import { useState } from "react";

export function Footer() {
  const { ref: footer, inView: footerSectionVisible } = useInView();
  const [hasAnimatedTitle, setHasAnimatedTitle] = useState(false);
  const [hasAnimatedContent, setHasAnimatedContent] = useState(false);

  if (footerSectionVisible && !hasAnimatedTitle) {
    setHasAnimatedTitle(true);
  }
  if (footerSectionVisible && !hasAnimatedContent) {
    setHasAnimatedContent(true);
  }

  return (
    <footer
      ref={footer}
      id="contact"
      className="w-full md:h-[300px] bg-black text-white flex flex-col items-center justify-center gap-20 p-10 md:p-0"
    >
      <div
        className={`flex flex-col md:flex-row gap-20 transition-all duration-700 delay-200 ${
          hasAnimatedTitle
            ? "translate-y-0 opacity-1"
            : "-translate-y-10 opacity-0"
        }`}
      >
        {/* Contato */}
        <div className="flex flex-col items-center">
          <h3 className="text-2xl font-bold">Contate-nos:</h3>
          <div
            className={`flex items-center gap-2 transition-all duration-700 delay-300 ${
              hasAnimatedContent
                ? "translate-x-0 opacity-1"
                : "-translate-x-10 opacity-0"
            }`}
          >
            <p className="text-slate-50/80">brotherscompany@gmail.com</p>
            <img src={iconeEmail} alt="Ícone Email" />
          </div>
          <div
            className={`flex items-center gap-2 transition-all duration-700 delay-400 ${
              hasAnimatedContent
                ? "translate-x-0 opacity-1"
                : "-translate-x-10 opacity-0"
            }`}
          >
            <p className="text-slate-50/80">(74)99804-6026</p>
            <img src={iconePhone} alt="Ícone Telefone" />
          </div>
        </div>

        {/* Redes Sociais */}
        <div className="flex flex-col items-center">
          <h3 className="text-2xl font-bold">Redes Sociais:</h3>
          <div
            className={`flex items-center gap-2 transition-all duration-700 delay-300 ${
              hasAnimatedContent
                ? "translate-x-0 opacity-1"
                : "-translate-x-10 opacity-0"
            }`}
          >
            <a
              href="https://www.instagram.com/bcwebcreators/"
              className="text-slate-50/80 cursor-pointer hover:text-white hover:underline"
            >
              Instagram
            </a>
            <img src={iconeInstagram} alt="Ícone Instagram" />
          </div>
          <div
            className={`flex items-center gap-2 transition-all duration-700 delay-400 ${
              hasAnimatedContent
                ? "translate-x-0 opacity-1"
                : "-translate-x-10 opacity-0"
            }`}
          >
            <a className="text-slate-50/80 cursor-pointer hover:text-white hover:underline">
              Whatsapp
            </a>
            <img src={iconeWhatsapp} alt="Ícone Whatsapp" />
          </div>
        </div>

        {/* Direitos */}
        <div className="flex flex-col items-center">
          <h3 className="text-2xl font-bold">Direitos:</h3>
          <p
            className={`text-slate-50/80 transition-all duration-700 delay-300 ${
              hasAnimatedContent
                ? "translate-x-0 opacity-1"
                : "-translate-x-10 opacity-0"
            }`}
          >
            Políticas de Privacidade
          </p>
          <p
            className={`text-slate-50/80 transition-all duration-700 delay-400 ${
              hasAnimatedContent
                ? "translate-x-0 opacity-1"
                : "-translate-x-10 opacity-0"
            }`}
          >
            Termos e Condições
          </p>
        </div>
      </div>

      {/* Direitos Reservados */}
      <div
        className={`transition-all duration-700 delay-500 ${
          hasAnimatedContent
            ? "translate-y-0 opacity-1"
            : "translate-y-10 opacity-0"
        }`}
      >
        © 2024 Todos os direitos reservados.
      </div>
    </footer>
  );
}
