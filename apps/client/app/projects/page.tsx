"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { fetchProjects } from "../api/project"; // Assuming you have this path to your API functions
import Project from "../../types/Project"; // Adjust the import path as necessary
import { ArrowDownCircle } from "lucide-react"; // Arrow at bottom

interface SimplifiedProject {
  title: string;
  year: string;
  description: string;
  images: string[];
  titleImage: string;
  link: string;
  github: string;
  video: string;
  technologies: string[];
}

const projectsList :SimplifiedProject[] = [
  {
      title: 'Personal Portfolio Website',
      year: '2025',
      description:
          'A sleek and modern portfolio site built with Next.js, Tailwind CSS, and hosted on Vercel.',
      images: [
          'https://hadeeqa-portfolio.s3.eu-north-1.amazonaws.com/date-md/Screenshot+2025-04-25+at+6.45.40%E2%80%AFpm.png',
          'https://hadeeqa-portfolio.s3.eu-north-1.amazonaws.com/date-md/Screenshot+2025-04-25+at+6.45.32%E2%80%AFpm.png',
          'https://hadeeqa-portfolio.s3.eu-north-1.amazonaws.com/date-md/Screenshot+2025-04-25+at+6.45.01%E2%80%AFpm.png',
      ],
      titleImage: "https://hadeeqa-portfolio.s3.eu-north-1.amazonaws.com/project_placeholder.jpg",
      link: 'https://myportfolio.com',
      github: 'https://github.com/myusername/portfolio',
      video: '/videos/portfolio-demo.mp4',
      technologies: ['REACT', 'NODE', 'EXPRESS', 'TAILWIND', 'VERCEL', 'MONGODB', 'GITHUB', 'GIT'],
  },
  {
      title: 'Jarvis CRM',
      year: '2024',
      description:
          'I worked on Jarvis, a suite of four integrated applications, including a CRM and supporting tools, designed to enhance accountability and streamline internal workflows. Jarvis facilitated the entire client journey—from business proposal and onboarding to contract signing and progress tracking.',
      images: [
        'https://hadeeqa-portfolio.s3.eu-north-1.amazonaws.com/Jarvis/Simulator+Screenshot+-+iPhone+15+Pro+-+2025-04-28+at+17.57.58.png',
        'https://hadeeqa-portfolio.s3.eu-north-1.amazonaws.com/Jarvis/Simulator+Screenshot+-+iPhone+15+Pro+-+2025-04-28+at+17.58.08.png',
        'https://hadeeqa-portfolio.s3.eu-north-1.amazonaws.com/Jarvis/Simulator+Screenshot+-+iPhone+15+Pro+-+2025-04-28+at+18.10.39.png',
        'https://hadeeqa-portfolio.s3.eu-north-1.amazonaws.com/Jarvis/Simulator+Screenshot+-+iPhone+15+Pro+-+2025-04-28+at+18.11.04.png',
        'https://hadeeqa-portfolio.s3.eu-north-1.amazonaws.com/Jarvis/Simulator+Screenshot+-+iPhone+15+Pro+-+2025-04-28+at+18.11.13.png',
        'https://hadeeqa-portfolio.s3.eu-north-1.amazonaws.com/Jarvis/Simulator+Screenshot+-+iPhone+15+Pro+-+2025-04-28+at+18.11.23.png',
        'https://hadeeqa-portfolio.s3.eu-north-1.amazonaws.com/Jarvis/Simulator+Screenshot+-+iPhone+15+Pro+-+2025-04-28+at+18.11.32.png',
        'https://hadeeqa-portfolio.s3.eu-north-1.amazonaws.com/Jarvis/Simulator+Screenshot+-+iPhone+15+Pro+-+2025-04-28+at+18.11.44.png',
        'https://hadeeqa-portfolio.s3.eu-north-1.amazonaws.com/Jarvis/Simulator+Screenshot+-+iPhone+15+Pro+-+2025-04-28+at+18.11.56.png',
        'https://hadeeqa-portfolio.s3.eu-north-1.amazonaws.com/Jarvis/Simulator+Screenshot+-+iPhone+15+Pro+-+2025-04-28+at+18.12.04.png',
        'https://hadeeqa-portfolio.s3.eu-north-1.amazonaws.com/Jarvis/Simulator+Screenshot+-+iPhone+15+Pro+-+2025-04-28+at+18.12.18.png'
      ],
      titleImage: "https://hadeeqa-portfolio.s3.eu-north-1.amazonaws.com/Jarvis/ic_jarvis.png",
      link: '',
      github: 'https://github.com/myusername/ecommerce',
      video: 'https://hadeeqa-portfolio.s3.eu-north-1.amazonaws.com/Jarvis/Screen+Recording+2025-04-28+at+6.00.14%E2%80%AFpm.mov',
      technologies: ['REACTNATIVE', 'CODEMAGIC', 'REVOPUSH', 'REDUX', 'FIREBASE', 'GITHUB', 'GIT'],
  },
  {
      title: 'Fit by Charro',
      year: '2025',
      titleImage: "https://hadeeqa-portfolio.s3.eu-north-1.amazonaws.com/project_placeholder.jpg",
      description:
          'I worked on a web app for a fitness coach to enhance the experience for her subscribers. The app allows users to track their fitness progress, submit updates, and communicate directly with the trainer. This solution has helped improve user engagement and business growth.',
      images: ['/projects/portfolio1.png'],
      link: 'https://myblog.com',
      github: 'https://github.com/myusername/blog',
      video: '/videos/blog-demo.mp4',
      technologies: ['REACT', 'MONGODB', 'NODE', 'EXPRESS'],
  },
  {
      title: 'DateMD',
      year: '2024',
      titleImage: "https://hadeeqa-portfolio.s3.eu-north-1.amazonaws.com/project_placeholder.jpg",
      description:
          'A block augmented hospital management system that allows users to book appointments with doctors, manage their health records, and receive reminders for upcoming appointments.',
      images: [
          'https://hadeeqa-portfolio.s3.eu-north-1.amazonaws.com/date-md/Screenshot+2025-04-25+at+6.45.40%E2%80%AFpm.png',
          'https://hadeeqa-portfolio.s3.eu-north-1.amazonaws.com/date-md/Screenshot+2025-04-25+at+6.45.32%E2%80%AFpm.png',
          'https://hadeeqa-portfolio.s3.eu-north-1.amazonaws.com/date-md/Screenshot+2025-04-25+at+6.45.01%E2%80%AFpm.png',
      ],
      link: 'https://myblog.com',
      github: 'https://github.com/myusername/blog',
      video: 'https://hadeeqa-portfolio.s3.eu-north-1.amazonaws.com/project-demos/date_md_demo.mp4',
      technologies: ['REACT', 'MONGODB', 'NODE', 'EXPRESS'],
  },
];

interface GroupedProjects {
  [year: string]: Project[]; // Group projects by year
}

const ProjectsPage = () => {
  const projects = projectsList.reduce<Record<string, SimplifiedProject[]>>((acc, project) => {
    if (!acc[project.year]) acc[project.year] = [];
    acc[project.year].push(project);
    return acc;
  }, {});

  return (
    <main className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-12">Projects</h1>

      <div className="relative border-l border-zinc-300 dark:border-zinc-700 space-y-12">
  {Object.entries(projects)
    .sort(([a], [b]) => Number(b) - Number(a)) // Descending year order
    .map(([year, yearProjects]) => (
      <div key={year} className="relative pl-8 space-y-8">
        {/* Timeline Dot and Year Label */}
        <div className="absolute left-[-6px] top-1.5 w-3 h-3 bg-blue-400 rounded-full ring-2 ring-white dark:ring-zinc-900" />
        <span className="text-sm text-zinc-500 dark:text-zinc-400">
          {year}
        </span>

        {yearProjects.map((project, index) => (
          <div
            key={index}
            className="p-4 rounded-xl shadow-md bg-white dark:bg-zinc-900 transition hover:shadow-lg"
          >
            <div className="flex flex-col md:flex-row gap-4 items-center ">
              <div className="w-[200px] h-[150px] flex-shrink-0 relative">
                <Image
                  src={project.titleImage}
                  alt={project.title}
                  fill
                  className="rounded-lg object-contain shadow-sm border bg-[#CCCCCC]"
                />
              </div>
              <div>
                <h2 className="text-xl font-semibold">{project.title}</h2>
                <p className="text-sm text-zinc-600 dark:text-zinc-300 mb-2">
                  {project.description}
                </p>
                <div className="flex-col gap-2">
                  <div>
                    <Link
                      href={`/projects/${project.title.toLowerCase().replace(/\s+/g, "-")}`}
                      className="text-blue-400 hover:underline text-sm"
                    >
                      View Details
                    </Link>
                  </div>
                  {project.github && (
                    <Link
                      href={project.github}
                      className="text-blue-400 hover:underline text-sm"
                    >
                      Visit Github Repo
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    ))}
</div>

      <div className="flex justify-center mt-16">
        <Link href="/education">
          <ArrowDownCircle
            size={48}
            className="text-blue-600 hover:text-blue-700 animate-bounce"
          />
        </Link>
      </div>
    </main>
  );
};

export default ProjectsPage;
