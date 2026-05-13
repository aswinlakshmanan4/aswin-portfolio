export interface Experience {
  company: string;
  role: string;
  duration: string;
  description: string;
}

export const EXPERIENCE: Experience[] = [
  {
    company: "Alferix",
    role: "Senior Software Engineer",
    duration: "Oct 2024 — Present",
    description:
      "Leading delivery across multiple client projects, mentoring junior engineers, and contributing to internal platform and tooling work.",
  },
  {
    company: "Kenpath Technologies",
    role: "Software Engineer",
    duration: "Feb 2022 — Sep 2024",
    description:
      "Sole engineer on several client projects — owned architecture through release, and guided junior developers along the way.",
  },
  {
    company: "App Innovation Technologies",
    role: "Backend Developer",
    duration: "Apr 2021 — Jan 2022",
    description:
      "Independently built and maintained full-stack web applications, owning backend services through to front-end integration.",
  },
  {
    company: "CoindSyz Software Solutions",
    role: "Developer and Trainer",
    duration: "Aug 2020 — Apr 2021",
    description:
      "Single-handedly built and maintained WordPress sites for clients, and ran training sessions on the stack.",
  },
  {
    company: "CSIR",
    role: "Junior Developer",
    duration: "Jun 2019 — Jul 2020",
    description:
      "Independently contributed to research-oriented prototypes and internal software tools.",
  },
];