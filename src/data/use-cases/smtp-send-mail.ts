import { SendMail } from "../../domain/use-cases/index.ts";
import { SendMailAdapter } from "../protocols/index.ts";

export class SmtpSendMail implements SendMail {
  constructor(private sendMailAdapter: SendMailAdapter) {}
  perform(params: SendMail.Params): void {
    this.sendMailAdapter.sendMail(params);
  }
}
