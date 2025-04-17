import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 py-16 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100">
      <section className="w-full max-w-4xl text-center">
        {/* Profile Image */}
        <div className="flex justify-center mb-6">
          <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-blue-500 shadow-lg">
            <Image
              src="/profile.jpg" // Make sure to put your image in /public
              alt="Your profile photo"
              width={128}
              height={128}
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Intro */}
        <h1 className="text-3xl sm:text-4xl font-bold mb-3">Hi, I’m Hadeeqa Imran</h1>
        <p className="text-md sm:text-lg max-w-xl mx-auto mb-6">
          I’m a full-stack JavaScript developer with a focus on MERN & React Native. I build performant,
          scalable apps and love turning ideas into real-world products. Passionate about clean code,
          great UI, and automation.
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

      {/* Employment History */}
      <section className="w-full max-w-3xl mt-10">
        <h2 className="text-2xl font-semibold mb-6 text-center">Employment History</h2>
        <div className="space-y-4">
          <div className="border-l-4 border-blue-500 pl-4 py-2">
            <h3 className="font-semibold text-lg">React Native Engineer – Dubizzle Labs</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">1 year</p>
            <p className="text-sm mt-1">
              Worked on high-scale mobile applications, implemented CI/CD pipelines with Codemagic, deep linking,
              push notifications, and more.
            </p>
          </div>
          <div className="border-l-4 border-blue-500 pl-4 py-2">
            <h3 className="font-semibold text-lg">MERN Stack Engineer – PixelPk Technologies</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">1.5 years</p>
            <p className="text-sm mt-1">
              Built full-stack applications using MongoDB, Express, React, and Node.js. Delivered admin panels,
              REST APIs, and integrated third-party services like AWS and Firebase.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
