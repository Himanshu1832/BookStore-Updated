import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';
// somewhere in your initialization file


async function bootstrap() {
    // const app = await NestFactory.create(AppModule);
    // // global prefix
    // app.setGlobalPrefix('api');
    // await app.listen(8000);
    const app = await NestFactory.create(AppModule);
    app.setGlobalPrefix('api');
app.enableCors();
app.use(cookieParser());
await app.listen(8000);
}
bootstrap();