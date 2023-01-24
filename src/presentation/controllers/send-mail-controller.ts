import { SendMail } from "../../domain/use-cases/index.ts";
import { MissingParametersError } from "../errors/index.ts";
import { HttpError, HttpHelper } from "../helpers/index.ts";
import { Controller, HttpResponse } from "../protocols/index.ts";

export class SendMailController implements Controller {
  constructor(private readonly sendMail: SendMail) {}
  handle = async (
    request: Controller.Request,
  ): Promise<HttpResponse<Controller.Response>> => {
    const { auth, mailModel } = request;
    if (!auth || !mailModel.from || !mailModel.to || mailModel.subject) {
      return HttpHelper.BAD_REQUEST(
        new MissingParametersError().errorDetails,
      ) as HttpResponse<Controller.Response>;
    }
    try {
      await this.sendMail.perform(request);
      return HttpHelper.CREATED();
    } catch (err) {
      return HttpHelper.INTERNAL_SERVER_ERROR(err as HttpError) as HttpResponse<
        Controller.Response
      >;
    }
  };
}
