import { router } from "./index.ts";

import { oakCors } from "oakCors/oakCors.ts";
import { Application } from "oak/application.ts";

export const App = () => {
  const app = new Application();
  app.use(oakCors());
  app.use(router.routes());
  app.use(router.allowedMethods());
  return app;
};
