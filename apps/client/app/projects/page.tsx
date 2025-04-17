// import Link from 'next/link';
// import Image from 'next/image';

// const projects = [
//   {
//     slug: 'portfolio-site',
//     title: 'Personal Portfolio Website',
//     description: 'A portfolio site built with Next.js, hosted on Vercel.',
//     image: '/projects/portfolio.png',
//   },
//   {
//     slug: 'crm-dashboard',
//     title: 'CRM Dashboard',
//     description: 'Full-featured CRM dashboard with charts, filters, and user management.',
//     image: '/projects/crm.png',
//   },
// ];

// export default function ProjectsPage() {
//   return (
//     <main className="max-w-5xl mx-auto px-4 py-10">
//       <h1 className="text-3xl font-bold mb-6 text-center">🚀 Projects</h1>
//       <div className="grid md:grid-cols-2 gap-6">
//         {projects.map((proj) => (
//           <Link key={proj.slug} href={`/projects/${proj.slug}`} className="block border rounded shadow-sm hover:shadow-md transition">
//             <Image src={proj.image} alt={proj.title} width={800} height={600} className="rounded-t w-full h-48 object-cover" />
//             <div className="p-4">
//               <h2 className="text-lg font-semibold">{proj.title}</h2>
//               <p className="text-sm text-zinc-600 dark:text-zinc-400">{proj.description}</p>
//             </div>
//           </Link>
//         ))}
//       </div>
//     </main>
//   );
// }


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
  },
  {
    title: 'Admin Dashboard for Portfolio',
    year: '2024',
    description: 'A secure admin panel with image upload to AWS S3, authentication, and full CMS for portfolio management.',
    image: '/projects/admin-dashboard.png',
    link: '/projects/admin-dashboard',
  },
  {
    title: 'MERN Portfolio',
    year: '2023',
    description: 'A full-stack monorepo portfolio with Next.js, admin dashboard, AWS S3 integration, and themes.',
    image: '/projects/mern-portfolio.png',
    link: '/projects/mern-portfolio',
  },
  {
    title: 'Ecommerce API',
    year: '2022',
    description: 'Robust backend API using Node.js, Express, and MongoDB for a scalable e-commerce platform.',
    image: '/projects/ecommerce-api.png',
    link: '/projects/ecommerce-api',
  },
  {
    title: 'Ecommerce API',
    year: '2022',
    description: 'Robust backend API using Node.js, Express, and MongoDB for a scalable e-commerce platform.',
    image: '/projects/ecommerce-api.png',
    link: '/projects/ecommerce-api',
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
                      <Link
                        href={project.link}
                        className="text-blue-600 hover:underline text-sm"
                      >
                        🔍 View Details
                      </Link>
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
