import { Code } from "lucide-react";
import { ReactSvg, NodeSvg, ExpressSvg, MongoDBSvg, NextSvg, DockerSvg, CodemagicSvg, AwsSvg, FirebaseSvg, TypescriptSvg, ReduxSvg, RevopushSvg } from "../components/Svgs";

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
      return "M0 0h24v24H0z";
    case "NEXTJS":
      return <NextSvg />;
    case "GITHUB":
      return "M12 0C5.373 0 0 5.373 0 12c0 5.302...";
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
    default:
      return "";
  }
};
