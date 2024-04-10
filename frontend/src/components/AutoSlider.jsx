/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";

function AutoSlider({ children }) {
  const divRef = useRef(null);
  const [isScrollAtEnd, setIsScrollAtEnd] = useState(false);

  useEffect(() => {
    const scrollInterval = setInterval(() => {
      if (divRef.current) {
        if (
          divRef.current.scrollLeft ===
          divRef.current.scrollWidth - divRef.current.clientWidth
        ) {
          setIsScrollAtEnd(true);
        } else {
          setIsScrollAtEnd(false);
          divRef.current.scrollLeft += 200;
        }
      }
    }, 3000);

    return () => {
      clearInterval(scrollInterval);
    };
  }, [isScrollAtEnd]);

  useEffect(() => {
    if (isScrollAtEnd && divRef.current) {
      divRef.current.scrollLeft = 0;
    }
  }, [isScrollAtEnd]);
  return (
    <div
      ref={divRef}
      className="custom-scrollbar py-4 scroll flex gap-4 px-2 overflow-x-scroll scroll-smooth"
    >
      {children}
    </div>
  );
}

export default AutoSlider;
