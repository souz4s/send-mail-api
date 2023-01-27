import { oakRouterAdapter } from "../adapters/index.ts";
import { makeDenomailerSendMailController } from "../factories/controller/index.ts";

import { Router } from "oak/router.ts";

const mailRoutes = new Router();
mailRoutes.post(
  "/mail",
  oakRouterAdapter(makeDenomailerSendMailController()),
);

export { mailRoutes };
