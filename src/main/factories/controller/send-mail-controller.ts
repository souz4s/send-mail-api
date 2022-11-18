import { makeNodemailerSendMail } from "@/main/factories/use-cases/nodemailer";
import { SendMailController } from "@/presentation/controllers";

export const makeNodemailerSendMailController = () => {
  const controller = new SendMailController(makeNodemailerSendMail());
  return controller;
};
