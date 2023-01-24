import { Router } from "npm:express@^4.18.1";

import { expressRouterAdapter } from "../adapters/index.ts";
import { makeDenomailerSendMailController } from "../factories/controller/index.ts";

const mailRoutes = Router();
mailRoutes.post(
  "/mail",
  expressRouterAdapter(makeDenomailerSendMailController()),
);

export { mailRoutes };
