import { AuthModel, TlsModel } from "../models/index.ts";

export type SmtpModel = {
  host: string;
  port: number;
  secure: boolean;
  auth: AuthModel;
  tls: TlsModel;
};
