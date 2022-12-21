import { AuthModel, MailModel } from "@/domain/models";
import { SendMail } from "@/domain/use-cases";
import { MissingParametersError } from "@/presentation/erros";
import { HttpHelper } from "@/presentation/helpers";
import { Controller } from "@/presentation/protocols";

export class SendMailController implements Controller {
  constructor(private readonly sendMail: SendMail) {}
  handle = async (request: SendMailController.Request) => {
    const sendMail = request;
    const requiredFields = sendMail.auth && sendMail.mailModel.from && sendMail.mailModel.to;
    if (!requiredFields) return HttpHelper.BAD_REQUEST(new MissingParametersError());
    if (sendMail.auth.user !== sendMail.mailModel.from)
      return HttpHelper.NOT_ACCEPTABLE("The user's email cannot be different from the sender's email.");
    try {
      await this.sendMail.perform(sendMail);
      return HttpHelper.CREATED();
    } catch (err) {
      return HttpHelper.INTERNAL_SERVER_ERROR(err as Error);
    }
  };
}

export namespace SendMailController {
  export type Request = { auth: AuthModel; mailModel: MailModel };
}
