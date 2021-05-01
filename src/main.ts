import { NestFactory } from "@nestjs/core";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { AppModule } from "./app.module";
import { ValidationPipe } from "./pipes/validation.pipe";


async function start() {
    const PORT = process.env.PORT || 3000;
    const app = await NestFactory.create(AppModule);

    const config = new DocumentBuilder()
    .setTitle('NestJS Learning')
    .setDescription('REST API Documentation')
    .setVersion('1.0.0')
    .addTag('NEST START')
    .build()

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('/api/docs', app, document)

    app.useGlobalPipes(new ValidationPipe())

    await app.listen(PORT, () => {
        console.log(`app is running on port ${PORT}`)
    })
}

start()