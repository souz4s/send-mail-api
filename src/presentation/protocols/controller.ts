import type { HttpResponse } from "@/presentation/protocols";

export interface Controller<T = unknown> {
  handle: (params: T) => Promise<HttpResponse<T>>;
}
