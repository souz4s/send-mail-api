import { AuthModel, MailModel } from "@/domain/models";

export interface SendMailAdapter {
  sendMail: (params: SendMailAdapter.Params) => Promise<null>;
}

export namespace SendMailAdapter {
  export type Params = { auth: AuthModel; mailModel: MailModel };
}
