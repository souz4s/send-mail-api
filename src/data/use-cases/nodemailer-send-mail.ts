import { SendMail } from "../../domain/use-cases/index.ts";
import { SendMailAdapter } from "../protocols/index.ts";

export class NodemailerSendMail implements SendMail {
  constructor(private sendMailAdapter: SendMailAdapter) {}
  async perform(params: SendMail.Params): Promise<void> {
    await this.sendMailAdapter.sendMail(params);
  }
}
