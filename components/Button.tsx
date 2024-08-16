import Image from "next/image";
import React from "react";

type ButtonProps = {
  type?: "button" | "submit" | "reset";
  title: string;
  icon?: string;
  variant: string;
  onClick?: () => void;
  href?: string;
  style?: React.CSSProperties; // Tambahkan properti ini
};

const Button = ({
  type = "button",
  title,
  icon,
  variant,
  onClick,
  href,
  style,
}: ButtonProps) => {
  const commonClasses = `flex items-center justify-center gap-2 rounded-full border ${variant} text-sm py-2 px-4`;

  if (href) {
    return (
      <a
        href={href}
        className={commonClasses}
        target="_blank"
        rel="noopener noreferrer"
        style={style} // Terapkan style
      >
        <span className="font-medium whitespace-nowrap cursor-pointer">
          {title}
        </span>
        {icon && <Image src={icon} alt={title} width={16} height={16} />}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={commonClasses}
      onClick={onClick}
      style={style} // Terapkan style
    >
      <span className="font-medium whitespace-nowrap cursor-pointer">
        {title}
      </span>
      {icon && <Image src={icon} alt={title} width={16} height={16} />}
    </button>
  );
};

export default Button;
