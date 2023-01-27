import { SendMailAdapter } from "../../../data/protocols/index.ts";
import { denomailerClient } from "../../denomailer/index.ts";

import "https://deno.land/x/dotenv@v3.2.0/load.ts";

export class MailRepository implements SendMailAdapter {
  sendMail({ auth, mailModel }: SendMailAdapter.Params): void {
    const { SMTP_HOSTNAME, SMTP_PORT } = Deno.env.toObject();
    const connectionOptions = {
      hostname: SMTP_HOSTNAME,
      port: Number(SMTP_PORT),
      ...auth,
    };
    denomailerClient.connect(connectionOptions)
      .then(() => denomailerClient.send(mailModel))
      .then(() => denomailerClient.close())
      .catch((error: string | undefined) => {
        throw new Error(error);
      });
  }
}
