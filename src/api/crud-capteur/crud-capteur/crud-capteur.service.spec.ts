import { Test, TestingModule } from '@nestjs/testing';
import { CrudCapteurService } from './crud-capteur.service';

describe('CrudCapteurService', () => {
  let service: CrudCapteurService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CrudCapteurService],
    }).compile();

    service = module.get<CrudCapteurService>(CrudCapteurService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
