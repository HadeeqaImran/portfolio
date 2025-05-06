import { Code } from "lucide-react";
import { GithubSvg, ReactSvg, NodeSvg, ExpressSvg, MongoDBSvg, NextSvg, DockerSvg, CodemagicSvg, AwsSvg, FirebaseSvg, TypescriptSvg, ReduxSvg, RevopushSvg, TailwindSvg, GitSvg, VercelSvg } from "../assets/svgs";

export const nameToSvgConverter = (name) => {
  switch (name) {
    case "REACT":
      return <ReactSvg />;
    case "NODE":
      return <NodeSvg />;
    case "EXPRESS":
      return <ExpressSvg />;
    case "MONGODB":
      return <MongoDBSvg />;
    case "MYSQL":
      return "M0 0h24v24H0z";
    case "POSTGRESQL":
      return "M0 0h24v24H0z";
    case "REDUX":
      return <ReduxSvg />;
    case "TAILWIND":
      return <TailwindSvg />;
    case "NEXTJS":
      return <NextSvg />;
    case "GITHUB":
      return <GithubSvg />;
    case "DOCKER":
      return <DockerSvg />;
    case "KUBERNETES":
      return "M0 0h24v24H0z";
    case "REACTNATIVE":
      return <ReactSvg />;
    case "CODEMAGIC":
        return <CodemagicSvg />;
    case "REVOPUSH":
        return <RevopushSvg height={64} width={64}/>;
    case "AWS":
        return <AwsSvg />;
    case "FIREBASE":
        return <FirebaseSvg />;
    case "TYPESCRIPT":
        return <TypescriptSvg />;
    case "GIT":
        return <GitSvg />;
    case "VERCEL":
        return <VercelSvg />;
    default:
      return "";
  }
};
