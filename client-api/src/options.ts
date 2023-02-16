import { GrpcOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

export const sendMailOptions: GrpcOptions = {
  transport: Transport.GRPC,
  options: {
    url: 'localhost:50051',
    package: 'sendmail',
    protoPath: join(__dirname, 'mail.proto'),
  },
};
