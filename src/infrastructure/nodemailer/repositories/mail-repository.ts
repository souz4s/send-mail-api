import { SendMailAdapter } from "@/data/protocols";
import { nodemailerClient } from "@/infrastructure/nodemailer";

export class MailRepository implements SendMailAdapter {
  sendMail = async (params: SendMailAdapter.Params): Promise<void> => {
    const transporter = nodemailerClient.createTransport({
      host: "smtp.mailtrap.io",
      port: 2525,
      secure: false,
      auth: params.auth,
      tls: { rejectUnauthorized: false },
    });
    await transporter.sendMail(params.mailModel);
  };
}
