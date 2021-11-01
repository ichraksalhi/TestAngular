import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountComponent } from './count.component';
//import { MockLocationStrategy } from '@angular/common/testing';
describe('CountComponent', () => {
  let component: CountComponent;
  let fixture: ComponentFixture<CountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
   
      declarations: [ CountComponent ]
    })
    .compileComponents();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
