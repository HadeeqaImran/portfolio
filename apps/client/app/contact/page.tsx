'use client';

import { useState } from 'react';
import {
  Linkedin,
  Github,
  FileText,
  Mail,
  MessageCircle,
  Send,
  Phone,
} from 'lucide-react';

export default function ContactPage() {
  const [form, setForm] = useState({ email: '', subject: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Sending...');

    // Simulated async API call
    await new Promise((res) => setTimeout(res, 1000));
    setStatus('Message sent!');

    // Reset form
    setForm({ email: '', subject: '', message: '' });
  };

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-center mb-6 text-primary">
        Let’s Connect
      </h1>
      <p className="text-center text-zinc-600 dark:text-zinc-300 mb-12">
        Reach out to me directly or through any of the platforms below.
      </p>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white dark:bg-zinc-800 p-6 rounded-xl shadow-md space-y-6 transition duration-300"
        >
          <div>
            <label className="block mb-1 font-medium">Your Email</label>
            <input
              type="email"
              name="email"
              required
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="w-full p-3 border border-zinc-300 dark:border-zinc-700 rounded-md bg-zinc-50 dark:bg-zinc-900 text-zinc-800 dark:text-white"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Subject</label>
            <input
              type="text"
              name="subject"
              required
              value={form.subject}
              onChange={handleChange}
              placeholder="Let's talk!"
              className="w-full p-3 border border-zinc-300 dark:border-zinc-700 rounded-md bg-zinc-50 dark:bg-zinc-900 text-zinc-800 dark:text-white"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Message</label>
            <textarea
              name="message"
              required
              rows={5}
              value={form.message}
              onChange={handleChange}
              placeholder="Tell me how I can help..."
              className="w-full p-3 border border-zinc-300 dark:border-zinc-700 rounded-md bg-zinc-50 dark:bg-zinc-900 text-zinc-800 dark:text-white"
            />
          </div>

          <button
            type="submit"
            className="flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
          >
            <Send size={18} />
            Send Email
          </button>
          {status && <p className="text-green-600 dark:text-green-400">{status}</p>}
        </form>

        {/* Tiles Grid - responsive stacking */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <ContactTile
            title="LinkedIn"
            icon={<Linkedin size={28} />}
            description="Connect with me professionally"
            href="https://linkedin.com/in/your-linkedin"
            color="dark:bg-blue-700 bg-blue-200"
          />
          <ContactTile
            title="GitHub"
            icon={<Github size={28} />}
            description="View my open-source work"
            href="https://github.com/your-github"
            color="dark:bg-gray-800 bg-gray-300"
          />
          <ContactTile
            title="WhatsApp"
            icon={<Phone size={28} />}
            description="Chat with me directly"
            href="https://wa.me/1234567890"
            color="bg-green-200 dark:bg-green-600"
          />
          <ContactTile
            title="Download CV"
            icon={<FileText size={28} />}
            description="PDF format"
            href="/CV.pdf"
            color="dark:bg-purple-600 bg-purple-200"
            download
          />
        </div>
      </div>
    </section>
  );
}

const ContactTile = ({
  title,
  icon,
  description,
  href,
  color,
  download = false,
}: {
  title: string;
  icon: React.ReactNode;
  description: string;
  href: string;
  color: string;
  download?: boolean;
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    download={download}
    className={`group block rounded-xl p-5 shadow-md text-white ${color} transition transform hover:-translate-y-1 hover:shadow-lg`}
  >
    <div className="flex items-center gap-4">
      <div className="bg-white bg-opacity-10 p-2 rounded-full">{icon}</div>
      <div>
        <h3 className="text-lg font-semibold text-zinc-700 dark:text-zinc-100">{title}</h3>
        <p className="text-sm opacity-90 text-zinc-600 dark:text-zinc-200">{description}</p>
      </div>
    </div>
  </a>
);
