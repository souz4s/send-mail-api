import { SendMailAdapter } from "../../../data/protocols/index.ts";
import { smtpClient } from "../../smtp/index.ts";

import "dotenv/load.ts";

export class MailRepository implements SendMailAdapter {
  sendMail({ auth, mailModel }: SendMailAdapter.Params): void {
    const { SMTP_HOSTNAME, SMTP_PORT } = Deno.env.toObject();
    const connectionOptions = {
      hostname: SMTP_HOSTNAME,
      port: Number(SMTP_PORT),
      ...auth,
    };
    smtpClient.connect(connectionOptions)
      .then(() => smtpClient.send(mailModel))
      .then(() => smtpClient.close())
      .catch((error: string | undefined) => {
        throw new Error(error);
      });
  }
}
