import React from "react";
import About from "@/components/About";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Portofolio from "@/components/Portofolio";
import Footer from "@/components/Footer"; // Import Footer

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
      <Footer /> {/* Pastikan Footer di render terakhir */}
    </main>
  );
};

export default Page;
