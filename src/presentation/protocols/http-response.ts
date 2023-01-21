export type HttpResponse<T = Record<string, unknown>> = {
  status: number;
  message: string;
  body?: T;
};
