import { SendMailAdapter } from "../../../data/protocols/index.ts";
import { SMTPClient } from "../../denomailer/index.ts";

import "https://deno.land/x/dotenv@v3.2.0/load.ts";

export class MailRepository implements SendMailAdapter {
  private client: SMTPClient | undefined;
  constructor() {}
  async sendMail(params: SendMailAdapter.Params): Promise<void> {
    try {
      const connectionOptions = {
        connection: {
          hostname: String(Deno.env.get("SMTP_HOSTNAME")),
          port: Number(Deno.env.get("SMTP_PORT")),
          tls: Boolean(Deno.env.get("SMTP_TLS")),
          auth: params.auth,
        },
      };
      this.client = new SMTPClient(connectionOptions);
      await this.client.send(params.mailModel);
    } catch (error) {
      throw error;
    }
  }
}
