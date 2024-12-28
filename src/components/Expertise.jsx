import { Meteors } from "./Meteor";
import TechCard from "./SkillCard";
import { technologies } from "../constants/technologies";

function Expertise() {
  // Generate gridTemplateAreas dynamically based on the zig-zag pattern
  const gridTemplateAreas = technologies
    .map(
      (_, index) =>
        index % 2 === 0
          ? `"card${index + 1} ."` // Left-aligned card
          : `". card${index + 1}"` // Right-aligned card
    )
    .join("\n");

  return (
    <div className="rounded-b-[5rem] relative top-[5rem] mt-[-5rem] z-10 pb-[4rem] flex flex-col items-center justify-center min-h-fit overflow-hidden bg-gray-900">
      {/* Meteors */}
      <Meteors number={30} />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center space-y-8 mt-[3.5rem]">
        {/* Heading */}
        <h2 className="text-5xl font-bold text-white">My Tools</h2>

        {/* Grid Container */}
        <div
          className="grid grid-cols-2 gap-x-6 gap-y-4 auto-rows-max"
          style={{ gridTemplateAreas }}
        >
          {technologies.map((tech, index) => (
            <div
              key={tech.name}
              style={{ gridArea: `card${index + 1}` }}
              className="flex justify-center items-center"
            >
              <TechCard
                name={tech.name}
                level={tech.level}
                color={tech.color}
                category={tech.category}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Expertise;
