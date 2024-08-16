import Link from "next/link";
import React from "react";
import Image from "next/image";

const NAV_LINKS = [
  { href: "#hero", key: "home", label: "Home" },
  { href: "#about", key: "about", label: "About" },
  { href: "#skills", key: "skills", label: "Skills" },
  { href: "#portofolio", key: "portofolio", label: "Portofolio" },
  { href: "#footer", key: "contact", label: "Contact" },
];

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-30 bg-white shadow-xl py-4">
      <div className="flexBetween max-container">
        <Link href="#hero" className="bold-28 capitalize relative">
          Des<span className="text-blue-700">ni</span>
          <span className="absolute top-[-0.3rem] right-[-1rem] h-5 w-5 linearGradient rounded-full -z-10"></span>
        </Link>
        <ul className="hidden h-full gap-6 lg:flex px-6 py-3">
          {NAV_LINKS.map((link) => (
            <li key={link.key}>
              <Link
                href={link.href}
                className="flexCenter text-[15px] font-[500] text-black 
                hover:bg-blue-500 hover:text-white px-4 py-1 rounded-full cursor-pointer transition-all duration-300"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="lg:flex items-center gap-4 hidden">
          <Link
            href="https://github.com/Desnidwi644"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src="/github.svg" alt="GitHub Logo" width={32} height={32} />
          </Link>
        </div>
        <Image
          src="/menu.svg"
          alt="menu"
          width={28}
          height={28}
          className="inline-block cursor-pointer lg:hidden"
        />
      </div>
    </nav>
  );
};

export default Navbar;
