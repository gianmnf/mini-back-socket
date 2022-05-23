import { NestFactory } from '@nestjs/core';
import { config } from 'dotenv';
config();
import { AppModule } from './app.module';
import { LoggerErrorInterceptor } from 'nestjs-pino';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalInterceptors(new LoggerErrorInterceptor());
  // app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
  // app.enableCors();

  app.enableCors({
    origin: (origin: any, callback: any) => {
      callback(null, true);
    },
    allowedHeaders: '*',
    methods: 'GET,PUT,POST,DELETE,UPDATE,OPTIONS',
    credentials: true,
  });
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
