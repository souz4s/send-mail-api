import { HttpResponse } from "@/presentation/protocols";

export class HttpHelper {
  static CREATED = (): HttpResponse<void> => ({
    statusCode: 201,
    message: "Successfully created",
  });

  static BAD_REQUEST = (error: string | object): HttpResponse<string | object> => ({
    statusCode: 400,
    body: error,
  });

  static NOT_ACCEPTABLE = <T>(data: T): HttpResponse<T> => ({
    statusCode: 406,
    body: data,
  });

  static INTERNAL_SERVER_ERROR = (error: string | object): HttpResponse<string | object> => ({
    statusCode: 500,
    body: error,
  });
}
