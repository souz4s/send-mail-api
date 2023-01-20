import type { HttpResponse } from "../protocols/index.ts";

export interface Controller<T = unknown> {
  handle: (params: T) => Promise<HttpResponse<T>>;
}
