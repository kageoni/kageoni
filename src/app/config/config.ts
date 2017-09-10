import { environment } from "../../environments/environment";
import { configDev } from "./config-dev";
import { configProd } from "./config-prod";

export let config: any = {
  api: environment.mock ? configDev.api : configProd.api,
  pubSubEvents: {
    loadCategories: 'loadCategories'
  },
  login: {
    tokenName: 'authToken'
  }
};
