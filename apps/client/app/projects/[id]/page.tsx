import Image from "next/image";
import { notFound } from "next/navigation";
import { fetchProjectById } from "../../api/project";
import { nameToSvgConverter } from "../../../utils/nameToSvgConverter";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";


interface ProjectDetailsPageProps {
    params: Promise<{
        id: string
    }>
}

export default async function ProjectDetailsPage({params}: ProjectDetailsPageProps) {
  const { id } = await params;
  try {
    const response = await fetchProjectById(id);
    console.log("response", response);
    const project = response.data;

    if (!project || !project._id) return notFound();

    return (
      <main className="max-w-4xl mx-auto px-4 py-10 space-y-8">
        {/* Back Button */}
        <div className="mb-6">
          <Link
            href="/projects"
            className="flex items-center text-blue-500 hover:underline"
          >
            <ArrowLeft className="mr-2" /> Back to Projects
          </Link>
        </div>
        <h1 className="text-3xl font-bold">{project.title}</h1>
        <p className="text-md text-zinc-700 dark:text-zinc-300">
          {project.description}
        </p>

        {/* Images */}
        <h2 className="text-xl font-semibold mb-2">Project Screenshots</h2>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4">
        {project.images.map((img: string, i: number) => (
          <div key={i} className="w-full h-auto">
            <Image
              src={img}
              alt={`Screenshot ${i + 1}`}
              width={600}
              height={400}
              className="rounded object-cover w-full h-auto"
            />
          </div>
        ))}
      </div>

        {/* Video */}
        {project.video && (
          <div>
            <h2 className="text-xl font-semibold mb-2">Project Demo</h2>
            <video controls className="w-full max-h-[480px] rounded shadow">
              <source src={project.video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        )}

        {/* Technologies */}
        {project.technologies?.length > 0 && (
          <div>
            <h2 className="text-2xl font-semibold text-zinc-800 dark:text-zinc-200 mb-4">
              🛠 Technologies
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-base text-zinc-700 dark:text-zinc-300">
              {project.technologies.map((tech: any) => (
                <li key={tech._id || tech} className="flex items-center gap-2">
                  {tech.svgPath ? (
                    nameToSvgConverter(tech.name)
                  ) : (
                    <span className="w-15 h-15 mr-2 bg-gray-500 rounded-full" />
                  )}
                  {tech.displayName}
                </li>
              ))}
            </ul>
          </div>
        )}
      </main>
    );
  } catch (error) {
    console.error("Failed to fetch project by ID:", error);
    return notFound();
  }
}
