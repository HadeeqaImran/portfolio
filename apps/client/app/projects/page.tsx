'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { fetchProjects } from '../api/project'; // Assuming you have this path to your API functions
import Project from '../../types/Project'; // Adjust the import path as necessary

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
        const response = await fetchProjects();
        const data: Project[] = response.data;
        const groupedProjects = data.reduce((acc: Record<string, Project[]>, project) => {
          acc[project.year] = acc[project.year] || [];
          acc[project.year].push(project);
          return acc;
        }, {} as Record<string, Project[]>);
        setProjects(groupedProjects);
      } catch (err) {
        setError('Failed to load projects');
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
      <h1 className="text-4xl font-bold text-center mb-12">🗂️ Projects Timeline</h1>

      <div className="relative border-l border-zinc-300 dark:border-zinc-700 space-y-12">
        {Object.entries(projects)
          .sort(([a], [b]) => Number(b) - Number(a)) // Descending year order
          .map(([year, yearProjects]) => (
            <div key={year} className="relative pl-8 space-y-8">
              {/* Timeline Dot and Year Label */}
              <div className="absolute left-[-6px] top-1.5 w-3 h-3 bg-blue-600 rounded-full ring-2 ring-white dark:ring-zinc-900" />
              <span className="text-sm text-zinc-500 dark:text-zinc-400">{year}</span>

              {yearProjects.map((project, index) => (
                <div
                  key={index}
                  className="p-4 rounded-xl shadow-md bg-white dark:bg-zinc-900 transition hover:shadow-lg"
                >
                  <div className="flex flex-col md:flex-row gap-4">
                  <div className="w-[150px] h-[100px] flex-shrink-0 relative">
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="rounded-lg object-cover shadow-sm border"
                    />
                  </div>
                    <div>
                      <h2 className="text-xl font-semibold">{project.title}</h2>
                      <p className="text-sm text-zinc-600 dark:text-zinc-300 mb-2">
                        {project.description}
                      </p>
                      <div className='flex-col gap-2'>
                        <Link
                          href={project.link}
                          className="text-blue-600 hover:underline text-sm"
                        >
                          🔍 View Details
                        </Link>
                        {project.github && (
                          <Link
                            href={project.github}
                            className="text-blue-600 hover:underline text-sm"
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
    </main>
  );
};

export default ProjectsPage;
