import { FOOTER_LINKS, SOCIALS } from "@/constants";
import Link from "next/link";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer
      id="footer"
      className="max-container padding-container bg-green-90 bg-pattern bg-cover bg-center bg-no-repeat px-6 pt-24 pb-8 text-white"
    >
      <div className="flex flex-col gap-14 md:flex-row justify-between pb-16">
        <div className="flex-1 md:w-2/3">
          <ul className="flex flex-col gap-2 md:flex-row md:gap-6">
            {FOOTER_LINKS.map((link) => (
              <li key={link.key}>
                <Link
                  href={link.href}
                  className="block p-4 text-[15px] font-[500] hover:text-blue-500"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-8 p-4 border border-gray-30 rounded-md">
            <h3 className="text-lg font-bold mb-2">Description</h3>
            <p>
              Thank you for viewing my portfolio. For further information, you
              can download my CV and see my contact details next to it for
              further information.
            </p>
          </div>
        </div>
        <div className="md:w-1/3 flex flex-col items-end">
          <div className="mb-8 p-4 border border-gray-30 rounded-md flex items-center gap-2">
            <Image
              src="lokasi.svg"
              alt="Location Icon"
              width={20}
              height={20}
              className="invert-[100]"
            />
            <p>Abiansemal, Badung, Bali</p>
          </div>
          <ul className="flex gap-6">
            {SOCIALS.map((social) => (
              <li
                key={social.key}
                className="w-24 h-24 border border-gray-20 flex items-center justify-center rounded-md hover:bg-blue-500 hover:border-blue-500 transition-all"
              >
                <Link
                  href={social.href}
                  className="w-full h-full flex items-center justify-center"
                >
                  <Image
                    src={social.imgURL}
                    alt={social.key}
                    width={32}
                    height={32}
                    className="invert-[100]"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <hr className="border-none outline-none h-[0.01rem] bg-gray-20 my-8" />

      <div className="text-center">Ni Made Desni Dwi Arisaputri</div>
    </footer>
  );
};

export default Footer;
