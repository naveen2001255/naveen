import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  constructor() { }
  private SidebarVisisbilitySubject = new BehaviorSubject<boolean>(false);
  SidebarVisisbility$ = this.SidebarVisisbilitySubject.asObservable();

  toggleSidebar(){
    this.SidebarVisisbilitySubject.next(!this.SidebarVisisbilitySubject.value);
  }
}
