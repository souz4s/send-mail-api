import type { Request, Response } from "npm:express@^4.18.1";

import type { Controller } from "../../presentation/protocols/index.ts";

export const expressRouterAdapter = (controller: Controller) => {
  return async (req: Request, res: Response) => {
    const request = {
      ...(req.body || {}),
      ...(req.params || {}),
    };
    const httpResponse = await controller.handle(request);
    if (httpResponse.status >= 200 && httpResponse.status <= 299) {
      res.status(httpResponse.status).json(httpResponse.body);
    } else {
      res.status(httpResponse.status).json({
        message: httpResponse.body as string,
      });
    }
  };
};
