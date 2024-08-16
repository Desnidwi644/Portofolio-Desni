import { SKILLS } from "@/constants";
import Image from "next/image";

const Skills = () => {
  return (
    <section className="max-container padding-container py-10 pb-32 md:py-20 lg:py-32">
      {/* title */}
      <div className="text-center bold-18 uppercase tracking-[1rem] text-blue-500 pb-20">
        Skills
      </div>
      <ul className="flex flex-wrap gap-10 justify-center">
        {SKILLS.map((skill) => (
          <SkillItem
            key={skill.title}
            icon={skill.icon}
            title={skill.title}
            description={skill.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Skills;

type SkillItemProps = {
  title: string;
  icon: string;
  description: string;
};

const SkillItem = ({ title, icon, description }: SkillItemProps) => {
  return (
    <li className="relative flex flex-col items-center text-center shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] rounded-2xl p-10 hover:bg-blue-500 group duration-[1200ms] transition w-1/3 md:w-1/3 lg:w-1/4">
      <div className="relative rounded-full p-4 bg-blue-500 -top-8 group-hover:bg-black">
        <Image src={icon} alt={title} width={40} height={40} />
      </div>
      <div className="pt-12">
        <h3 className="bold-20 lg:bold-22 mt-6 capitalize group-hover:text-white">
          {title}
        </h3>
        <p className="regular-16 text-gray-30 mt-4 group-hover:text-white">
          {description}
        </p>
      </div>
    </li>
  );
};
