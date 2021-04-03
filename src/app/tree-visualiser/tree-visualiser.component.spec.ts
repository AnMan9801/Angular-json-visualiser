import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeVisualiserComponent } from './tree-visualiser.component';

describe('TreeVisualiserComponent', () => {
  let component: TreeVisualiserComponent;
  let fixture: ComponentFixture<TreeVisualiserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TreeVisualiserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TreeVisualiserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
