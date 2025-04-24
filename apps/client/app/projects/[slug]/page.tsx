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
  <h2 className="text-2xl font-semibold text-zinc-800 dark:text-zinc-200 mb-4">🛠 Technologies</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-base text-zinc-700 dark:text-zinc-300">
    
    {/* Next.js */}
    <div className="flex items-center gap-4">
      <svg width="28" height="28" viewBox="0 0 128 128" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="text-black dark:text-white">
        <path d="M64 0C28.7 0 0 28.7 0 64c0 27.8 18 51.3 43 60l1-1.9c-1.7-.7-3.3-1.5-5-2.5l.8-1.4c1.4.8 2.8 1.4 4.2 2l.8-1.5c-1.3-.6-2.6-1.2-3.9-1.9l.7-1.3c1.3.7 2.7 1.3 4 1.8l.7-1.4c-1.2-.5-2.5-1-3.7-1.6l.6-1.3c1.3.6 2.5 1.1 3.8 1.5L59 32h2v64h2V32h2L91 93c1.3-.4 2.5-.9 3.7-1.5l.6 1.3c-1.2.6-2.5 1.1-3.7 1.6l.7 1.4c1.3-.5 2.7-1.1 4-1.8l.7 1.3c-1.3.7-2.6 1.3-3.9 1.9l.8 1.5c1.4-.6 2.8-1.2 4.2-2l.8 1.4c-1.7 1-3.3 1.8-5 2.5l1 1.9c25-8.7 43-32.2 43-60C128 28.7 99.3 0 64 0z"/>
      </svg>
      <span>Next.js 14 (App Router)</span>
    </div>

    {/* Tailwind CSS */}
    <div className="flex items-center gap-4">
      <svg width="28" height="28" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill="#38BDF8" d="M24 12c-4.5 0-7.5 2.2-9 6 1.8-1.5 3.7-2.1 5.5-1.9 1.4.1 2.4.8 3.5 1.8 1.8 1.6 3.7 3.2 7.5 3.2 4.5 0 7.5-2.2 9-6-1.8 1.5-3.7 2.1-5.5 1.9-1.4-.1-2.4-.8-3.5-1.8-1.8-1.6-3.7-3.2-7.5-3.2zM15 24c-4.5 0-7.5 2.2-9 6 1.8-1.5 3.7-2.1 5.5-1.9 1.4.1 2.4.8 3.5 1.8 1.8 1.6 3.7 3.2 7.5 3.2 4.5 0 7.5-2.2 9-6-1.8 1.5-3.7 2.1-5.5 1.9-1.4-.1-2.4-.8-3.5-1.8-1.8-1.6-3.7-3.2-7.5-3.2z"/>
      </svg>
      <span>Tailwind CSS</span>
    </div>

    {/* AWS S3 */}
    <div className="flex items-center gap-4">
      <svg width="28" height="28" fill="currentColor" viewBox="0 0 256 256" className="text-orange-500">
        <path d="M128 0C57.3 0 0 57.3 0 128s57.3 128 128 128 128-57.3 128-128S198.7 0 128 0zm0 244C66.3 244 12 189.7 12 128S66.3 12 128 12s116 54.3 116 116-54.3 116-116 116z"/>
        <path d="M96 96h64v64H96z"/>
      </svg>
      <span>AWS S3</span>
    </div>

    {/* Vercel */}
    <div className="flex items-center gap-4">
      <svg width="28" height="28" viewBox="0 0 1155 1000" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-black dark:text-white">
        <path fill="currentColor" d="M577.3 0L1154.6 1000H0z" />
      </svg>
      <span>Vercel Hosting</span>
    </div>

    {/* Admin Panel */}
    <div className="flex items-center gap-4">
      <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="text-blue-500">
        <path d="M5 12h14M12 5l7 7-7 7" />
      </svg>
      <span>Admin Panel Integration</span>
    </div>
  </div>
</div>


    </main>
  );
}
