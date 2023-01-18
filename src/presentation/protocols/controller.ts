import type { HttpResponse } from "../protocols";

export interface Controller<T = unknown> {
  handle: (params: T) => Promise<HttpResponse<T>>;
}
