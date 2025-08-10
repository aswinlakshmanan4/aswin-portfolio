import React, { JSX } from "react";

export default function ProjectsResume(): JSX.Element {
  const projects = [
    {
      title: "Tire Planet",
      role: "Senior Developer",
      team: 6,
      tech: ["ReactJS", "Azure DevOps"],
      description:
        "A B2C web application enabling end-users to track order details and access comprehensive product and brand information. The platform supports multiple user roles and includes dedicated interfaces for retailers and distributors, ensuring seamless coordination and data management across the supply chain.",
      highlights: [
        "Led a cross-functional team of 6 to deliver project milestones on time",
        "Implemented multi-role access with secure authentication",
        "Integrated retailer and distributor portals for supply chain efficiency",
      ],
    },
    {
      title: "Instream Dashboard",
      role: "Software Engineer",
      team: 1,
      tech: ["React", "Node", "Express", "PostgreSQL"],
      description:
        "A dashboard providing publisher revenue insights with filters for month-wise and date-wise data. Displays structured revenue charts for better analysis, helping businesses track trends and make informed, data-driven decisions.",
      highlights: [
        "Designed and developed dynamic data visualization charts",
        "Optimized queries for fast revenue data retrieval",
        "Implemented advanced filtering for flexible data analysis",
      ],
    },
    {
      title: "Kolibri Studio",
      role: "Software Engineer",
      team: 1,
      tech: ["Vue.js", "Python", "MySQL"],
      description:
        "An accessible content creation platform for visually impaired users, allowing them to create channels and add interactive content such as quizzes, audio, videos, and embedded YouTube/Vimeo links. Designed to enhance inclusivity and make content creation more accessible.",
      highlights: [
        "Enhanced platform accessibility for visually impaired users",
        "Added support for interactive multimedia content",
        "Streamlined content creation workflow with user-friendly UI",
      ],
    },
    {
      title: "Kolibri Desktop Tool",
      role: "Software Engineer",
      team: 1,
      tech: ["Vue.js", "Python", "MySQL"],
      description:
        "A desktop-based learning tool for visually impaired users to access educational content, including quizzes, audio, videos, and interactive resources. Enhances digital education accessibility and user engagement.",
      highlights: [
        "Built offline-capable desktop learning application",
        "Optimized UI for screen reader compatibility",
        "Integrated multimedia educational resources",
      ],
    },
    {
      title: "Instream Ad Widget",
      role: "Software Engineer",
      team: 1,
      tech: ["AngularJS"],
      description:
        "An ad integration solution featuring a customizable slider. Clients can specify which slide their ad should appear on, allowing for strategic placement and improved user engagement.",
      highlights: [
        "Developed configurable ad slider component",
        "Enabled targeted ad placement per client requirements",
        "Improved ad engagement through strategic display options",
      ],
    },
  ];
  return (
    <section>
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold mb-6">Professional Experience</h2>

        <div className="grid gap-6">
          {projects.map((p) => (
            <article
              key={p.title}
              className=" rounded-2xl p-3 sm:p-6 shadow-sm border border-yellow-100 transform hover:-translate-y-2 hover:shadow-around hover:shadow-yellow-400 hover:scale-[1.02] transition-transform transition-shadow duration-300 ease-out"
            >
              <div className="md:flex md:justify-between md:items-start h-full">
                <div className="flex-1 sm:w-3/4 text-justify">
                  <div>
                    <h3 className="text-xl font-semibold">{p.title}</h3>

                    <div className="mt-2 text-sm ">
                      <span className="font-medium">Role:</span> {p.role}{" "}
                      &nbsp;•&nbsp;
                      <span className="font-medium">Team Size:</span> {p.team}{" "}
                      &nbsp;•&nbsp;
                      <span className="font-medium">Tech:</span>{" "}
                      {p.tech.join(", ")}
                    </div>

                    <p className="mt-4 leading-relaxed">
                      {p.description}
                    </p>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs font-medium bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full border border-indigo-100"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-4 md:mt-0 md:ml-6 flex-shrink-0 sm:h-full sm:w-1/4">
                  <div className="bg-yellow-400 rounded-lg p-3 text-sm text-gray-700 h-full">
                    <div className="font-medium mb-2">Highlights</div>
                    <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                      {p.highlights.map((h, i) => (
                        <li key={i}>{h}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
