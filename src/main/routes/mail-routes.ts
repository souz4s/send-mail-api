import { oakRouterAdapter } from "../adapters/index.ts";
import { makeSmtpSendMailController } from "../factories/controller/index.ts";

import { Router } from "oak/router.ts";

const mailRoutes = new Router();
mailRoutes.post(
  "/mail",
  oakRouterAdapter(makeSmtpSendMailController()),
);

export { mailRoutes };
