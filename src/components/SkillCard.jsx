import React, { useEffect, useState, useRef } from "react";
import CountUp from "react-countup";

function TechCard({ name, level, category, color }) {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Disconnect observer after triggering
        }
      },
      { threshold: 0.01 } // Trigger when 10% of the component is visible
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) observer.disconnect();
    };
  }, []);

  return (
    <div ref={cardRef} className="stats shadow">
      <div className="stat">
        <div className="stat-figure">
          <img
            src={`./images/technologies/${name}.svg`}
            height={50}
            width={50}
            alt=""
          />
        </div>
        <div className="stat-title">{name}</div>
        <div className="stat-value" style={{ color }}>
          {isVisible ? <CountUp start={0} end={level} duration={3} /> : 0}%
        </div>
        <div className="stat-desc">{category}</div>
      </div>
    </div>
  );
}

export default TechCard;
