import { useRef, useEffect, useState } from "react";
import clsx from "clsx";

export const Meteors = ({ number }) => {
  const containerRef = useRef(null);
  const [dimensions, setDimensions] = useState({ height: 0, width: 0 });

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const { offsetHeight, offsetWidth } = containerRef.current;
        setDimensions({ height: offsetHeight, width: offsetWidth });
      }
    };

    updateDimensions(); // Initial update

    const resizeObserver = new ResizeObserver(updateDimensions);
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    return () => resizeObserver.disconnect();
  }, []);

  const meteors = new Array(number || 20).fill(true);

  return (
    <div ref={containerRef} className="absolute top-0 left-0 w-full h-full">
      {meteors.map((_, idx) => (
        <span
          key={"meteor" + idx}
          className={clsx(
            "animate-meteor-effect absolute h-0.5 w-0.5 rounded-[9999px] bg-slate-500 shadow-[0_0_0_1px_#ffffff10] rotate-[215deg]",
            "before:content-[''] before:absolute before:top-1/2 before:transform before:-translate-y-[50%] before:w-[50px] before:h-[1px] before:bg-gradient-to-r before:from-[#64748b] before:to-transparent"
          )}
          style={{
            top: Math.floor(Math.random() * dimensions.height) + "px",
            left: Math.floor(Math.random() * (dimensions.width + 400) - 400) + "px",
            animationDelay: Math.random() * (0.8 - 0.2) + 0.2 + "s",
            animationDuration: Math.floor(Math.random() * (10 - 2) + 2) + "s",
          }}
        ></span>
      ))}
    </div>
  );
};
