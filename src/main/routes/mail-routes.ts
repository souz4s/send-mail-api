/* eslint-disable @typescript-eslint/no-misused-promises */
import { Router } from "express";

import { expressRouterAdapter } from "@/main/adapters";
import { makeNodemailerSendMailController } from "@/main/factories/controller";

const mailRoutes = Router();

mailRoutes.post("/mail", expressRouterAdapter(makeNodemailerSendMailController()));

export { mailRoutes };
