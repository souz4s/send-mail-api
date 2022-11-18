import { SendMail } from "@/domain/use-cases";

import { faker } from "@faker-js/faker";

const user = faker.internet.email();
export const mockSendMailParams = (): SendMail.Params => ({
  auth: {
    user: user,
    pass: faker.internet.password(20),
  },
  mailModel: {
    from: user,
    to: faker.internet.email(),
    subject: faker.lorem.words(),
    text: faker.lorem.text(),
    html: faker.lorem.paragraphs(),
  },
});
