"use client";
import Image from "next/image";
import React from "react";
import { Typewriter } from "react-simple-typewriter";
import Button from "./Button";
import { HERO } from "../constants"; // Import the HERO constant

const Hero = () => {
  return (
    <section
      className="max-container padding-container flex flex-col flexCenter gap-20 py-10 pb-32
  md:gap-28 lg:py-20 lg:flex-row"
    >
      <span
        className="max-container absolute top-64 left-44 h-[144px] w-[777px] bg-blue-400
    rounded-full shadow-lg blur-[7rem] -z-10"
      ></span>
      {/* LEFT */}
      <div className="relative z-20 flex flex-1 flex-col pt-16">
        <h4 className="bold-20"> Hello👋,</h4>
        <h1 className="bold-48 lg:bold-64 relative">I'm Ni Made Desni</h1>
        <h1 className="bold-48 lg:bold-64 relative">Dwi Arisaputri</h1>
        <h2 className="bold-28 lg:bold-32 text-[1.8rem] capitalize">
          A{" "}
          <span>
            <Typewriter
              words={[
                "Student",
                "Front-end developer",
                "Machine learning Engineer",
                "Data analyst",
              ]}
              loop={true}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </h2>
        <p className="regular-16 max-w-[555px] my-4">
          'Student majoring in informatics, Udayana University&#39;
        </p>

        <div className="my-5 flex flex-wrap gap-5">
          <div className="flex items-center gap-2">
            {Array(4)
              .fill(1)
              .map((_, index) => (
                <Image
                  src="/star.svg"
                  key={index}
                  alt="star"
                  height={24}
                  width={24}
                />
              ))}
          </div>
          <p className="bold-18 lg:bold-20">
            {" "}
            10 <span className="regular-16 lg:regular-20">Reviews</span>
          </p>
        </div>
        <div className="flexstart gap-1 pt-6">
          <div className="flexstart gap-1 pt-6">
            <Button
              title="Download CV"
              icon="/download.svg"
              variant="btn_dark_rounded"
              href="https://drive.google.com/uc?export=download&id=1hjKo361U1lqeT1UMI7zpy4o1ZRUer5l1"
              style={{
                padding: "0.5rem 1rem",
                fontSize: "0.875rem",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            />
          </div>
        </div>
      </div>
      {/* RIGHT */}

      <div className="flex flex-1 xl:flexEnd">
        {/* Background Image from HERO constant */}
        <Image
          src={HERO[0].imgURL}
          alt={HERO[0].title}
          height={480}
          width={480}
          className="w-auto"
        />
      </div>
    </section>
  );
};

export default Hero;
