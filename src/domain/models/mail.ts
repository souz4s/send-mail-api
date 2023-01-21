export type MailModel = {
  from: string;
  to: string;
  subject: string;
  content?: string;
  html?: string;
};
