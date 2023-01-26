import { Router } from "https://deno.land/x/oak@v11.1.0/mod.ts";

import { oakRouterAdapter } from "../adapters/index.ts";
import { makeSmtpSendMailController } from "../factories/controller/index.ts";

const mailRoutes = new Router();
mailRoutes.post(
  "/mail",
  oakRouterAdapter(makeSmtpSendMailController()),
);

export { mailRoutes };
