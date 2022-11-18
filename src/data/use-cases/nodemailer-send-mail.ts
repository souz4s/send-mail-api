import { SendMail } from "@/domain/use-cases";
import { SendMailAdapter } from "@/data/protocols";

export class NodemailerSendMail implements SendMail {
  constructor(private readonly sendMailAdapter: SendMailAdapter) {}
  perform = async (params: SendMail.Params): Promise<void> => {
    await this.sendMailAdapter.sendMail({
      ...params,
    });
  };
}
