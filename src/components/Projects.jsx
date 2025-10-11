import React from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      title: 'Project One',
      description: 'A full-stack web application built with React and Node.js. Features include user authentication, real-time updates, and responsive design.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
      tags: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
      github: 'https://github.com',
      live: 'https://example.com',
    },
    {
      title: 'Project Two',
      description: 'An e-commerce platform with payment integration, inventory management, and admin dashboard. Built for scalability and performance.',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop',
      tags: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL'],
      github: 'https://github.com',
      live: 'https://example.com',
    },
    {
      title: 'Project Three',
      description: 'A mobile-first social media application with real-time messaging, media sharing, and user profiles.',
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop',
      tags: ['React Native', 'Firebase', 'Redux', 'Express'],
      github: 'https://github.com',
      live: 'https://example.com',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  }

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-slate-950 relative transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Projects</h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1 bg-primary-600 dark:bg-blue-500 mx-auto"
          ></motion.div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                y: -10,
                transition: { duration: 0.3 },
              }}
              className="bg-white dark:bg-slate-900 rounded-lg overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="relative h-48 overflow-hidden">
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-primary-600 dark:bg-blue-600 bg-opacity-10 dark:bg-opacity-20 flex items-center justify-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1 }}
                    transition={{ duration: 0.3 }}
                    className="flex space-x-4"
                  >
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white dark:bg-slate-800 dark:text-gray-300 rounded-full hover:bg-primary-600 dark:hover:bg-blue-600 hover:text-white transition-colors duration-200"
                    >
                      <Github size={20} />
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white dark:bg-slate-800 dark:text-gray-300 rounded-full hover:bg-primary-600 dark:hover:bg-blue-600 hover:text-white transition-colors duration-200"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </motion.div>
                </motion.div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <motion.span
                      key={tagIndex}
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="px-3 py-1 bg-primary-100 dark:bg-blue-950 text-primary-700 dark:text-blue-400 text-sm rounded-full cursor-default"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-blue-400 transition-colors duration-200"
                  >
                    <Github size={20} className="mr-1" />
                    Code
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-blue-400 transition-colors duration-200"
                  >
                    <ExternalLink size={20} className="mr-1" />
                    Live
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Projects

