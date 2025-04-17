import Image from 'next/image';
import Link from 'next/link';

const certifications = [
  {
    title: 'Frontend Developer Certification',
    provider: 'freeCodeCamp',
    description: 'Built 5 responsive web apps covering HTML, CSS, JS, and React.',
    image: '/certificates/frontend.png',
    link: 'https://freecodecamp.org/certificate',
    repo: 'https://github.com/yourusername/frontend-cert-projects',
  },
  {
    title: 'Backend Developer Certification',
    provider: 'freeCodeCamp',
    description: 'Created APIs, authentication, and microservices using Node.js.',
    image: '/certificates/backend.png',
    link: 'https://freecodecamp.org/certificate',
    repo: 'https://github.com/yourusername/backend-cert-projects',
  },
];

const universityImages = [
  '/degree.png',
  '/medal1.png',
  '/medal2.png',
];

export default function EducationPage() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-10 space-y-16">
      <h1 className="text-4xl font-bold text-center mb-8">🎓 My Education Journey</h1>

      {/* University Section */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold mb-2">🏛️ University</h2>
        <p className="text-lg">BS in Computer Science – <Link href="https://university-website.com" className="text-blue-600 hover:underline" target="_blank">University of Example</Link></p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4 group">
          {universityImages.map((src, i) => (
            <div
              key={i}
              className="relative overflow-hidden rounded-2xl shadow-lg transform transition-transform hover:scale-105"
            >
              <Image src={src} alt={`University image ${i + 1}`} width={600} height={400} className="object-cover w-full h-full transition-opacity duration-500 group-hover:opacity-100 opacity-90" />
            </div>
          ))}
        </div>
      </section>

      {/* Certifications Section */}
        <section>
        <h2 className="text-2xl font-semibold mb-6">📜 Certifications</h2>
        <div className="space-y-6">
            {certifications.map((cert, i) => (
            <div
                key={i}
                className="flex flex-col md:flex-row items-start md:items-center border rounded-2xl p-6 gap-6 shadow-md hover:shadow-lg transition-all bg-white/80 dark:bg-zinc-900/60 backdrop-blur"
            >
                <div className="flex-shrink-0">
                <Image
                    src={cert.image}
                    alt={cert.title}
                    width={100}
                    height={100}
                    className="rounded-lg object-cover"
                />
                </div>
                <div className="flex-grow space-y-2">
                <h3 className="text-lg font-bold">{cert.title}</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">by {cert.provider}</p>
                <p className="text-sm text-zinc-700 dark:text-zinc-300">{cert.description}</p>
                <div className="flex gap-4 text-sm pt-1">
                    <Link
                    href={cert.link}
                    className="text-blue-600 hover:underline"
                    target="_blank"
                    >
                    📄 Certificate
                    </Link>
                    <Link
                    href={cert.repo}
                    className="text-blue-600 hover:underline"
                    target="_blank"
                    >
                    💻 GitHub Repo
                    </Link>
                </div>
                </div>
            </div>
            ))}
        </div>
        </section>

      {/* College Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold mb-4">🏫 College</h2>
        <div className="rounded-2xl border p-6 shadow-md bg-white/80 dark:bg-zinc-900/60 backdrop-blur">
            <div className="flex items-center justify-between mb-2">
            <h3 className="text-lg font-bold">ABC College</h3>
            <Link href="https://college-website.com" target="_blank" className="text-blue-600 hover:underline text-sm">
                Visit Website ↗
            </Link>
            </div>
            <ul className="text-sm text-zinc-700 dark:text-zinc-300 space-y-1">
            <li><span className="font-medium">Program:</span> Pre-Engineering</li>
            <li><span className="font-medium">Years Attended:</span> 2016 – 2018</li>
            <li><span className="font-medium">Result:</span> 85% – First Division</li>
            </ul>
        </div>
      </section>

      {/* School Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold mb-4">🏫 College</h2>
        <div className="rounded-2xl border p-6 shadow-md bg-white/80 dark:bg-zinc-900/60 backdrop-blur">
            <div className="flex items-center justify-between mb-2">
            <h3 className="text-lg font-bold">ABC College</h3>
            <Link href="https://college-website.com" target="_blank" className="text-blue-600 hover:underline text-sm">
                Visit Website ↗
            </Link>
            </div>
            <ul className="text-sm text-zinc-700 dark:text-zinc-300 space-y-1">
            <li><span className="font-medium">Program:</span> Pre-Engineering</li>
            <li><span className="font-medium">Years Attended:</span> 2016 – 2018</li>
            <li><span className="font-medium">Result:</span> 85% – First Division</li>
            </ul>
        </div>
      </section>

    </main>
  );
}
