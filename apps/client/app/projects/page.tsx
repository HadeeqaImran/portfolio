"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { fetchProjects } from "../api/project"; // Assuming you have this path to your API functions
import Project from "../../types/Project"; // Adjust the import path as necessary
import { ArrowDownCircle } from "lucide-react"; // Arrow at bottom
import { Projects} from "../api/projects";
import { Technologies } from "@/app/api/technologies";

interface GroupedProjects {
  [year: string]: Project[]; // Group projects by year
}

const ProjectsPage = () => {
  const [projects, setProjects] = useState<GroupedProjects>({});
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch projects from the API using the defined fetchProjects function
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data: Project[] = Projects;
        const groupedProjects = data.reduce(
          (acc: Record<string, Project[]>, project) => {
            acc[project.year] = acc[project.year] || [];
            acc[project.year].push(project);
            return acc;
          },
          {} as Record<string, Project[]>,
        );
        setProjects(groupedProjects);
      } catch (err) {
        setError("Failed to load projects");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div className="text-center py-10">Loading projects...</div>;
  }

  if (error) {
    return <div className="text-center py-10 text-red-500">{error}</div>;
  }

  return (
    <main className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-12">Projects</h1>

      <div className="relative border-l border-zinc-300 dark:border-zinc-700 space-y-12">
        {Object.entries(projects)
          .sort(([a], [b]) => Number(b) - Number(a)) // Descending year order
          .map(([year, yearProjects]) => (
            <div key={year} className="relative pl-8 space-y-8 w-full">
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
                <div className="flex flex-col md:flex-row gap-4 items-center relative">
                  {/* Image */}
                  <div className="w-[200px] h-[150px] flex-shrink-0 relative">
                    <Image
                      src={project.titleImage}
                      alt={project.title}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-lg object-contain shadow-sm border bg-zinc-100 dark:bg-zinc-700"
                    />
                  </div>
              
                  {/* Text and Links */}
                  <div className="flex-1">
                    <h2 className="text-xl font-semibold">{project.title}</h2>
                    <p className="text-sm text-zinc-600 dark:text-zinc-300 mb-2">
                      {project.description}
                    </p>
                    <div className="flex items-center justify-between w-full">
                      <div className="flex-col gap-2">
                        {project.images.length > 0 && (
                          <div>
                            <Link
                              href={`/projects/${project._id}`}
                              className="text-blue-400 hover:underline text-sm"
                            >
                              View Details
                            </Link>
                          </div>
                        )}
                        {!!project.github && (
                          <Link
                            href={project.github}
                            className="text-blue-400 hover:underline text-sm"
                          >
                            Visit Github Repo
                          </Link>
                        )}
                      </div>
              
                      {/* Technologies */}
                      {project.technologies?.length > 0 && (
                        <div>
                          <ul className="flex flex-wrap items-center justify-center gap-4 text-base text-zinc-700 dark:text-zinc-300">
                            {project.technologies.map((techName: string) => {
                              const techDetails = Technologies.find(t => t.name === techName);
              
                              return (
                                (techDetails?.svgPath || techDetails?.svgIcon) && (
                                  <li
                                    key={techName}
                                    className="flex items-center gap-2 ml-4 w-8 h-8"
                                  >
                                    {techDetails.svgPath || techDetails.svgIcon}
                                  </li>
                                )
                              );
                            })}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
              
                  {/* Right-side arrow link */}
                  {project.link && (
                    <Link
                      href={project.link}
                      passHref
                      className="flex absolute right-4 top-4 text-zinc-600 hover:text-blue-500"
                      title="Visit Project"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="text-sm text-blue-400">Visit Project Site</div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="#51A2FF"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </Link>
                  )}
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
