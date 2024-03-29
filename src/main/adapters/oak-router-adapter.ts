import type {
  Controller,
  ParamsDictionary,
} from "../../presentation/protocols/index.ts";

import { RouterContext } from "oak/router.ts";

export const oakRouterAdapter = (controller: Controller) => {
  return async (
    context: RouterContext<string, ParamsDictionary, Record<string, unknown>>,
  ) => {
    const request = {
      ...(await context.request.body().value || {}),
    };
    const httpResponse = await controller.handle(request);
    const { status, body, message } = httpResponse;
    context.response.status = status;
    context.response.body = body || message;
  };
};
