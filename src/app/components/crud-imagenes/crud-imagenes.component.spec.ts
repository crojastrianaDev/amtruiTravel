import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudImagenesComponent } from './crud-imagenes.component';

describe('CrudImagenesComponent', () => {
  let component: CrudImagenesComponent;
  let fixture: ComponentFixture<CrudImagenesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudImagenesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudImagenesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
