import logomarca from "../assets/logomarca-header.png";
import menuIcon from "../assets/svg/menubar-icon.svg";

import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

export function Header() {
  return (
    <header>
      <nav className="w-full h-16 flex items-center justify-around bg-[#0c1892]">
        <img
          src={logomarca}
          alt="Logomarca Brothers Company"
          className="w-[150px] md:w-[180px]"
        />

        <div className="hidden md:flex gap-8 text-white font-bold">
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

        <div className="md:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <span className="bg-transparent hover:bg-transparent outline-none">
                <img src={menuIcon} alt="Ícone Menu" className="w-[30px]" />
              </span>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-[100px] py-4 bg-blue-700 border-none text-white flex justify-center">
              <DropdownMenuGroup className="font-black">
                <DropdownMenuItem className="text-lg focus:bg-transparent hover:scale-110 transition-all">
                  <a>Home</a>
                </DropdownMenuItem>
                <DropdownMenuItem className="text-lg focus:bg-transparent hover:scale-110 transition-all">
                  <a>About Us</a>
                </DropdownMenuItem>
                <DropdownMenuItem className="text-lg focus:bg-transparent hover:scale-110 transition-all">
                  <a>Projects</a>
                </DropdownMenuItem>
                <DropdownMenuItem className="text-lg focus:bg-transparent hover:scale-110 transition-all">
                  <a>Contact</a>
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </nav>
    </header>
  );
}
