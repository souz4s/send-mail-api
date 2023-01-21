import type { HttpResponse } from "../protocols/index.ts";

export interface Controller<T = Record<string, unknown>> {
  handle: (params: T) => Promise<HttpResponse<T>>;
}
