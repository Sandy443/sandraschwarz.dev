import React from "react";

const items = [
  { id: 2, label: "Tech Stack", href: "#techstack" },
  { id: 3, label: "Experience", href: "#experience" },
  { id: 4, label: "Projects", href: "#projects" },
];

const Header: React.FC<{ className?: string }> = ({ className = "" }) => {
  const renderMenuItems = () =>
    items.map((item) => (
      <li
      key={item.id}
      className="hover:opacity-60 relative text-text border-b-0 hover:border-b-0 ease-in hover:transition-transform"
    >
      <span className="relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-secondary after:w-0 after:transition-all after:duration-300 after:ease-in hover:after:w-full">
        <a href={item.href}>{item.label}</a>
      </span>
    </li>
    
    ));

  return (
    <header className={`invisible md:visible flex justify-between items-center p-4 text-black text-2xl mt-5 h-[6vh] ${className}`}>
      <div>Sandra Schwarz</div>
      <ul className="hidden md:flex gap-4">{renderMenuItems()}</ul>
    </header>
  );
};

export default Header;