import iconeLink from "../assets/svg/icone-link.svg";

export function MainSection() {
  return (
    <section className="w-full h-[400px] md:h-[500px] bg-black text-white flex flex-col md:flex-row items-center justify-around">
      <div className="md:w-[600px]">
        <h1 className="text-6xl text-center font-black mb-2">
          <span className="text-[#c5ff00]">Brothers</span> Company
        </h1>
        <p className="text-slate-50/80 text-center md:text-2xl">
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
  );
}
