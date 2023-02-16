import { Controller } from '@nestjs/common';
import { SendMailService } from './send-mail.service';
import { CreateSendEmailDto } from './dto/create-send-mail.dto';
import { GrpcMethod } from '@nestjs/microservices';

@Controller()
export class SendMailController {
  constructor(private readonly sendMailService: SendMailService) {}

  @GrpcMethod('SendMailService', 'sendMail')
  send(createMailData: CreateSendEmailDto) {
    return this.sendMailService.sendMail(createMailData);
  }
}
