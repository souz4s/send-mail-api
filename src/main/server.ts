import { App, Env } from "./config/index.ts";

const startServer = async () => {
  try {
    const app = App();
    app.addEventListener(
      "listen",
      () => console.log(`\n> Server is running`),
    );
    await app.listen({ port: Env.PORT });
  } catch (err) {
    console.error(err);
    Deno.exit(1);
  }
};

startServer();
