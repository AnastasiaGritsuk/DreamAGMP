import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CourseItemComponent } from './course-list-item.component';

describe('CourseItemComponent', () => {
  let component: CourseItemComponent;
  let fixture: ComponentFixture<CourseItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseItemComponent);
    component = fixture.componentInstance;
    component.CourseItem = {
        id: "1",
        title: "my first course",
        creationDate: "03.31.1990",
        duration: 60,
        description: "desc 1"
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
