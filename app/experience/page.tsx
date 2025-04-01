import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { FiMapPin,  FiBriefcase, FiBook } from "react-icons/fi";

export default function ExperiencePage() {
  const data = [
    {
      title: "2017 Feb-2021 Dec",
      content: (
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-white">
            <FiBook className="w-5 h-5 text-blue-400" />
            <div>
              <h3 className="text-lg font-semibold">Bachelor of Science</h3>
              <div className="flex items-center gap-2 text-neutral-400 text-sm mt-1">
                <FiMapPin className="w-4 h-4" />
                <span>Durban, KZN</span>
              </div>
            </div>
          </div>

          <div className="pl-7">
            <p className="text-neutral-300 text-sm leading-relaxed">
              Graduated with BSc in Applied mathematics. Developed strong
              problem-solving skills and technical expertise through
              comprehensive coursework.
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "Oct 2024 - Sept 2025",
      content: (
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-white">
            <FiBriefcase className="w-5 h-5 text-blue-400" />
            <div>
              <h3 className="text-lg font-semibold">Fullstack Software internship</h3>
              <div className="flex items-center gap-2 text-neutral-400 text-sm mt-1">
                <span className="font-medium">Shaper</span>
                <span>•</span>
                <span>Full Time</span>
              </div>
            </div>
          </div>

          <div className="pl-7">
            <div className="space-y-3 text-sm text-neutral-300">
              <p className="leading-relaxed">
                Full-stack development internship focusing on building scalable web
                applications using tools such as Angular, Spring Boot, NodeJs, Postgresql, Html, CSS, Javascript, React, NextJs.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">▹</span>
                  <span>
                    Developed backend services using Spring Boot and Node.js
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">▹</span>
                  <span>Built responsive frontend with Next.js, React and Angular</span>
                </li>
                {/* <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">▹</span>
                  <span>Managed AWS EC2 and Google Cloud infrastructure</span>
                </li> */}
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">▹</span>
                  <span>Implemented CI/CD pipelines with GitHub Actions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">▹</span>
                  <span>Deployed Angular and Spring Boot application using Docker file</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2022  Oct- 2023 Dec",
      content: (
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-white">
            <div className="w-5 h-5 text-blue-400" />
            <h3 className="text-lg font-semibold">  Software Development Learnership</h3>
            <div className="flex items-center gap-2 text-neutral-400 text-sm mt-1">
                <span className="font-medium">WeThinkCode</span>
                <span>•</span>
                <span>Full Time</span>
              </div>
          </div>

          <div className="pl-7">
            <div className="space-y-3 text-sm text-neutral-300">
              <p className="leading-relaxed">
                Software development learnership focusing on building robust
                applications using tools such as Python, Java, MySQL, Html, CSS, Javascript.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">▹</span>
                  <span>
                    Developed backend services using Java and python
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">▹</span>
                  <span>Used frontend technologies like html, css and javascript to build web application</span>
                </li>
                {/* <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">▹</span>
                  <span>Managed AWS EC2 and Google Cloud infrastructure</span>
                </li> */}
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">▹</span>
                  <span>Implemented CI/CD pipelines with GitLab Actions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">▹</span>
                  <span>Specialized on Quality Assurance testing</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full ">
      <Timeline data={data} />
    </div>
  );
}
