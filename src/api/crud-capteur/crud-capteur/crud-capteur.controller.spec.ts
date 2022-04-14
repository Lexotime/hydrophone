import { Test, TestingModule } from '@nestjs/testing';
import { CrudCapteurController } from './crud-capteur.controller';
import { CrudCapteurService } from './crud-capteur.service';

describe('CrudCapteurController', () => {
  let controller: CrudCapteurController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CrudCapteurController],
      providers: [CrudCapteurService],
    }).compile();

    controller = module.get<CrudCapteurController>(CrudCapteurController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
