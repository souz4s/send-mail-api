import { AuthModel } from "../models/index.ts";

export type SmtpModel = {
  hostname: string;
  port: number;
  tls: boolean;
  auth: AuthModel;
};
