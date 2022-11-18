import { NodemailerSendMail } from "@/data/use-cases";
import { SendMailAdapterSpy } from "@/tests/data/mocks";
import { mockSendMailParams } from "@/tests/domain/nodemailer";

const makeSut = () => {
  const sendMailAdapterSpy = new SendMailAdapterSpy();
  const sut = new NodemailerSendMail(sendMailAdapterSpy);
  return { sut, sendMailAdapterSpy };
};

describe("NodemailerSendMail", () => {
  it("should return 'undefined' when send mail", async () => {
    const { sut } = makeSut();
    const mockedParams = mockSendMailParams();
    const result = await sut.perform(mockedParams);
    expect(result).toBeUndefined();
  });
});
