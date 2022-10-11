import { Test, TestingModule } from '@nestjs/testing';
import { ProductentityService } from './productentity.service';

describe('ProductentityService', () => {
  let service: ProductentityService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductentityService],
    }).compile();

    service = module.get<ProductentityService>(ProductentityService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
