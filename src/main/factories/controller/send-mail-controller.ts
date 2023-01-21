import { makeDenomailerSendMail } from "../use-cases/denomailer/index.ts";
import { SendMailController } from "../../../presentation/controllers/index.ts";

export const makeDenomailerSendMailController = () => {
  const controller = new SendMailController(makeDenomailerSendMail());
  return controller;
};
