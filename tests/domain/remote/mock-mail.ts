import { SendMail } from "@/domain/use-cases";

import { faker } from "@faker-js/faker";

export const mockCreateMailParams = (): SendMail.Params => ({
  auth: {
    user: faker.internet.email(),
    pass: faker.internet.password(20),
  },
  mailModel: {
    from: faker.internet.email(),
    to: faker.internet.email(),
    subject: faker.lorem.words(),
    text: faker.lorem.text(),
    html: faker.lorem.paragraphs(),
  },
});
