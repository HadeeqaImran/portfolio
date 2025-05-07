import React from 'react';
import { AwsSvg, ExpressSvg, MongoDBSvg, NextSvg, NodeSvg, ReactSvg, ReduxSvg, TailwindSvg, VercelSvg, GitSvg, GithubSvg, DockerSvg, RevopushSvg, CodemagicSvg, PytorchSvg, ScikitLearnSvg, HtmlSvg } from '../../assets/svgs';

export const Technologies = [
    {
        name: 'REACT',
        displayName: 'React',
        svgIcon: <ReactSvg />
    },
    {
        name: 'TAILWIND',
        displayName: 'Tailwind CSS',
        svgPath: <TailwindSvg />,
    },
    {
        name: 'VERCEL',
        displayName: 'Vercel',
        svgPath: <VercelSvg />,
    },
    {
        name: 'AWS',
        displayName: 'AWS',
        svgPath: <AwsSvg />,
    },
    {
        name: 'NODE',
        displayName: 'Node.js',
        svgPath: <NodeSvg />,
    },
    {
        name: 'EXPRESS',
        displayName: 'Express',
        svgPath: <ExpressSvg />,
    },
    {
        name: 'MONGODB',
        displayName: 'MongoDB',
        svgPath: <MongoDBSvg />,
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
        svgPath: <ReduxSvg />,
    },
    {
        name: 'NEXTJS',
        displayName: 'Next.js',
        svgPath: <NextSvg />,
    },
    {
        name: 'GITHUB',
        displayName: 'GitHub',
        svgPath: <GithubSvg />,
    },
    {
      name: 'GIT',
      displayName: 'Git',
      svgPath: <GitSvg />,
    },
    {
        name: 'DOCKER',
        displayName: 'Docker',
        svgPath: <DockerSvg />,
    },
    {
        name: 'KUBERNETES',
        displayName: 'Kubernetes',
        svgPath: 'M0 0h24v24H0z',
    },
    {
        name: 'REACTNATIVE',
        displayName: 'React Native',
        svgPath: <ReactSvg />,
    },
    {
      name: 'CODEMAGIC',
      displayName: 'Codemagic',
      svgPath: <CodemagicSvg />,
    },
    {
      name: 'REVOPUSH',
      displayName: 'Revopush',
      svgPath: <RevopushSvg height={64} width={64}/>,
    },
    {
        name: 'PYTORCH',
        displayName: 'Pytorch',
        svgPath: <PytorchSvg height={30} width={30}/>,
    },
    {
        name: 'SCIKITLEARN',
        displayName: 'Scikit-learn',
        svgPath: <ScikitLearnSvg height={64} width={64}/>,
    },
    {
        name: 'HTML',
        displayName: 'HMTL',
        svgPath: <HtmlSvg height={64} width={64}/>,
    }
];