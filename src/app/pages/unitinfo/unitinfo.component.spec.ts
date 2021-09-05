import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitinfoComponent } from './unitinfo.component';

describe('UnitinfoComponent', () => {
  let component: UnitinfoComponent;
  let fixture: ComponentFixture<UnitinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnitinfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnitinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
