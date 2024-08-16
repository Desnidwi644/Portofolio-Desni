import { PORTOFOLIO } from "@/constants";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Portofolio: React.FC = () => {
  return (
    <section className="max-container padding-container gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row bg-[#f7f7f7]">
      <div className="text-center bold-18 uppercase tracking-[1rem] text-blue-500 pb-20">
        Portofolio
      </div>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {PORTOFOLIO.map((portofolio, index) => (
          <PortofolioItem
            key={index}
            title={portofolio.title}
            imgURL={portofolio.imgURL}
            description={portofolio.description}
          />
        ))}
      </ul>
    </section>
  );
};

type PortofolioItemProps = {
  title: string;
  imgURL: string;
  description: string;
};

const PortofolioItem: React.FC<PortofolioItemProps> = ({
  title,
  imgURL,
  description,
}) => {
  return (
    <li className="relative flex w-full flex-1 flex-col rounded-2xl border overflow-hidden group">
      <div className="relative w-full h-[300px] overflow-hidden">
        <Image
          src={imgURL}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center p-4">
        <h3 className="text-white text-lg font-bold mb-2">{title}</h3>
        <p className="text-white text-sm">{description}</p>
        <Link
          href="#"
          className="mt-4 text-white underline"
          style={{
            marginTop: "1rem",
            color: "#fff",
            textDecoration: "underline",
          }}
        >
          More ↗
        </Link>
      </div>
    </li>
  );
};

export default Portofolio;
