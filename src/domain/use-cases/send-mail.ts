import { AuthModel, MailModel } from "@/domain/models";

export interface SendMail {
  perform: (params: SendMail.Params) => Promise<null>;
}

export namespace SendMail {
  export type Params = { auth: AuthModel; mailModel: MailModel };
}
