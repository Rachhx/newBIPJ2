import { TestBed } from '@angular/core/testing';

import { OrderInfoServiceService } from './order-info-service.service';

describe('OrderInfoServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OrderInfoServiceService = TestBed.get(OrderInfoServiceService);
    expect(service).toBeTruthy();
  });
});
