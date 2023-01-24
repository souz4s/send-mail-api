export type HttpResponse<T> = {
  status: number;
  message: string;
  body?: T;
};
