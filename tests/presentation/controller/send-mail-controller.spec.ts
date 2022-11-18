// @ts-nocheck
import { SendMailController } from "@/presentation/controllers";
import { mockSendMailParams } from "@/tests/domain/remote";
import { SendMailSpy } from "@/tests/presentation/mocks";

import { faker } from "@faker-js/faker";

const makeSut = () => {
  const sendMailSpy = new SendMailSpy();
  const sut = new SendMailController(sendMailSpy);
  return { sut, sendMailSpy };
};

describe("SendMailController", () => {
  it("should call 'sendMail' when send mail", async () => {
    const { sut, sendMailSpy } = makeSut();
    await sut.handle(mockSendMailParams());
    expect(sendMailSpy.callsCount).toBe(1);
  });

  it("should return the status created when sending mail", async () => {
    const { sut, sendMailSpy } = makeSut();
    const result = await sut.handle(mockSendMailParams());
    expect(sendMailSpy.callsCount).toBe(1);
    expect(result.statusCode).toBe(201);
  });

  it("should return bad request error when missing required parameters", async () => {
    const { sut, sendMailSpy } = makeSut();
    const result = await sut.handle({ auth: { pass: undefined }, mailModel: { from: undefined } });
    expect(sendMailSpy.callsCount).toBe(0);
    expect(result.statusCode).toBe(400);
  });

  it("should return the status not acceptable when the user's email is different from the sender's email", async () => {
    const { sut, sendMailSpy } = makeSut();
    const result = await sut.handle({
      auth: { user: "api@test.com", pass: faker.internet.password() },
      mailModel: { from: faker.internet.email(), to: faker.internet.email() },
    });
    expect(sendMailSpy.callsCount).toBe(0);
    expect(result.statusCode).toBe(406);
  });
});
