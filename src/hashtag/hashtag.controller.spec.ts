import { Test, TestingModule } from '@nestjs/testing';
import { HashtagController } from './hashtag.controller';

describe('Hashtag Controller', () => {
  let controller: HashtagController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HashtagController],
    }).compile();

    controller = module.get<HashtagController>(HashtagController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
