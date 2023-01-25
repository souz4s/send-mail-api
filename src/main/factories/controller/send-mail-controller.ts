import { makeDenomailerSendMail } from "../use-cases/denomailer/index.ts";
import { SendMailController } from "../../../presentation/controllers/index.ts";

export const makeDenomailerSendMailController = (): SendMailController => {
  return new SendMailController(makeDenomailerSendMail());
};
