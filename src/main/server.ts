import { App, Env } from "./config/index.ts";

const startServer = async () => {
  let serverStarted = false;
  try {
    const app = await App();
    app.listen({ port: Env.PORT });
    serverStarted = true;
  } catch (err) {
    console.error(err);
    Deno.exit(1);
  }

  if (serverStarted) {
    console.log(`\n> Server is running on port ${Env.PORT}`);
  }
};

startServer();
