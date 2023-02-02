import { DenomailerSendMail } from "../../../src/data/use-cases/index.ts";
import { SendMailAdapterSpy } from "../mocks/index.ts";
import { mockSendMailParams } from "../../domain/mocks/index.ts";

import { expect } from "https://deno.land/x/expect@v0.2.10/mod.ts";

const makeSut = () => {
  const sendMailAdapterSpy = new SendMailAdapterSpy();
  const sut = new DenomailerSendMail(sendMailAdapterSpy);
  return { sut, sendMailAdapterSpy };
};

Deno.test("DenomailerSendMail: should return 'undefined' when send mail", () => {
  const { sut } = makeSut();
  const mockedParams = mockSendMailParams();
  const result = sut.perform(mockedParams);
  expect(result).toBeUndefined();
});
