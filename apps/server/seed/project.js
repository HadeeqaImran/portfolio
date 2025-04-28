const mongoose = require('mongoose');
const Project = require('../src/models/project'); // Adjust the path as needed
const Technology = require('../src/models/technology'); // Import the Technology model
const { TECHNOLOGIES } = require('../src/constants/enums'); // Adjust the path as needed
const projects = [
    {
        title: 'Personal Portfolio Website',
        year: '2025',
        description:
            'A sleek and modern portfolio site built with Next.js, Tailwind CSS, and hosted on Vercel.',
        images: [
            'https://hadeeqa-portfolio.s3.eu-north-1.amazonaws.com/date-md/Screenshot+2025-04-25+at+6.45.40%E2%80%AFpm.png',
            'https://hadeeqa-portfolio.s3.eu-north-1.amazonaws.com/date-md/Screenshot+2025-04-25+at+6.45.32%E2%80%AFpm.png',
            'https://hadeeqa-portfolio.s3.eu-north-1.amazonaws.com/date-md/Screenshot+2025-04-25+at+6.45.01%E2%80%AFpm.png',
        ],
        titleImage: "https://hadeeqa-portfolio.s3.eu-north-1.amazonaws.com/project_placeholder.jpg",
        link: 'https://myportfolio.com',
        github: 'https://github.com/myusername/portfolio',
        video: '/videos/portfolio-demo.mp4',
        technologies: ['REACT', 'MONGODB', 'NODE', 'EXPRESS'],
    },
    {
        title: 'Jarvis CRM',
        year: '2024',
        description:
            'I worked on Jarvis, a suite of four integrated applications, including a CRM and supporting tools, designed to enhance accountability and streamline internal workflows. Jarvis facilitated the entire client journey—from business proposal and onboarding to contract signing and progress tracking.',
        images: [
          'https://hadeeqa-portfolio.s3.eu-north-1.amazonaws.com/Jarvis/Simulator+Screenshot+-+iPhone+15+Pro+-+2025-04-28+at+17.57.58.png',
          'https://hadeeqa-portfolio.s3.eu-north-1.amazonaws.com/Jarvis/Simulator+Screenshot+-+iPhone+15+Pro+-+2025-04-28+at+17.58.08.png',
          'https://hadeeqa-portfolio.s3.eu-north-1.amazonaws.com/Jarvis/Simulator+Screenshot+-+iPhone+15+Pro+-+2025-04-28+at+18.10.39.png',
          'https://hadeeqa-portfolio.s3.eu-north-1.amazonaws.com/Jarvis/Simulator+Screenshot+-+iPhone+15+Pro+-+2025-04-28+at+18.11.04.png',
          'https://hadeeqa-portfolio.s3.eu-north-1.amazonaws.com/Jarvis/Simulator+Screenshot+-+iPhone+15+Pro+-+2025-04-28+at+18.11.13.png',
          'https://hadeeqa-portfolio.s3.eu-north-1.amazonaws.com/Jarvis/Simulator+Screenshot+-+iPhone+15+Pro+-+2025-04-28+at+18.11.23.png',
          'https://hadeeqa-portfolio.s3.eu-north-1.amazonaws.com/Jarvis/Simulator+Screenshot+-+iPhone+15+Pro+-+2025-04-28+at+18.11.32.png',
          'https://hadeeqa-portfolio.s3.eu-north-1.amazonaws.com/Jarvis/Simulator+Screenshot+-+iPhone+15+Pro+-+2025-04-28+at+18.11.44.png',
          'https://hadeeqa-portfolio.s3.eu-north-1.amazonaws.com/Jarvis/Simulator+Screenshot+-+iPhone+15+Pro+-+2025-04-28+at+18.11.56.png',
          'https://hadeeqa-portfolio.s3.eu-north-1.amazonaws.com/Jarvis/Simulator+Screenshot+-+iPhone+15+Pro+-+2025-04-28+at+18.12.04.png',
          'https://hadeeqa-portfolio.s3.eu-north-1.amazonaws.com/Jarvis/Simulator+Screenshot+-+iPhone+15+Pro+-+2025-04-28+at+18.12.18.png'
        ],
        titleImage: "https://hadeeqa-portfolio.s3.eu-north-1.amazonaws.com/Jarvis/ic_jarvis.png",
        link: '',
        github: 'https://github.com/myusername/ecommerce',
        video: 'https://hadeeqa-portfolio.s3.eu-north-1.amazonaws.com/Jarvis/Screen+Recording+2025-04-28+at+6.00.14%E2%80%AFpm.mov',
        technologies: ['REACTNATIVE', 'CODEMAGIC', 'REVOPUSH', 'REDUX'],
    },
    {
        title: 'Fit by Charro',
        year: '2025',
        titleImage: "https://hadeeqa-portfolio.s3.eu-north-1.amazonaws.com/project_placeholder.jpg",
        description:
            'I worked on a web app for a fitness coach to enhance the experience for her subscribers. The app allows users to track their fitness progress, submit updates, and communicate directly with the trainer. This solution has helped improve user engagement and business growth.',
        images: ['/projects/portfolio1.png'],
        link: 'https://myblog.com',
        github: 'https://github.com/myusername/blog',
        video: '/videos/blog-demo.mp4',
        technologies: ['REACT', 'MONGODB', 'NODE', 'EXPRESS'],
    },
    {
        title: 'DateMD',
        year: '2024',
        titleImage: "https://hadeeqa-portfolio.s3.eu-north-1.amazonaws.com/project_placeholder.jpg",
        description:
            'A block augmented hospital management system that allows users to book appointments with doctors, manage their health records, and receive reminders for upcoming appointments.',
        images: [
            'https://hadeeqa-portfolio.s3.eu-north-1.amazonaws.com/date-md/Screenshot+2025-04-25+at+6.45.40%E2%80%AFpm.png',
            'https://hadeeqa-portfolio.s3.eu-north-1.amazonaws.com/date-md/Screenshot+2025-04-25+at+6.45.32%E2%80%AFpm.png',
            'https://hadeeqa-portfolio.s3.eu-north-1.amazonaws.com/date-md/Screenshot+2025-04-25+at+6.45.01%E2%80%AFpm.png',
        ],
        link: 'https://myblog.com',
        github: 'https://github.com/myusername/blog',
        video: 'https://hadeeqa-portfolio.s3.eu-north-1.amazonaws.com/project-demos/date_md_demo.mp4',
        technologies: ['REACT', 'MONGODB', 'NODE', 'EXPRESS'],
    },
];

// Database connection and seeding
async function seedProjects() {
    try {
        projects.forEach(async (project) => {});

        await Project.deleteMany();

        // Loop through the projects and add random technologies
        for (let project of projects) {
            // Get random technologies for each project
            const techDocs = await Technology.find({
                name: { $in: project.technologies },
            });
            console.log(techDocs);
            const techIds = techDocs.map((t) => t._id);
            console.log(techIds);
            const newProject = new Project({
                ...project,
                technologies: techIds,
            });

            await newProject.save();
        }

        console.log('✅ Sample projects seeded successfully.');
    } catch (error) {
        console.error('❌ Error seeding projects:', error);
    } finally {
        console.log('🔌 Disconnected from DB');
    }
}

module.exports = seedProjects;
