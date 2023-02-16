import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { ClientsModule } from '@nestjs/microservices';
import { sendMailOptions } from 'src/options';
import { protobufPackage } from 'src/mail';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [
    ClientsModule.register([
      {
        name: protobufPackage,
        ...sendMailOptions,
      },
    ]),
  ],
})
export class UsersModule {}
