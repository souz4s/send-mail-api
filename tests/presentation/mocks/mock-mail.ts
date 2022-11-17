import { SendMail } from "@/domain/use-cases";

export class SendMailSpy implements SendMail {
  params: SendMail.Params | undefined;
  callsCount = 0;
  perform = async (params: SendMail.Params): Promise<void> => {
    this.callsCount++;
    this.params = params;
  };
}
