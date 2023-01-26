import { mailRoutes } from "../routes/index.ts";

import { Router } from "https://deno.land/x/oak@v11.1.0/mod.ts";

const router = new Router();
router.use(mailRoutes.routes());
router.use(mailRoutes.allowedMethods());

export { router };
