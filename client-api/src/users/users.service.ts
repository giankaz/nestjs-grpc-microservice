import { Inject, Injectable } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';
import { protobufPackage, SendMailService } from '../mail';

@Injectable()
export class UsersService {
  constructor(@Inject(protobufPackage) private client: ClientGrpc) {}

  private sendMailService: SendMailService;

  onModuleInit() {
    this.sendMailService =
      this.client.getService<SendMailService>('SendMailService');
  }

  private users = [];

  public async createUser({ name, email }) {
    const id = this.users.length + 1;
    const user = { id, name, email };
    this.users.push(user);

    const grpcReturn = await firstValueFrom(
      this.sendMailService.sendMail({
        to: email,
        subject: 'Bem vindo!',
        html: `<h1>Bem vindo a nossa plataforma ${name}!</h1>`,
      }),
    );

    return {
      user,
      grpcReturn,
    };
  }
}
