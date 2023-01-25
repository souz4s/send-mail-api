import type {
  Controller,
  ParamsDictionary,
} from "../../presentation/protocols/index.ts";

import { RouterContext } from "https://deno.land/x/oak@v11.1.0/mod.ts";

export const oakRouterAdapter = (controller: Controller) => {
  return async (
    context: RouterContext<string, ParamsDictionary, Record<string, unknown>>,
  ) => {
    const request = {
      ...(await context.request.body().value || {}),
    };
    const httpResponse = await controller.handle(request);
    if (httpResponse.status >= 200 && httpResponse.status <= 299) {
      context.response.status = httpResponse.status;
      context.response.body = httpResponse.body || httpResponse.message;
    } else {
      context.response.status = httpResponse.status;
      context.response.body = { response: httpResponse.body };
    }
  };
};
