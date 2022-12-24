import { AuthModel, MailModel } from "@/domain/models";
import { SendMail } from "@/domain/use-cases";
import { MissingParametersError } from "@/presentation/erros";
import { HttpHelper } from "@/presentation/helpers";
import { Controller } from "@/presentation/protocols";

export class SendMailController implements Controller {
  constructor(private readonly sendMail: SendMail) {}
  handle = async (request: SendMailController.Request): Promise<SendMailController.Response> => {
    const { auth, mailModel } = request;
    if (!auth || !mailModel.from || !mailModel.to) return HttpHelper.BAD_REQUEST(new MissingParametersError());
    if (auth.user !== mailModel.from) return HttpHelper.NOT_ACCEPTABLE("The user's email cannot be different from the sender's email.");
    try {
      await this.sendMail.perform(request);
      return HttpHelper.CREATED();
    } catch (err) {
      return HttpHelper.INTERNAL_SERVER_ERROR(err as Error);
    }
  };
}

export namespace SendMailController {
  export type Request = { auth: AuthModel; mailModel: MailModel };
  export type Response = { statusCode: number; body?: any };
}
