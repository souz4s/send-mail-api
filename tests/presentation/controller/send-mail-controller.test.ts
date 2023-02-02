// deno-lint-ignore-file
// @ts-nocheck
import { SendMailController } from "../../../src/presentation/controllers/index.ts";
import { mockSendMailParams } from "../../domain/mocks/index.ts";
import { SendMailSpy } from "../mocks/index.ts";

import { expect } from "https://deno.land/x/expect@v0.2.10/mod.ts";

const makeSut = () => {
  const sendMailSpy = new SendMailSpy();
  const sut = new SendMailController(sendMailSpy);
  return { sut, sendMailSpy };
};

Deno.test("SendMailController: should call 'sendMail' when send mail", async () => {
  const { sut, sendMailSpy } = makeSut();
  await sut.handle(mockSendMailParams());
  expect(sendMailSpy.callsCount).toBe(1);
});

Deno.test("SendMailController: should return the status created when sending mail", async () => {
  const { sut, sendMailSpy } = makeSut();
  const result = await sut.handle(mockSendMailParams());
  expect(sendMailSpy.callsCount).toBe(1);
  expect(result.status).toBe(201);
});

Deno.test("SendMailController: should return bad request error when missing required parameters", async () => {
  const { sut, sendMailSpy } = makeSut();
  const result = await sut.handle({
    auth: { pass: undefined },
    mailModel: { from: undefined },
  });
  expect(sendMailSpy.callsCount).toBe(0);
  expect(result.status).toBe(400);
});

Deno.test("SendMailController: should return the internal server error when sendMail throws error", async () => {
  const { sut, sendMailSpy } = makeSut();
  sendMailSpy.perform = () => {
    throw new Error().stack;
  };
  const result = await sut.handle(mockSendMailParams());
  expect(sendMailSpy.callsCount).toBe(0);
  expect(result.status).toBe(500);
});
