import { oakCors } from "https://deno.land/x/cors@v1.2.2/mod.ts";
import { Application } from "https://deno.land/x/oak@v11.1.0/mod.ts";

import { router } from "../config/index.ts";

export const App = () => {
  const app = new Application();
  app.use(oakCors());
  app.use(() => router);
  return app;
};
