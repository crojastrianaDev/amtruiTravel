import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudAdminListaComponent } from './crud-admin-lista.component';

describe('CrudAdminListaComponent', () => {
  let component: CrudAdminListaComponent;
  let fixture: ComponentFixture<CrudAdminListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudAdminListaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudAdminListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
