import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { CreateSendEmailDto } from './dto/create-send-mail.dto';

@Injectable()
export class SendMailService {
  constructor(private readonly emailService: MailerService) {}

  public sendMail({ subject, to, html, text }: CreateSendEmailDto) {
    this.emailService
      .sendMail({
        to,
        subject,
        html,
        text,
        from: process.env.MAIL_USER,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });

    return { createdAt: new Date().toLocaleDateString('pt-BR'), email: to };
  }
}
