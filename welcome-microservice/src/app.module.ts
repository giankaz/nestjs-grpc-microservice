import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SendMailModule } from './send-mail/send-mail.module';
import { SendMailService } from './send-mail/send-mail.service';

@Module({
  imports: [ConfigModule.forRoot(), SendMailModule],
  controllers: [],
  providers: [SendMailService],
})
export class AppModule {}
