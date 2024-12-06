import { Meteors } from "./Meteor";
import TechCard from "./TechCard";

function Experience() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden bg-gray-900">
      {/* Meteors */}
      <Meteors number={30} />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center space-y-8 mt-[3.5rem]">
        {/* Heading */}
        <h2 className="text-5xl font-bold text-white">My Expertise</h2>

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
            ". card10"
            "card11 ."
            ". card12"
          `,
          }}
        >
          <div
            style={{ gridArea: "card1" }}
            className="flex justify-center items-center"
          >
            <TechCard
              name={"JavaScript"}
              level={82}
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
              level={89}
              color={"#2aa4f4"}
              category={"SuperSet"}
            />
          </div>
          <div
            style={{ gridArea: "card3" }}
            className="flex justify-center items-center"
          >
            <TechCard
              name={"NodeJS"}
              level={84}
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
              level={82}
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
              level={85}
              color={"#ea2845"}
              category={"Framework"}
            />
          </div>
          <div
            style={{ gridArea: "card6" }}
            className="flex justify-center items-center"
          >
            <TechCard
              name={"Postgres"}
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
              level={63}
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
              level={89}
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
              level={71}
              color={"#1572b6"}
              category={"Styling"}
            />
          </div>
          <div
            style={{ gridArea: "card10" }}
            className="flex justify-center items-center"
          >
            <TechCard
              name={"React"}
              level={67}
              color={"#61dafb"}
              category={"Framework"}
            />
          </div>
          <div
            style={{ gridArea: "card11" }}
            className="flex justify-center items-center"
          >
            <TechCard
              name={"Tailwind"}
              level={66}
              color={"#38bdf8"}
              category={"Styling"}
            />
          </div>
          <div
            style={{ gridArea: "card12" }}
            className="flex justify-center items-center"
          >
            <TechCard
              name={"NextJS"}
              level={54}
              color={"white"}
              category={"Framework"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
