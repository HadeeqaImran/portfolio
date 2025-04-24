'use client';

import Image from 'next/image';
import Link from 'next/link';

const projects = [
  {
    title: 'Jarvis CRM',
    year: '2024',
    description: 'An all-in-one CRM with task automation, push notifications, deep linking, and analytics.',
    image: '/projects/jarvis-crm.png',
    link: '/projects/jarvis-crm',
    github: '',
    video: ''
  },
  {
    title: 'Admin Dashboard for Portfolio',
    year: '2024',
    description: 'A secure admin panel with image upload to AWS S3, authentication, and full CMS for portfolio management.',
    image: '/projects/admin-dashboard.png',
    link: '/projects/admin-dashboard',
    github: '',
    video: ''
  },
  {
    title: 'MERN Portfolio',
    year: '2023',
    description: 'A full-stack monorepo portfolio with Next.js, admin dashboard, AWS S3 integration, and themes.',
    image: '/projects/mern-portfolio.png',
    link: '/projects/mern-portfolio',
    github: '',
    video: ''
  },
  {
    title: 'DateMD',
    year: '2024',
    description: 'A blockchain augmented hospital management system.',
    image: '/Users/faisalurrehman/Downloads/datemd.png',
    link: '/projects/ecommerce-api',
    github: 'https://github.com/HadeeqaImran/DateMD',
    video: ''
  },
  {
    title: 'Ecommerce API',
    year: '2022',
    description: 'Robust backend API using Node.js, Express, and MongoDB for a scalable e-commerce platform.',
    image: '/projects/ecommerce-api.png',
    link: '/projects/ecommerce-api',
    github: '',
    video: ''
  },
];

// Group projects by year
const groupedProjects = projects.reduce((acc: Record<string, typeof projects>, project) => {
  acc[project.year] = acc[project.year] || [];
  acc[project.year].push(project);
  return acc;
}, {});

export default function ProjectsPage() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-12">🗂️ Projects Timeline</h1>

      <div className="relative border-l border-zinc-300 dark:border-zinc-700 space-y-12">
        {Object.entries(groupedProjects)
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
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={150}
                      height={100}
                      className="rounded-lg object-cover shadow-sm border"
                    />
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
                        <Link
                            href={project.github}
                            className="text-blue-600 hover:underline text-sm"
                        >
                            Visit Github Repo
                        </Link>
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
}
