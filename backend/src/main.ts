import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { INestApplication, Logger } from '@nestjs/common';
import { DocumentBuilder, OpenAPIObject, SwaggerModule } from '@nestjs/swagger';
import { AllExceptionsFilter } from './middlewares/error-handling.middleware';

class App {
  app: INestApplication;
  swaggerConfig: Omit<OpenAPIObject, 'paths'>;

  constructor() {
    this.start();
  }

  async start() {
    try {
      await this.bootstrap();
    } catch (error) {
      Logger.fatal(error.message);
    }
  }

  async bootstrap() {
    this.app = await NestFactory.create(AppModule);
    await this.swagger();
    this.app.useGlobalFilters(new AllExceptionsFilter());
    await this.app.listen(3000);
  }

  async swagger() {
    this.swaggerConfig = new DocumentBuilder()
      .setTitle('Music Streaming Challenge')
      .setDescription('API documentation for the Music Streaming Challenge')
      .setVersion('1.0')
      .build();

    const document = SwaggerModule.createDocument(
      this.app as any,
      this.swaggerConfig,
    );
    SwaggerModule.setup('api/docs', this.app as any, document);
  }
}

export default new App();
