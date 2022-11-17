import { InternalServerError } from "@/presentation/erros";
import { HttpResponse } from "@/presentation/protocols";

export class HttpHelper {
  static CREATED = (): HttpResponse<void> => ({
    statusCode: 201,
    message: "Successfully created",
  });

  static BAD_REQUEST = (err: Error): HttpResponse<Error> => ({
    statusCode: 400,
    body: err,
  });

  static NOT_ACCEPTABLE = <T>(data: T): HttpResponse<T> => ({
    statusCode: 406,
    body: data,
    message: "Sending rejected",
  });

  static INTERNAL_SERVER_ERROR = (err: Error): HttpResponse<Error> => ({
    statusCode: 500,
    body: new InternalServerError(err.stack || ""),
  });
}
