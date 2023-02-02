import { SendMail } from "../../../src/domain/use-cases/index.ts";

import { faker } from "npm:@faker-js/faker@^7.6.0";

export const mockSendMailParams = (): SendMail.Params => {
  return {
    auth: {
      username: `Sender <${faker.internet.email()}>`,
      password: faker.internet.password(20),
    },
    mailModel: {
      from: `Recipient <${faker.internet.email()}>`,
      to: faker.internet.email(),
      subject: faker.lorem.words(2),
      content: faker.lorem.words(),
      html: faker.lorem.paragraphs(),
    },
  };
};
