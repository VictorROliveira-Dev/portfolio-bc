import iconeLink from "../assets/svg/icone-link.svg";

export function MainSection() {
  return (
    <section className="w-full h-[500px] bg-black text-white flex items-center justify-around">
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
  );
}
