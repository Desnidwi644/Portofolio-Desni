"use client";

import React, { useState } from "react";
import Image from "next/image";
import Button from "./Button";

const About = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedSection, setSelectedSection] = useState<string | null>(null);

  const handleReadMore = () => {
    setIsExpanded(true);
    setSelectedSection(null);
  };

  const handleSectionClick = (section: string) => {
    setSelectedSection(section);
  };

  const handleClose = () => {
    setIsExpanded(false);
    setSelectedSection(null);
  };

  const renderSectionContent = () => {
    switch (selectedSection) {
      case "Education":
        return (
          <div className="mt-6 flex flex-col items-center">
            <Image
              src="/education.svg"
              alt="Education"
              width={600}
              height={400}
              className="rounded-lg shadow"
            />
          </div>
        );
      case "Organization":
        return (
          <div className="mt-6 flex flex-col items-center">
            <Image
              src="/organisasi.svg"
              alt="Organization"
              width={600}
              height={400}
              className="rounded-lg shadow"
            />
          </div>
        );
      case "Researches and Publications":
        return (
          <div className="mt-6 flex flex-col items-center">
            <Image
              src="/reseraches.svg"
              alt="Researches"
              width={600}
              height={400}
              className="rounded-lg shadow"
            />
          </div>
        );
      default:
        return null;
    }
  };

  const imgURL = "/image/about.png"; // Deklarasi imgURL
  const title = "About image"; // Deklarasi title

  return (
    <section className="max-container padding-container gap-20 py-10 pb-32 md:gap-28 lg:py-20 bg-[f7f7f7]">
      <div className="text-center bold-18 uppercase tracking-[1rem] text-blue-500 pb-20">
        About
      </div>
      <div className="flex flex-col gap-20 md:gap-28 xl:flex-row">
        <div className="flex-1 flexCenter flex-col m-auto">
          <p className="mb-8">
            <span className="font-extrabold">Hi everyone!👋</span> My name is Ni
            Made Desni Dwi Arisaputri, people call me Desni. I am an Informatics
            student at Udayana University and I was born, raised, and live in
            Bali. As a 4th semester Informatics Engineering student with the
            ability to master various languages C, JavaScript, HTML, CSS, PHP,
            and Python programming. Moreover, I have the ability to create or
            manage databases using MySQL and Tableau. Despite being busy as a
            student taking part in campus activities and campus organizations, I
            also hone my skills in the portfolio projects that I work on,
            whether they are campus projects or personal projects.
          </p>

          {!isExpanded ? (
            <Button
              type="button"
              title="Read More"
              icon="/more.svg"
              variant="btn_dark_rounded"
              onClick={handleReadMore}
            />
          ) : (
            <div className="flex flex-col items-center">
              <div className="flex gap-4 mt-6">
                <Button
                  type="button"
                  title="Education"
                  variant={
                    selectedSection === "Education"
                      ? "btn_light_box_active"
                      : "btn_light_box"
                  }
                  onClick={() => handleSectionClick("Education")}
                />
                <Button
                  type="button"
                  title="Organization"
                  variant={
                    selectedSection === "Organization"
                      ? "btn_light_box_active"
                      : "btn_light_box"
                  }
                  onClick={() => handleSectionClick("Organization")}
                />
                <Button
                  type="button"
                  title="Researches and Publications"
                  variant={
                    selectedSection === "Researches and Publications"
                      ? "btn_light_box_active"
                      : "btn_light_box"
                  }
                  onClick={() =>
                    handleSectionClick("Researches and Publications")
                  }
                />
              </div>
              {renderSectionContent()}
              <Button
                type="button"
                title="Close"
                variant="btn_dark_rounded"
                onClick={handleClose}
              />
            </div>
          )}
        </div>

        <div className="flex-1 flexCenter">
          <Image
            src="/foto.svg"
            alt="foto"
            height={333}
            width={333}
            className="w-auto rounded-full shadow"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
