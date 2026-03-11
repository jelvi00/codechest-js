import { Test, TestingModule } from '@nestjs/testing';
import { GreetingController } from "./greeting.controller";
import { GreetingService } from "../service/greeting.service";

describe("GreetingController", () => {
  let greetingController: GreetingController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [GreetingController],
      providers: [GreetingService],
    }).compile();

    greetingController = app.get<GreetingController>(GreetingController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(greetingController.getHello()).toBe('Hello World!');
    });
  });
});
