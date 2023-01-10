import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplatedrivendataComponent } from './templatedrivendata.component';

describe('TemplatedrivendataComponent', () => {
  let component: TemplatedrivendataComponent;
  let fixture: ComponentFixture<TemplatedrivendataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplatedrivendataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplatedrivendataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
