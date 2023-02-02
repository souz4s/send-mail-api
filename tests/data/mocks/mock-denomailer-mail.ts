import { SendMailAdapter } from "../../../src/data/protocols/index.ts";

export class SendMailAdapterSpy implements SendMailAdapter {
  params: SendMailAdapter.Params | undefined;
  sendMail(params: SendMailAdapter.Params): void {
    this.params = params;
  }
}
