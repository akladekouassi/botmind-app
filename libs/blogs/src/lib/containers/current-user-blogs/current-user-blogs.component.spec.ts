import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentUserBlogsComponent } from './current-user-blogs.component';

describe('CurrentUserBlogsComponent', () => {
  let component: CurrentUserBlogsComponent;
  let fixture: ComponentFixture<CurrentUserBlogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrentUserBlogsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentUserBlogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
