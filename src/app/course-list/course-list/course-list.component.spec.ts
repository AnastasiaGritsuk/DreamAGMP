import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CourseListComponent } from './course-list.component';
import { CourseService } from '../course.service';

describe('CourseListComponent', () => {
    let component: CourseListComponent;
    let fixture: ComponentFixture<CourseListComponent>;
    let courseServiceMock: Partial<CourseService>;

    beforeEach(async(() => {
        courseServiceMock = {
            getCourseItems: jasmine.createSpy("getCourseItems")
        }
        TestBed.configureTestingModule({
            declarations: [CourseListComponent],
            providers:[
                {
                    provide: CourseService, 
                    useValue: courseServiceMock}
            ],
            schemas: [
                CUSTOM_ELEMENTS_SCHEMA
              ],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CourseListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should call CourseListService to get items', () => {
        component.ngOnInit();
        expect(courseServiceMock.getCourseItems).toHaveBeenCalled();
    });
});
