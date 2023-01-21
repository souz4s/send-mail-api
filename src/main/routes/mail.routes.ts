import { Router } from "https://deno.land/x/oak@v11.1.0/mod.ts";

import { oakRouterAdapter } from "../adapters/index.ts";
import { makeDenomailerSendMailController } from "../factories/controller/index.ts";

const mailRoutes = new Router();

mailRoutes.post("/mail", (context) => {
  context.response.body = oakRouterAdapter(
    makeDenomailerSendMailController(),
  );
});

export { mailRoutes };
