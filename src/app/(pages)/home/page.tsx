"use client";
import React from "react";
import dynamic from "next/dynamic";
import ExperienceTimeline from "@/app/components/_genricComponent/sliderDisplay";
import { EXPERIENCE } from "@/app/constants/constants";
import Technologies from "./technologies";
import ProjectsResume from "./projects";
import Achievements from "./achievements";

const ImageCube = dynamic(
  () => import("../../components/_genricComponent/ImageCube"),
  { ssr: false }
);

const Home = () => {
  return (
    <main className="relative w-full min-h-screen overflow-hidden">
      {/* Background Cube */}

      <ImageCube />
      <section
        className="container mx-10 relative z-10 flex sm:flex-row flex-col gap-16 items-center"
      >
        <div className="bg-dark">
          <span className="text-[4rem] leading-tight font-bold font-poppins">
            Aswin Lakshmanan
          </span>
          <hr className="w-[15%] border-yellow-400 border-2 rounded-2xl"></hr>
        </div>
        <div>
          <section className="px-6 py-16 text-white">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-sm uppercase tracking-widest text-yellow-400 mb-2">
                — Introduction
              </h2>
              <h1 className="text-3xl sm:text-4xl font-bold mb-4">
                Product Designer and Full-Stack Developer
              </h1>
              <p className="text-slate-300 text-lg leading-relaxed max-w-3xl text-justify">
                I am a full-stack web developer with over five years of experience designing, developing, and maintaining high-quality web applications across a wide range of technologies, including MEAN, MERN, Python, PHP, and WordPress. I am highly proficient in JavaScript and have a solid understanding of software architecture, development principles, and best practices. My expertise extends to building and consuming RESTful web services, integrating third-party APIs, and delivering secure, efficient solutions.
              </p>
            </div>
          </section>
        </div>
      </section>
      <section className="mx-auto relative mb-12 bg-[#262633] sm:p-10 p-4">
        <ExperienceTimeline content={EXPERIENCE} title="Experience" />
      </section>
      <section className="relative">
        <h1 className="text-3xl font-bold mb-12 text-center">Technologies</h1>
        <Technologies />
      </section>
      <section className="sm:p-10 relative bg-[#262633]">
        <h1 className="text-3xl font-bold mb-12 text-center">Projects</h1>
          <ProjectsResume />
      </section>
      <section className="relative bg-[#262633]">
          <Achievements />
      </section>
      <section className="sm:p-10 relative bg-[#262633]">
        <h1 className="text-3xl font-bold mb-12 text-center">Resume</h1>
        <div className="flex justify-center">
          <a
            href="/path/to/your/resume.pdf"
            className="bg-yellow-400 text-dark py-2 px-4 rounded-lg"
            download
          >
            Download Resume
          </a>
        </div>
      </section>
    </main>
  );
}
export default Home;
