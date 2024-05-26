import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RefreshService {
  private refreshSubject = new BehaviorSubject<boolean>(false);

  get refresh$() {
    return this.refreshSubject.asObservable();
  }

  triggerRefresh() {
    this.refreshSubject.next(true);
  }
}
