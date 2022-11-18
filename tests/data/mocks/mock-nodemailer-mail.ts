import { SendMailAdapter } from "@/data/protocols";

export class SendMailAdapterSpy implements SendMailAdapter {
  params: SendMailAdapter.Params | undefined;
  sendMail = async (params: SendMailAdapter.Params): Promise<void> => {
    this.params = params;
  };
}
