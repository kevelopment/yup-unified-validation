import { Logger } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { YupValidationPipe } from "nestjs-yup";
import { AppModule } from "./app/app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const globalPrefix = "api";
  app.setGlobalPrefix(globalPrefix);

  // register the Validation Pipe globally
  app.useGlobalPipes(new YupValidationPipe());

  const port = process.env.PORT || 3333;
  await app.listen(port, () => {
    Logger.log("Listening at http://localhost:" + port + "/" + globalPrefix);
  });
}

bootstrap();
