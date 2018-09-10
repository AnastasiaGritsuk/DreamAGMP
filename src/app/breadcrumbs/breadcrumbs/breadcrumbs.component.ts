import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Breadcrumb } from '../breadcrumb';
import { ActivatedRoute, Router, NavigationEnd, PRIMARY_OUTLET } from '@angular/router';
import { filter, map } from 'rxjs/operators';

@Component({
    selector: 'app-breadcrumbs',
    templateUrl: './breadcrumbs.component.html',
    styleUrls: ['./breadcrumbs.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class BreadcrumbsComponent implements OnInit {
    public breadcrumbs: Breadcrumb[] = [];

    constructor(
        private activatedRoute: ActivatedRoute,
        private router: Router
    ) { }

    // filter(event => event instanceof NavigationEnd)

    ngOnInit() {
        const ROUTE_DATA_BREADCRUMB: string = "breadcrumb";
        this.router.events
        .pipe(
            filter((event:Event) => event instanceof NavigationEnd),
            map(event => this.breadcrumbs = this.getBreadcrumbs(this.activatedRoute.root))
        )
        .subscribe();
    }

    private getBreadcrumbs(
        route: ActivatedRoute, 
        url: string = '',
        breadcrumbs: Array<Breadcrumb> = []): Array<Breadcrumb> {
            const ROUTE_DATA_BREADCRUMB: string = "breadcrumb";

            //get the child routes
            let children: ActivatedRoute[] = route.children;

            //return if there are no more children
            if (children.length === 0) {
                return breadcrumbs;
            }

            //iterate over each children
            for (let child of children) {
                //verify primary route
                if (child.outlet !== PRIMARY_OUTLET) {
                    continue;
            }

            //verify the custom data property "breadcrumb" is specified on the route
            if (!child.snapshot.data.hasOwnProperty(ROUTE_DATA_BREADCRUMB)) {
                return this.getBreadcrumbs(child, url, breadcrumbs);
            }

            //get the route's URL segment
            let routeURL: string = child.snapshot.url.map(segment => segment.path).join("/");

            //append route URL to URL
            url += `/${routeURL}`;

            //add breadcrumb
            let breadcrumb: Breadcrumb = {
                label: child.snapshot.data[ROUTE_DATA_BREADCRUMB],
                params: child.snapshot.params,
                url: url
            };
            breadcrumbs.push(breadcrumb);
            
            //recursive
            return this.getBreadcrumbs(child, url, breadcrumbs);
            }
            
            //we should never get here, but just in case
            return breadcrumbs;
        }
    }