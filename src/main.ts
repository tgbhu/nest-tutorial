import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { AllExceptionFilter } from './all.exceptions.filter';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const { httpAdapter } = app.get(HttpAdapterHost);
  app.useGlobalFilters(new AllExceptionFilter(httpAdapter));

  await app.listen(3000);
}
bootstrap();
