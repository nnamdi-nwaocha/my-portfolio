import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { workExperiences } from "../constants/workExperiences";

export default function WorkExperience() {
  const [expandedId, setExpandedId] = useState(null);

  return (
    <div className="min-h-fit rounded-b-[5rem] bg-[#f2f2f2] pb-16 pt-[9rem] px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-center text-[#111827] mb-12">
        Work Experience
      </h2>
      <div className="max-w-3xl mx-auto">
        {workExperiences.map((exp, index) => (
          <div
            key={exp.id}
            className={`mb-8 flex flex-col sm:flex-row ${
              index % 2 !== 0 ? "sm:flex-row-reverse" : ""
            }`}
            style={{
              opacity: 1,
              transform: `translateY(0px)`,
              transition: `opacity 0.5s ease, transform 0.5s ease`,
            }}
          >
            <div className="hidden sm:block sm:w-1/2" />
            <div className="sm:w-1/2 w-full relative">
              <div
                className="absolute top-5 w-3 h-3 rounded-full bg-[#111827] shadow-lg hidden sm:block"
                style={{
                  [index % 2 === 0 ? "left" : "right"]: "-6px",
                }}
              />
              <div
                className={`bg-white p-6 rounded-lg shadow-lg ${
                  index % 2 === 0 ? "sm:ml-4" : "sm:mr-4"
                }`}
              >
                <h3 className="text-xl font-semibold text-[#111827]">
                  {exp.company}
                </h3>
                <p className="text-gray-600">{exp.position}</p>
                <p className="text-sm text-gray-500 mb-2">{exp.period}</p>
                <a
                  className="btn bg-white text-gray-900 rounded-badge px-[2rem] border-1 hover:bg-gray-900 hover:text-white cursor-pointer"
                  onClick={() =>
                    setExpandedId(expandedId === exp.id ? null : exp.id)
                  }
                >
                  {expandedId === exp.id ? "Hide Details" : "Show Details"}
                  <ChevronDown
                    className={`ml-2 h-4 w-4 transition-transform ${
                      expandedId === exp.id ? "rotate-180" : ""
                    }`}
                  />
                </a>
                {expandedId === exp.id && (
                  <ul
                    className={`mt-4 text-sm text-gray-600 list-disc pl-5 transition-all duration-300 overflow-hidden`}
                    style={{
                      height: expandedId === exp.id ? "auto" : "0",
                      opacity: expandedId === exp.id ? "1" : "0",
                    }}
                  >
                    {exp.description.map((item, i) => (
                      <li key={i} className="mb-1">
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
