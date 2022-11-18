import { NodemailerSendMail } from "@/data/use-cases";
import { MailRepository } from "@/infrastructure/nodemailer/repositories";

export const makeNodemailerSendMail = (): NodemailerSendMail => {
  const nodemailerRepository = new MailRepository();
  return new NodemailerSendMail(nodemailerRepository);
};
