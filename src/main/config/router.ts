import { mailRoutes } from "../routes/index.ts";

import { Router } from "oak/router.ts";

const router = new Router();
router.use(mailRoutes.routes());
router.use(mailRoutes.allowedMethods());

export { router };
