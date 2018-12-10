import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class LoadingBlockService {
	private isLoading = false;
	private isLoadingSubject: BehaviorSubject<boolean> = new BehaviorSubject(false);

	constructor() { }

	public getIsLoadingObservable(): Observable<boolean> {
		return this.isLoadingSubject.asObservable();
	}

	public setIsLoadingObservable(value: boolean) {
		this.isLoading = value;
        this.isLoadingSubject.next(this.isLoading);
    }
}
