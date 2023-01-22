import { Router } from "https://deno.land/x/oak@v11.1.0/mod.ts";

import { mailRoutes } from "../routes/index.ts";

const router = new Router();
router.use(mailRoutes.routes());

export { router };
