import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBlogFormComponent } from './edit-blog-form.component';

describe('EditBlogFormComponent', () => {
  let component: EditBlogFormComponent;
  let fixture: ComponentFixture<EditBlogFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditBlogFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditBlogFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
