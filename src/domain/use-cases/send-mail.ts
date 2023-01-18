import { AuthModel, MailModel } from "../models";

export interface SendMail {
  perform: (params: SendMail.Params) => Promise<void>;
}

export declare namespace SendMail {
  export type Params = {
    auth: AuthModel;
    mailModel: MailModel;
  };
}
