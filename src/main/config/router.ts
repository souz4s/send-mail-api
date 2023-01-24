import { Router } from "npm:express@^4.18.1";

import { mailRoutes } from "../routes/index.ts";

const router = Router();
router.use(mailRoutes);

export { router };
