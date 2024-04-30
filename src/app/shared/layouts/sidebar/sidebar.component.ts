import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../../services/sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  isSidebarVisible: boolean = true;
  items: any = []
  selectedItem: any;
  constructor(private sidebarservice: SidebarService) { }


  ngOnInit(): void {
    this.items = [{ itemText: 'Home', iconName: 'home', tooltip: 'Home' },
    { itemText: 'Dashboard', iconName: 'dashboard', tooltip: 'Dashboard' },
    { itemText: 'Profile', iconName: 'person', tooltip: 'Profile' },
    { itemText: 'Settings', iconName: 'settings', tooltip: 'Settings' },
    { itemText: 'Logout', iconName: 'logout', tooltip: 'Logout' },
    ];

    this.sidebarservice.SidebarVisisbility$.subscribe((isVisible) => {
      this.isSidebarVisible = isVisible;
    })
  }

}
