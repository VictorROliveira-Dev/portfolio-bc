import logomarca from "../assets/logomarca-header.png";

export function Header() {
  return (
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
  );
}
