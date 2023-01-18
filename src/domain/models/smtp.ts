import { AuthModel, TlsModel } from "@/domain/models";

export type SmtpModel = {
  host: string;
  port: number;
  secure: boolean;
  auth: AuthModel;
  tls: TlsModel;
};
