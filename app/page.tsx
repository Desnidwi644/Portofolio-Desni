import React from "react";
import About from "@/components/About";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Portofolio from "@/components/Portofolio";

const Page = () => {
  return (
    <main className="pt-16">
      {/* Tambahkan padding-top untuk menghindari konten tersembunyi */}
      <section id="hero">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="portofolio">
        <Portofolio />
      </section>
    </main>
  );
};

export default Page;
