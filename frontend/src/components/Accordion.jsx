/* eslint-disable react/prop-types */
import { HiChevronRight, HiChevronDown } from "react-icons/hi2";
import { useState } from "react";

function Accordion({ title, bold, children }) {
  const [isOpen, setIsopen] = useState(false);
  return (
    <div
      className={`w-full flex flex-col  
      `}
    >
      <div
        className="flex justify-between h-full w-full p-4 ripple"
        onClick={() => setIsopen(!isOpen)}
      >
        <span className={` ${bold && "font-bold"}`}>{title}</span>
        {isOpen ? <HiChevronDown /> : <HiChevronRight />}
      </div>

      {isOpen && <div className="ml-4">{children}</div>}
    </div>
  );
}

export default Accordion;
