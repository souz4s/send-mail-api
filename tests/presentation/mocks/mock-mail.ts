import { SendMail } from "../../../src/domain/use-cases/index.ts";

import { faker } from "npm:@faker-js/faker@^7.6.0";

export class SendMailSpy implements SendMail {
  params: SendMail.Params | undefined;
  callsCount = 0;
  result = parseInt(faker.random.numeric(2));
  perform = (params: SendMail.Params): void => {
    this.callsCount++;
    this.params = params;
  };
}
