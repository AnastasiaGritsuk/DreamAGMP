import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, DebugElement } from '@angular/core';
import { CourseListComponent } from './course-list.component';
import { CourseItemComponent } from '../course-list-item/course-list-item.component';
import { CourseService } from '../course.service';
import { By } from '@angular/platform-browser';

describe('CourseListComponent', () => {
    let component: CourseListComponent;
    let fixture: ComponentFixture<CourseListComponent>;
    let courseServiceMock: Partial<CourseService>;

    beforeEach(async(() => {
        courseServiceMock = {
            getCourseItems: jasmine.createSpy("getCourseItems").and.returnValue(
                [
                    {
                        id: 1,
                        title: "my first course",
                        creationDate: "03.31.1990",
                        duration: 60,
                        description: "desc 1"
                    },
                    {
                        id: 2,
                        title: "my second course",
                        creationDate: "03.31.1990",
                        duration: 60,
                        description: "desc 1"
                    }
                ]
            )
        }
        TestBed.configureTestingModule({
            declarations: [CourseListComponent, CourseItemComponent],
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

    it('should check CourseItems exist on the page', () => {
        component.ngOnInit();
        const debugElement: DebugElement = fixture.debugElement;
        const itemTitleDebugElement: DebugElement = debugElement.query(By.css(".card"));
        const itemTitle: HTMLElement = itemTitleDebugElement.nativeElement;

        expect(itemTitle.attributes.length).toBe(2);
    });
});

