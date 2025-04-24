// app/projects/[id]/page.tsx (or wherever your page file is)
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { fetchProjectById } from '../../api/project';

export default async function ProjectDetailsPage({ params }: { params: { id: string } }) {
  const project: any = await fetchProjectById(params.id);

  if (!project) return notFound();

  return (
    <main className="max-w-4xl mx-auto px-4 py-10 space-y-8">
      <h1 className="text-3xl font-bold">{project.title}</h1>
      <p className="text-md text-zinc-700 dark:text-zinc-300">{project.description}</p>

      {/* Images */}
      <div className="grid sm:grid-cols-2 gap-4">
        {Array.isArray(project.images)
          ? project.images.map((img: string, i: number) => (
              <Image
                key={i}
                src={img}
                alt={`Screenshot ${i + 1}`}
                width={600}
                height={400}
                className="rounded"
              />
            ))
          : (
              <Image
                src={project.image}
                alt="Project"
                width={600}
                height={400}
                className="rounded"
              />
            )}
      </div>

      {/* Video */}
      {project.video && (
        <div>
          <h2 className="text-xl font-semibold mb-2">📽️ Project Demo</h2>
          <video controls className="w-full max-h-[480px] rounded shadow">
            <source src={project.video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}

      {/* Technologies */}
      {project.technologies?.length > 0 && (
        <div>
          <h2 className="text-2xl font-semibold text-zinc-800 dark:text-zinc-200 mb-4">🛠 Technologies</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-base text-zinc-700 dark:text-zinc-300">
            {project.technologies.map((tech: any) => (
              <li key={tech._id} className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full" />
                {tech.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </main>
  );
}
