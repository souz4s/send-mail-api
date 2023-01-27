import { AuthModel, MailModel } from "../../domain/models/index.ts";

export interface SendMailAdapter {
  sendMail(params: SendMailAdapter.Params): void;
}

export declare namespace SendMailAdapter {
  export type Params = {
    auth: AuthModel;
    mailModel: MailModel;
  };
}
