import { Module } from '@nestjs/common';
import { SendMailService } from './send-mail.service';
import { SendMailController } from './send-mail.controller';
import { MailerModule } from '@nestjs-modules/mailer';

@Module({
  imports: [
    MailerModule.forRootAsync({
      useFactory: () => {
        return {
          transport: {
            host: 'smtp.gmail.com',
            port: 465,
            auth: {
              user: process.env.MAIL_USER,
              pass: process.env.MAIL_PASS,
            },
          },
        };
      },
    }),
  ],
  controllers: [SendMailController],
  providers: [SendMailService],
})
export class SendMailModule {}
