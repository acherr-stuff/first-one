import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostCardSmallComponent } from './post-card-small.component';

describe('PostCardSmallComponent', () => {
  let component: PostCardSmallComponent;
  let fixture: ComponentFixture<PostCardSmallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostCardSmallComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostCardSmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
