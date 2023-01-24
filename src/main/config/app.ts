import cors from "npm:cors@^2.8.5";
import express from "npm:express@^4.18.1";

import { router } from "./index.ts";

export const App = () => {
  const app = express();
  app.use(cors());
  app.use(express.json());
  app.use(router);
  return app;
};
