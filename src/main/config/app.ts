import { router } from "./index.ts";

import { oakCors } from "https://deno.land/x/cors@v1.2.2/oakCors.ts";
import { Application } from "https://deno.land/x/oak@v11.1.0/application.ts";

export const App = () => {
  const app = new Application();
  app.use(oakCors());
  app.use(router.routes());
  app.use(router.allowedMethods());
  return app;
};
