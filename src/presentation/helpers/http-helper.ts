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

  static NOT_ACCEPTABLE = <T>(data: T): HttpResponse<T> => ({
    status: 406,
    message: "Not acceptable",
    body: data,
  });

  static INTERNAL_SERVER_ERROR = (
    error: HttpError,
  ): HttpResponse<HttpError> => ({
    status: 500,
    message: "Internal Server Error",
    body: error,
  });
}
