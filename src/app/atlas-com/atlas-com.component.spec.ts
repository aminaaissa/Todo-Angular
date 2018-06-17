import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtlasComComponent } from './atlas-com.component';

describe('AtlasComComponent', () => {
  let component: AtlasComComponent;
  let fixture: ComponentFixture<AtlasComComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtlasComComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtlasComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
