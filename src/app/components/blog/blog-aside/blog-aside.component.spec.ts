import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogAsideComponent } from './blog-aside.component';

describe('BlogAsideComponent', () => {
  let component: BlogAsideComponent;
  let fixture: ComponentFixture<BlogAsideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogAsideComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogAsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
