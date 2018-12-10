import { CoursePageModule } from './course-page.module';

describe('CoursePageModule', () => {
  let coursePageModule: CoursePageModule;

  beforeEach(() => {
    coursePageModule = new CoursePageModule();
  });

  it('should create an instance', () => {
    expect(coursePageModule).toBeTruthy();
  });
});
