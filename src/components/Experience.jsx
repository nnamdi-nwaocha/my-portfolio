import TechCard from "./techCard";

function Experience() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-8 mt-[3.5rem]">
      {/* Heading */}
      <h2 className="text-5xl font-bold">My Expertise</h2>

      {/* Grid Container */}
      <div
        className="grid grid-cols-2 gap-x-6 gap-y-4 auto-rows-max"
        style={{
          gridTemplateAreas: `
            "card1 ."
            ". card2"
            "card3 ."
            ". card4"
            "card5 ."
            ". card6"
            "card7 ."
            ". card8"
            "card9 ."
          `,
        }}
      >
        <div
          style={{ gridArea: "card1" }}
          className="flex justify-center items-center"
        >
          <TechCard
            name={"JavaScript"}
            level={80}
            color={"#ffd600"}
            category={"Language"}
          />
        </div>
        <div
          style={{ gridArea: "card2" }}
          className="flex justify-center items-center"
        >
          <TechCard
            name={"TypeScript"}
            level={80}
            color={"#2aa4f4"}
            category={"Language SuperSet"}
          />
        </div>
        <div
          style={{ gridArea: "card3" }}
          className="flex justify-center items-center"
        >
          <TechCard
            name={"NodeJS"}
            level={80}
            color={"#388e3c"}
            category={"Framework"}
          />
        </div>
        <div
          style={{ gridArea: "card4" }}
          className="flex justify-center items-center"
        >
          <TechCard
            name={"ExpressJS"}
            level={80}
            color={"white"}
            category={"Framework"}
          />
        </div>
        <div
          style={{ gridArea: "card5" }}
          className="flex justify-center items-center"
        >
          <TechCard
            name={"NestJS"}
            level={80}
            color={"#ea2845"}
            category={"Framework"}
          />
        </div>
        <div
          style={{ gridArea: "card6" }}
          className="flex justify-center items-center"
        >
          <TechCard
            name={"PostgreSQL"}
            level={80}
            color={"#0277bd"}
            category={"Database"}
          />
        </div>
        <div
          style={{ gridArea: "card7" }}
          className="flex justify-center items-center"
        >
          <TechCard
            name={"MongoDB"}
            level={60}
            color={"#13aa52"}
            category={"Database"}
          />
        </div>
        <div
          style={{ gridArea: "card8" }}
          className="flex justify-center items-center"
        >
          <TechCard
            name={"HTML"}
            level={80}
            color={"#E44D26"}
            category={"Markup"}
          />
        </div>
        <div
          style={{ gridArea: "card9" }}
          className="flex justify-center items-center"
        >
          <TechCard
            name={"CSS"}
            level={70}
            color={"#1572b6"}
            category={"Styling"}
          />
        </div>
      </div>
    </div>
  );
}

export default Experience;
