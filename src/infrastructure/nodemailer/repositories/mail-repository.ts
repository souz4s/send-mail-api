import { SendMailAdapter } from "@/data/protocols";
import { nodemailerClient } from "@/infrastructure/nodemailer";

export class MailRepository implements SendMailAdapter {
  sendMail = async (params: SendMailAdapter.Params): Promise<void> => {
    const transporter = nodemailerClient.createTransport({
      host: "smtp-mail.outlook.com",
      port: 587,
      secure: false,
      auth: params.auth,
      tls: { rejectUnauthorized: false },
    });
    await transporter.sendMail(params.mailModel);
  };
}
