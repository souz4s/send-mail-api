import { HttpResponse } from "../protocols/index.ts";
import { HttpError } from "../helpers/index.ts";

export class HttpHelper {
  static CREATED = <T>(): HttpResponse<T> => ({
    status: 201,
    message: "Successfully created",
  });

  static BAD_REQUEST = (error: HttpError): HttpResponse<HttpError> => ({
    status: 400,
    message: "Bad request",
    body: error,
  });

  static INTERNAL_SERVER_ERROR = (
    error: HttpError,
  ): HttpResponse<HttpError> => ({
    status: 500,
    message: "Internal Server Error",
    body: error,
  });
}
