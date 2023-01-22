import { AuthModel, MailModel } from "../../domain/models/index.ts";
import { SendMail } from "../../domain/use-cases/index.ts";
import { MissingParametersError } from "../errors/index.ts";
import { HttpError, HttpHelper } from "../helpers/index.ts";
import { Controller, HttpResponse } from "../protocols/index.ts";

export class SendMailController implements Controller {
  constructor(private readonly sendMail: SendMail) {}
  async handle(
    request: SendMailControllerRequest,
  ): Promise<HttpResponse<SendMailControllerResponse>> {
    const auth = request["auth"] as AuthModel;
    const mailModel = request["mailModel"] as MailModel;
    if (!auth || !mailModel.from || !mailModel.to) {
      return HttpHelper.BAD_REQUEST(
        new MissingParametersError() as unknown as HttpError,
      );
    }
    try {
      await this.sendMail.perform({ auth, mailModel });
      return HttpHelper.CREATED();
    } catch (err) {
      return HttpHelper.INTERNAL_SERVER_ERROR(err as HttpError);
    }
  }
}

export type SendMailControllerRequest = Record<string, unknown>;
export type SendMailControllerResponse = Record<string, unknown>;
