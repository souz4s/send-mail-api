import { App, Env } from "@/main/config";

try {
  const app = App();
  app.listen(Env.PORT, () => console.log(`\n> Server is running on port ${Env.PORT}`));
} catch (err) {
  console.log(err);
}
