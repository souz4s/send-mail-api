import { Router } from "express";

import { mailRoutes } from "@/main/routes";

const router = Router();
router.use(mailRoutes);

export { router, mailRoutes };
