import Image from 'next/image';

export default function ProjectDetailsPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-10 space-y-8">
      <h1 className="text-3xl font-bold">Personal Portfolio Website</h1>
      <p className="text-md text-zinc-700 dark:text-zinc-300">
        A sleek and modern portfolio site using Next.js 14 App Router, Tailwind CSS, and hosted on Vercel.
        Includes an admin panel to manage projects and personal info, plus AWS S3 for image uploads.
      </p>

      {/* Project Images */}
      <div className="grid sm:grid-cols-2 gap-4">
        <Image src="/projects/portfolio1.png" alt="Screenshot 1" width={600} height={400} className="rounded" />
        <Image src="/projects/portfolio2.png" alt="Screenshot 2" width={600} height={400} className="rounded" />
      </div>

      {/* Video Section */}
      <div>
        <h2 className="text-xl font-semibold mb-2">📽️ Project Demo</h2>
        <video controls className="w-full max-h-[480px] rounded shadow">
          <source src="/videos/portfolio-demo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Technologies */}
      <div>
        <h2 className="text-xl font-semibold mb-2">🛠 Technologies</h2>
        <ul className="list-disc list-inside text-sm">
          <li>Next.js 14 (App Router)</li>
          <li>Tailwind CSS</li>
          <li>AWS S3</li>
          <li>Vercel Hosting</li>
          <li>Admin Panel Integration</li>
        </ul>
      </div>
    </main>
  );
}
