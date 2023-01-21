import type { Controller } from "../../presentation/protocols/index.ts";

import { Request, Response } from "https://deno.land/x/oak@v11.1.0/mod.ts";

export const oakRouterAdapter = (controller: Controller) => {
  return async (req: Request, res: Response) => {
    const httpResponse = await controller.handle(
      req as unknown as Record<string, unknown>,
    );
    if (httpResponse.status >= 200 && httpResponse.status <= 299) {
      res.status = httpResponse.status;
      res.body = httpResponse.body;
    } else {
      res.status = httpResponse.status;
      res.body = { message: httpResponse.body as unknown as string };
    }
  };
};
