import Link from 'next/link';
import Image from 'next/image';

const projects = [
  {
    slug: 'portfolio-site',
    title: 'Personal Portfolio Website',
    description: 'A portfolio site built with Next.js, hosted on Vercel.',
    image: '/projects/portfolio.png',
  },
  {
    slug: 'crm-dashboard',
    title: 'CRM Dashboard',
    description: 'Full-featured CRM dashboard with charts, filters, and user management.',
    image: '/projects/crm.png',
  },
];

export default function ProjectsPage() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6 text-center">🚀 Projects</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((proj) => (
          <Link key={proj.slug} href={`/projects/${proj.slug}`} className="block border rounded shadow-sm hover:shadow-md transition">
            <Image src={proj.image} alt={proj.title} width={800} height={600} className="rounded-t w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-lg font-semibold">{proj.title}</h2>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">{proj.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
