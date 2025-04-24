const mongoose = require('mongoose');
const Project = require('../src/models/project'); // Adjust the path as needed
const Technology = require('../src/models/technology'); // Import the Technology model

const projects = [
  {
    title: 'Personal Portfolio Website',
    year: '2025',
    description: 'A sleek and modern portfolio site built with Next.js, Tailwind CSS, and hosted on Vercel.',
    image: '/projects/portfolio1.png',
    link: 'https://myportfolio.com',
    github: 'https://github.com/myusername/portfolio',
    video: '/videos/portfolio-demo.mp4',
  },
  {
    title: 'E-commerce Platform',
    year: '2023',
    description: 'A fully functional e-commerce platform built using Node.js, Express, and MongoDB.',
    image: '/projects/ecommerce.png',
    link: 'https://ecommerce.com',
    github: 'https://github.com/myusername/ecommerce',
    video: '/videos/ecommerce-demo.mp4',
  },
  {
    title: 'Blog Application',
    year: '2024',
    description: 'A simple blog application built with React and deployed on Vercel.',
    image: '/projects/blog.png',
    link: 'https://myblog.com',
    github: 'https://github.com/myusername/blog',
    video: '/videos/blog-demo.mp4',
  },
  {
    title: 'DateMD',
    year: '2024',
    description: 'A block augmented hospital management system that allows users to book appointments with doctors, manage their health records, and receive reminders for upcoming appointments.',
    image: '/projects/blog.png',
    link: 'https://myblog.com',
    github: 'https://github.com/myusername/blog',
    video: '/videos/blog-demo.mp4',
  },
];

// Function to get a random set of technologies for each project
async function getRandomTechnologies() {
  const technologies = await Technology.find();
  const randomTechnologies = [];
  
  // Pick between 1 and 4 random technologies
  const numberOfTechnologies = Math.floor(Math.random() * 4) + 1;
  
  while (randomTechnologies.length < numberOfTechnologies) {
    const randomTech = technologies[Math.floor(Math.random() * technologies.length)];
    if (!randomTechnologies.includes(randomTech._id)) {
      randomTechnologies.push(randomTech._id); // Store the technology ID
    }
  }
  
  return randomTechnologies;
}

// Database connection and seeding
async function seedProjects() {
  try {
    // Delete existing projects to avoid duplicates
    await Project.deleteMany();
    
    // Loop through the projects and add random technologies
    for (let project of projects) {
      const technologies = await getRandomTechnologies(); // Get random technologies for each project
      
      // Insert project with associated technologies
      const newProject = new Project({
        ...project,
        technologies: technologies,
      });

      await newProject.save();
    }

    console.log('✅ Sample projects seeded successfully.');
  } catch (error) {
    console.error('❌ Error seeding projects:', error);
  } finally {
    mongoose.connection.close();
    console.log('🔌 Disconnected from DB');
  }
}

module.exports = seedProjects;
