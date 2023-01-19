import { SendMail } from "../../domain/use-cases";
import { SendMailAdapter } from "../protocols";

export class NodemailerSendMail implements SendMail {
  constructor(private sendMailAdapter: SendMailAdapter) {}
  async perform(params: SendMail.Params): Promise<void> {
    await this.sendMailAdapter.sendMail(params);
  }
}
