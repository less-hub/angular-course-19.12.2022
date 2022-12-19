import { TestBed } from '@angular/core/testing';

import { AppTodoService } from './app-todo.service';

describe('AppTodoService', () => {
  let service: AppTodoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppTodoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
