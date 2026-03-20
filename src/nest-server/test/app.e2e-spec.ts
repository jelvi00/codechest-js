import { Test, TestingModule } from '@nestjs/testing';
import { HttpStatus, INestApplication } from '@nestjs/common';
import request from 'supertest';
import { App } from 'supertest/types';
import { AppModule } from '../src/app.module';

describe('GreetingController (e2e)', () => {
    let app: INestApplication<App>;

    beforeEach(async () => {

        const moduleFixture: TestingModule = await Test.createTestingModule({
            imports: [ AppModule ]
        }).compile();

        app = moduleFixture.createNestApplication();
        await app.init();
    });

    it('/greetings (GET)', () => {
        return request(app.getHttpServer())
            .get('/greetings/hello')
            .expect(HttpStatus.OK)
            .expect({ data: 'Hello World!'});
    });

    it('/greetings (GET) for lucas', () => {
        return request(app.getHttpServer())
            .get('/greetings/lucas/hello')
            .expect(HttpStatus.OK)
            .expect({ data: 'Hello lucas!'});
    });

    it('/greetings (GET) with smile', () => {
        return request(app.getHttpServer())
            .get('/greetings/hello?smile=true')
            .expect(HttpStatus.OK)
            .expect({ data: 'Hello World! :)'});
    });

    it('/greetings (POST)', () => {
        return request(app.getHttpServer())
            .post('/greetings')
            .set('Authorization', 'Bearer greeter')
            .expect(HttpStatus.CREATED)
    });

    it('/greetings (POST) with smile', () => {
        return request(app.getHttpServer())
            .post('/greetings?smile=true')
            .set('Authorization', 'Bearer greeter')
            .expect(HttpStatus.CREATED)
    });

    it('/greetings (POST) bonjour', () => {
        return request(app.getHttpServer())
            .post('/greetings')
            .set('Authorization', 'Bearer greeter')
            .send({ type: 'bonjour', name: 'lucas' })
            .expect(HttpStatus.BAD_REQUEST)
    });

    it('/greetings (POST) without role', () => {
        return request(app.getHttpServer())
            .post('/greetings')
            .expect(HttpStatus.FORBIDDEN)
    });


});
