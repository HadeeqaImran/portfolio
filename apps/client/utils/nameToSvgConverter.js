import { ReactSvg, NodeSvg, ExpressSvg, MongoDBSvg } from "../components/Svgs";

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
      return "M0 0h24v24H0z";
    case "NEXTJS":
      return "M0 0h24v24H0z";
    case "GITHUB":
      return "M12 0C5.373 0 0 5.373 0 12c0 5.302...";
    case "DOCKER":
      return "M0 0h24v24H0z";
    case "KUBERNETES":
      return "M0 0h24v24H0z";
    case "REACTNATIVE":
      return "M0 0h24v24H0z";
    default:
      return "";
  }
};
