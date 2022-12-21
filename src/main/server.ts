import { App, Env } from "@/main/config";

const startServer = () => {
  try {
    const app = App();
    app.listen(Env.PORT, () => console.log(`\n> Server is running on port ${Env.PORT}`));
  } catch (err) {
    console.error(err);
  }
};

startServer();
