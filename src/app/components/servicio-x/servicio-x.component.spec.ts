import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicioXComponent } from './servicio-x.component';

describe('ServicioXComponent', () => {
  let component: ServicioXComponent;
  let fixture: ComponentFixture<ServicioXComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicioXComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicioXComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
