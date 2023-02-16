export class CreateSendEmailDto {
  to: string;
  subject: string;
  text?: string;
  html?: string;
}
