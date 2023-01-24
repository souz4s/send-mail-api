import { App, Env } from "./config/index.ts";

const startServer = () => {
  try {
    const app = App();
    app.listen(
      Env.PORT,
      () => console.log(`\n> Server is running on port ${Env.PORT}`),
    );
  } catch (err) {
    console.error(err);
    Deno.exit(1);
  }
};

startServer();
