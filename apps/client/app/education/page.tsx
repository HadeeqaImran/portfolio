import Image from "next/image";
import Link from "next/link";
import { ArrowDownCircle } from "lucide-react"; // Arrow at bottom

const certifications = [
  {
    title: "Next JS: The Complete Developer's Guide",
    provider: "Udemy",
    description:
      "Build apps using NextJS v14 using App Router, Next Auth, NextUI, and TailwindCSS! Learn the latest version of NextJS!",
    image:
      "https://hadeeqa-portfolio.s3.eu-north-1.amazonaws.com/certifications/next.jpg",
    link: "https://www.udemy.com/certificate/UC-c63cce26-88a2-4b8f-9b41-ca4a8064be88/",
    repo: "https://github.com/HadeeqaImran/reddit-clone-next-js",
  },
  {
    title: "Node JS: Advanced Concepts",
    provider: "Udemy",
    description:
      "Get advanced with Node.Js! Learn caching with Redis, speed up through clustering, and add image upload with S3 and Node!",
    image:
      "https://hadeeqa-portfolio.s3.eu-north-1.amazonaws.com/certifications/node.jpg",
    link: "https://www.udemy.com/certificate/UC-e002fee5-1272-478b-a449-61676461d98d/",
    repo: "https://github.com/HadeeqaImran/blogs-app-node",
  },
  {
    title: "Mastering TypeScript - 2025 Edition",
    provider: "Udemy",
    description:
      "Learn the world's fastest growing programming language from scratch. Includes Webpack & React!",
    image:
      "https://hadeeqa-portfolio.s3.eu-north-1.amazonaws.com/certifications/typescript.jpg",
    link: "https://www.udemy.com/certificate/UC-9cac93e8-39b1-4a02-b9a2-ddcd91a9b274/",
    repo: "https://github.com/yourusername/backend-cert-projects",
  },
];

const universityImages = [
  "https://hadeeqa-portfolio.s3.eu-north-1.amazonaws.com/headshot.png",
  "https://hadeeqa-portfolio.s3.eu-north-1.amazonaws.com/headshot.png",
  "https://hadeeqa-portfolio.s3.eu-north-1.amazonaws.com/headshot.png",
  "https://hadeeqa-portfolio.s3.eu-north-1.amazonaws.com/headshot.png",
];

export default function EducationPage() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-10 space-y-16">
      <h1 className="text-4xl font-bold text-center mb-8">
        🎓 My Education Journey
      </h1>

      {/* University Section */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold mb-2">University</h2>
        <p className="text-lg mb-1">
          BS in Computer Science –{" "}
          <Link
            href="https://lhr.nu.edu.pk/"
            className="text-blue-400 hover:underline"
            target="_blank"
          >
            National University of Computer and Emerging Sciences (FAST-NUCES)
          </Link>
        </p>
        <p className="text-lg text-zinc-600 dark:text-zinc-400">
          CGPA - 3.96 | Summa Cum Laude | Silver Medalist
        </p>
        <div className="overflow-x-auto snap-x snap-mandatory flex space-x-4 px-4">
          <div className="overflow-x-auto snap-x snap-mandatory flex space-x-4 px-4">
            {universityImages.map((src, i) => (
              <div
                key={i}
                className="snap-start flex-shrink-0 w-[95%] md:w-[48%] h-96 relative overflow-hidden rounded-2xl shadow-lg"
              >
                <Image
                  src={src}
                  alt={`University image ${i + 1}`}
                  width={600}
                  height={384} // 48 * 4 (since tailwind's h-48 is 12rem = 192px)
                  className="object-cover w-full h-full"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-6">Certifications</h2>
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
                  width={200}
                  height={200}
                  className="rounded-lg object-cover"
                />
              </div>
              <div className="flex-grow space-y-2">
                <h3 className="text-lg font-bold">{cert.title}</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                  {cert.provider}
                </p>
                <p className="text-sm text-zinc-700 dark:text-zinc-300">
                  {cert.description}
                </p>
                <div className="flex gap-4 text-sm pt-1">
                  <Link
                    href={cert.link}
                    className="text-blue-400 hover:underline"
                    target="_blank"
                  >
                    Certificate
                  </Link>
                  <Link
                    href={cert.repo}
                    className="text-blue-400 hover:underline"
                    target="_blank"
                  >
                    GitHub Repo
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* College Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold mb-4">College</h2>
        <div className="rounded-2xl border p-6 shadow-md bg-white/80 dark:bg-zinc-900/60 backdrop-blur">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-lg font-bold">Punjab Group of Colleges</h3>
            <Link
              href="https://pgc.edu/"
              target="_blank"
              className="text-blue-400 hover:underline text-sm"
            >
              Visit Website ↗
            </Link>
          </div>
          <ul className="text-sm text-zinc-700 dark:text-zinc-300 space-y-1">
            <li>
              <span className="font-medium">Program:</span> FSc. Pre-Engineering
            </li>
            <li>
              <span className="font-medium">Years Attended:</span> 2016 – 2018
            </li>
            <li>
              <span className="font-medium">Result:</span> 95% – Third Position
              in Lahore Board
            </li>
          </ul>
        </div>
      </section>

      {/* School Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold mb-4">School</h2>
        <div className="rounded-2xl border p-6 shadow-md bg-white/80 dark:bg-zinc-900/60 backdrop-blur">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-lg font-bold">
              Crescent Model Higher Secondary School
            </h3>
            <Link
              href="https://www.crescentschool.edu.pk/"
              target="_blank"
              className="text-blue-400 hover:underline text-sm"
            >
              Visit Website ↗
            </Link>
          </div>
          <ul className="text-sm text-zinc-700 dark:text-zinc-300 space-y-1">
            <li>
              <span className="font-medium">Program:</span> Matriculation
            </li>
            <li>
              <span className="font-medium">Years Attended:</span> 2016 – 2018
            </li>
            <li>
              <span className="font-medium">Result:</span> 97% - A+ Grade
            </li>
          </ul>
        </div>
      </section>
      <div className="flex justify-center mt-16">
        <Link href="/contact">
          <ArrowDownCircle
            size={48}
            className="text-blue-600 hover:text-blue-700 animate-bounce"
          />
        </Link>
      </div>
    </main>
  );
}
