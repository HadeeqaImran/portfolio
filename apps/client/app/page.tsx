import Image from "next/image";
import Link from "next/link";
import { ArrowDownCircle } from "lucide-react"; // Arrow at bottom
import {
  NodeSvg,
  ReactSvg,
  MongoDBSvg,
  ExpressSvg,
  TypescriptSvg,
  CodemagicSvg,
  DockerSvg,
  GithubSvg,
  GitSvg,
  RevopushSvg,
  AwsSvg,
} from "@/components/Svgs";

export default function Home() {
  const skills = [
    {
      name: "React Native",
      score: 9,
      icon: <ReactSvg width={40} height={40} />,
      color: "#61DBFB",
    }, // React Blue
    {
      name: "React.js",
      score: 9,
      icon: <ReactSvg width={40} height={40} />,
      color: "#61DBFB",
    }, // React Blue
    {
      name: "Node.js",
      score: 8,
      icon: <NodeSvg width={40} height={40} />,
      color: "#68A063",
    }, // Node Green
    {
      name: "MongoDB",
      score: 8,
      icon: <MongoDBSvg width={40} height={40} />,
      color: "#4DB33D",
    }, // MongoDB Green
    {
      name: "Express",
      score: 8,
      icon: <ExpressSvg width={40} height={40} />,
      color: "#000000",
    }, // Express Black
    {
      name: "TypeScript",
      score: 7,
      icon: <TypescriptSvg width={35} height={35} />,
      color: "#3178C6",
    }, // TS Blue

    {
      name: "Codemagic",
      score: 8,
      icon: <CodemagicSvg width={40} height={40} />,
      color: "#F96E26", // Codemagic Yellow
    },
    {
      name: "Revopush",
      score: 7,
      icon: <RevopushSvg width={35} height={35} />,
      color: "#3858f8", // Purplish (custom, assuming Revopush color; adjust if needed)
    },
    {
      name: "Git",
      score: 9,
      icon: <GitSvg width={40} height={40} />,
      color: "#F1502F", // Git Orange
    },
    {
      name: "Github",
      score: 9,
      icon: <GithubSvg width={40} height={40} />,
      color: "#444444", // GitHub Black
    },
    {
      name: "AWS",
      score: 8,
      icon: <AwsSvg width={40} height={40} />,
      color: "#FF9900", // AWS Orange
    },
    {
      name: "Docker",
      score: 8,
      icon: <DockerSvg width={40} height={40} />,
      color: "#2496ED", // Docker Blue
    },
  ];

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 py-16 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 relative">
      <section className="w-full max-w-4xl text-center">
        {/* Profile Image */}
        <div className="flex justify-center mb-6">
          <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-blue-500 shadow-lg">
            <Image
              src="https://hadeeqa-portfolio.s3.eu-north-1.amazonaws.com/headshot.png"
              alt="Your profile photo"
              width={200}
              height={200}
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Intro */}
        <h1 className="text-3xl sm:text-4xl font-bold mb-3">
          Hi, I’m Hadeeqa Imran
        </h1>
        <p className="text-md sm:text-lg max-w-xl mx-auto mb-6">
          I’m a full-stack JavaScript developer with a focus on MERN & React
          Native. I build performant, scalable apps and love turning ideas into
          real-world products. Passionate about clean code, great UI, and
          automation.
        </p>

        {/* CTA Buttons */}
        <div className="flex justify-center space-x-4 mb-10">
          <Link
            href="/projects"
            className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            View Projects
          </Link>
          <Link
            href="/contact"
            className="px-5 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-100 dark:hover:bg-zinc-800 transition"
          >
            Contact Me
          </Link>
        </div>
      </section>

      {/* Skills Section */}
      <section className="w-full max-w-5xl mt-16">
        <h2 className="text-2xl font-semibold mb-10 text-center">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 justify-items-center">
          {skills.map((skill, index) => (
            <div key={index} className="flex flex-col items-center space-y-2">
              <div className="relative w-24 h-24">
                <svg className="transform -rotate-90" viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    stroke="lightgray"
                    strokeWidth="10"
                    fill="none"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    stroke={skill.color}
                    strokeWidth="10"
                    strokeDasharray="283"
                    strokeDashoffset={283 - (skill.score / 10) * 283}
                    fill="none"
                    strokeLinecap="round"
                  />
                </svg>
                {/* Skill Icon */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className="p-2 rounded-full">{skill.icon}</div>
                  <span className="text-xs font-bold mt-1">
                    {skill.score}/10
                  </span>
                </div>
              </div>
              <p className="text-sm text-center">{skill.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Employment History */}
      <section className="w-full max-w-3xl mt-20">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Employment History
        </h2>
        <div className="space-y-4">
          <div className="border-l-4 border-blue-500 pl-4 py-2">
            <h3 className="font-semibold text-lg">
              React Native Engineer – Dubizzle Labs
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">1 year</p>
            <p className="text-sm mt-1">
              Worked on high-scale mobile applications, implemented CI/CD
              pipelines with Codemagic, deep linking, push notifications, and
              more.
            </p>
          </div>
          <div className="border-l-4 border-blue-500 pl-4 py-2">
            <h3 className="font-semibold text-lg">
              MERN Stack Engineer – PixelPk Technologies
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              1.5 years
            </p>
            <p className="text-sm mt-1">
              Built full-stack applications using MongoDB, Express, React, and
              Node.js. Delivered admin panels, REST APIs, and integrated
              third-party services like AWS and Firebase.
            </p>
          </div>
        </div>
      </section>

      {/* Scroll Down Arrow */}
      <Link href="/projects" className="absolute bottom-0">
        <ArrowDownCircle
          size={48}
          className="text-blue-600 hover:text-blue-700 animate-bounce"
        />
      </Link>
    </main>
  );
}
