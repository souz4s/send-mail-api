import { AuthModel, TlsModel } from "../models";

export type SmtpModel = {
  host: string;
  port: number;
  secure: boolean;
  auth: AuthModel;
  tls: TlsModel;
};
