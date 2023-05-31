import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditNodeComponent } from './edit-node.component';

describe('EditNodeComponent', () => {
  let component: EditNodeComponent;
  let fixture: ComponentFixture<EditNodeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditNodeComponent]
    });
    fixture = TestBed.createComponent(EditNodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
