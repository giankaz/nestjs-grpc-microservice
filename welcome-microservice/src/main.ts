import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.GRPC,
      options: {
        package: 'sendmail',
        protoPath: join(__dirname, 'mail.proto'),
        url: 'localhost:50051',
      },
    },
  );
  app.listen();
}
bootstrap();
