import { Configs } from "./types";
import devConfigs from "./development";
import prodConfigs from "./production";

const getConfigs = (): Configs => {
  switch (process.env.NODE_ENV) {
    case "production":
      return prodConfigs;
    default:
      return devConfigs;
  }
};

const configs = (): Configs => {
  return getConfigs();
};

export default configs();
