import { TestBed } from '@angular/core/testing';

import { CadpessoaService } from './cadpessoa.service';

describe('CadpessoaService', () => {
  let service: CadpessoaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CadpessoaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
