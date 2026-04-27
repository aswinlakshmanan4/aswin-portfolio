"use client";
import React from "react";
import dynamic from "next/dynamic";
import ExperienceTimeline from "@/app/components/_genricComponent/expDisplay";
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
        className="container mx-auto relative z-10 flex sm:flex-row flex-col gap-16 items-center"
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
<div className="max-w-4xl mx-auto mt-10 p-8 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 shadow-lg hover:border-indigo-500 transition-all duration-300">

  <p className="text-lg text-gray-300 leading-relaxed">
    Senior Software Engineer with 
    <span className="font-semibold text-white">6.6 years of experience</span> in designing, developing, and deploying scalable, high-performance web applications across technologies including 
    <span className="text-indigo-400">MEAN, MERN, Python, PHP, and WordPress</span>.
  </p>

  <p className="mt-4 text-gray-400 leading-relaxed">
    Highly proficient in 
    <span className="text-white font-medium">JavaScript</span> with a strong foundation in 
    <span className="text-indigo-400">software architecture, system design, and best practices</span>. 
    Experienced in building and consuming RESTful APIs and integrating third-party services.
  </p>

  <p className="mt-4 text-gray-400 leading-relaxed">
    Hands-on expertise in 
    <span className="text-indigo-400 font-medium">DevOps</span>, including 
    <span className="text-white">Azure DevOps CI/CD pipelines</span> and 
    <span className="text-white">production deployments using Termius (SSH)</span>.
  </p>

  <p className="mt-4 text-gray-400 leading-relaxed">
    Proven ability to 
    <span className="text-white font-medium">lead teams of 6 developers</span>, manage multiple projects, and ensure reliable production releases with minimal downtime.
  </p>

</div>
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
