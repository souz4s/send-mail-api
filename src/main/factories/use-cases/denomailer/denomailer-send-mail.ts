import { DenomailerSendMail } from "../../../../data/use-cases/index.ts";
import { MailRepository } from "../../../../infrastructure/denomailer/repositories/index.ts";

export const makeDenomailerSendMail = (): DenomailerSendMail => {
  const denomailerRepository = new MailRepository();
  return new DenomailerSendMail(denomailerRepository);
};
