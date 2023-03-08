import {NestFactory} from "@nestjs/core";
import {AppModule} from "./app.module";
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";

const start = async function () {
    const PORT = process.env.PORT || 3001;
    const app = await NestFactory.create(AppModule);

    const config = new DocumentBuilder()
        .setTitle('Тренировка')
        .setDescription('Документация Rest API')
        .setVersion('1.0.0')
        .addTag('VM')
        .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('/api/docs', app, document);

    await app.listen(PORT, () => { console.log(`server start on ${ PORT }`)});
}

start();