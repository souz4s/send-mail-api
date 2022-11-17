import { SendMailController } from "@/presentation/controllers";
import { mockSendMailParams } from "@/tests/domain/remote";
import { SendMailSpy } from "@/tests/presentation/mocks";

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
    const { sut } = makeSut();
    const result = await sut.handle(mockSendMailParams());
    expect(result.statusCode).toBe(201);
  });
});
