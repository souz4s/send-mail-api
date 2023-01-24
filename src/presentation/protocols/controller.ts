import { AuthModel, MailModel } from "../../domain/models/index.ts";
import type { HttpResponse } from "../protocols/index.ts";

export interface Controller {
  handle: (
    request: Controller.Request,
  ) => Promise<HttpResponse<Controller.Response>>;
}

export declare namespace Controller {
  export type Request = {
    auth: AuthModel;
    mailModel: MailModel;
  };
  export type Response = {
    status: number;
    body: string;
  };
}
