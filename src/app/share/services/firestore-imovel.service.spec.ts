import { TestBed } from '@angular/core/testing';

import { FirestoreImovelService } from './firestore-imovel.service';

describe('FirestoreImovelService', () => {
  let service: FirestoreImovelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirestoreImovelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
