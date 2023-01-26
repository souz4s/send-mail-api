import { SmtpSendMail } from "../../../../data/use-cases/index.ts";
import { MailRepository } from "../../../../infrastructure/smtp/repositories/index.ts";

export const makeSmtpSendMail = (): SmtpSendMail => {
  const smtpRepository = new MailRepository();
  return new SmtpSendMail(smtpRepository);
};
