const Technology = require('../src/models/technology');

const technologies = [
    {
        name: 'REACT',
        displayName: 'React',
        svgPath:
            'M12 0C18.627 0 24 5.373 24 12S18.627 24 12 24 0 18.627 0 12 5.373 0 12 0z',
    },
    {
        name: 'TAILWIND',
        displayName: 'Tailwind CSS',
        svgPath: 'M0 0h24v24H0z',
    },
    {
        name: 'VERCEL',
        displayName: 'Vercel',
        svgPath: 'M7.5 1L1.5 13h12L7.5 1z',
    },
    {
        name: 'AWS',
        displayName: 'AWS',
        svgPath: 'M12 2L2 7v7l10 5 10-5V7z',
    },
    {
        name: 'NODE',
        displayName: 'Node.js',
        svgPath: 'M12 2L2 7v10l10 5 10-5V7z',
    },
    {
        name: 'EXPRESS',
        displayName: 'Express',
        svgPath: 'M0 0h24v24H0z',
    },
    {
        name: 'MONGODB',
        displayName: 'MongoDB',
        svgPath: 'M6 0L3 12l3 12L12 24l3-12-3-12L6 0z',
    },
    {
        name: 'MYSQL',
        displayName: 'MySQL',
        svgPath: 'M0 0h24v24H0z',
    },
    {
        name: 'POSTGRESQL',
        displayName: 'PostgreSQL',
        svgPath: 'M0 0h24v24H0z',
    },
    {
        name: 'REDUX',
        displayName: 'Redux',
        svgPath: 'M0 0h24v24H0z',
    },
    {
        name: 'NEXTJS',
        displayName: 'Next.js',
        svgPath: 'M0 0h24v24H0z',
    },
    {
        name: 'GITHUB',
        displayName: 'GitHub',
        svgPath: 'M12 0C5.373 0 0 5.373 0 12c0 5.302...',
    },
    {
      name: 'GIT',
      displayName: 'Git',
      svgPath: 'M12 0C5.373 0 0 5.373 0 12c0 5.302...',
    },
    {
        name: 'DOCKER',
        displayName: 'Docker',
        svgPath: 'M0 0h24v24H0z',
    },
    {
        name: 'KUBERNETES',
        displayName: 'Kubernetes',
        svgPath: 'M0 0h24v24H0z',
    },
    {
        name: 'REACTNATIVE',
        displayName: 'React Native',
        svgPath: 'M0 0h24v24H0z',
    },
    {
      name: 'CODEMAGIC',
      displayName: 'Codemagic',
      svgPath: 'M0 0h24v24H0z',
    },
    {
      name: 'REVOPUSH',
      displayName: 'Revopush',
      svgPath: 'M0 0h24v24H0z',
    },
    {
      name: 'REDUX',
      displayName: 'Redux',
      svgPath: 'M0 0h24v24H0z',
    },
    {
      name: 'NEXT',
      displayName: 'Next JS',
      svgPath: 'M0 0h24v24H0z',
    },
    
];

async function seedTechnologies() {
    try {
        await Technology.deleteMany();
        await Technology.insertMany(technologies);
        console.log('Technologies seeded successfully.');
    } catch (error) {
        console.error('Error seeding technologies:', error);
    }
}

module.exports = seedTechnologies;
