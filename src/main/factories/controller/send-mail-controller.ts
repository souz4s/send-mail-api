import { makeSmtpSendMail } from "../use-cases/smtp/index.ts";
import { SendMailController } from "../../../presentation/controllers/index.ts";

export const makeSmtpSendMailController = (): SendMailController => {
  return new SendMailController(makeSmtpSendMail());
};
