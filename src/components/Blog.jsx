import React, { useState, useEffect } from "react";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import {
  IconDatabase,
  IconServer,
  IconLock,
  IconGraph,
} from "@tabler/icons-react";

export function BentoGridDemo() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768); // Adjust this value based on your screen size threshold
    };

    handleResize(); // Check screen size on initial load
    window.addEventListener("resize", handleResize); // Add resize event listener
    return () => window.removeEventListener("resize", handleResize); // Clean up event listener
  }, []);

  const filteredItems = isSmallScreen
    ? items.filter((item) => item.completed) // Filter only completed items on small screens
    : items; // Show all items on larger screens

  return (
    <div className="px-6 py-16">
      <h2 className="text-center text-5xl font-bold text-white mb-[3rem]">
        Articles
      </h2>

      <BentoGrid className="max-w-4xl mx-auto">
        {filteredItems.map((item, i) =>
          item.completed ? (
            <a
              key={i}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <BentoGridItem
                title={item.title}
                description={item.description}
                header={item.header}
                icon={item.icon}
                className={i === 3 || i === 6 ? "md:col-span-2" : ""}
              />
            </a>
          ) : (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              header={item.header}
              icon={item.icon}
              className={i === 3 || i === 6 ? "md:col-span-2" : ""}
            />
          )
        )}
      </BentoGrid>
    </div>
  );
}

const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);

const items = [
  {
    title: "Building a CRUD API With NestJS, PostgreSQL, and TypeORM",
    description: "Create a CRUD API using NestJS, PostgreSQL, and TypeORM.",
    header: (
      <img
        src="./images/post banners/nestjs crud.png"
        className="w-full h-full object-cover object-left"
      />
    ),
    icon: <IconServer className="h-4 w-4 text-neutral-500" />,
    completed: true,
    link: "https://medium.com/@nnamdinwaocha/building-a-crud-api-with-nestjs-postgresql-and-typeorm-2cde94538257",
  },
  {
    title: "Building a REST API with Deno, Oak, and DenoKV",
    description:
      "Learn how to create a REST API using Deno, Oak framework, and DenoKV.",
    header: <Skeleton />,
    icon: <IconDatabase className="h-4 w-4 text-neutral-500" />,
    completed: false,
    link: "",
  },
  {
    title: "Using Supabase with NestJS",
    description:
      "Implement authentication and CRUD operations with Supabase in NestJS.",
    header: <Skeleton />,
    icon: <IconDatabase className="h-4 w-4 text-neutral-500" />,
    completed: false,
    link: "",
  },
  {
    title: "GraphQL API in NestJS",
    description: "Build a GraphQL API in NestJS from scratch.",
    header: <Skeleton />,
    icon: <IconGraph className="h-4 w-4 text-neutral-500" />,
    completed: false,
    link: "",
  },
  {
    title: "How to Implement Access-Control with CASL and NestJS",
    description:
      "Secure your application by implementing access control using CASL and NestJS.",
    header: <Skeleton />,
    icon: <IconLock className="h-4 w-4 text-neutral-500" />,
    completed: false,
    link: "",
  },
];
