import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../../services/sidebar.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {

  isRotated: boolean = false;
  profileitems: any = [];
  constructor(private sidebarservice:SidebarService ) {}

  ngOnInit(): void {
    this.profileitems = [
      {
        label: 'Text Part',
        icon: 'edit'
      },
      {
        label: 'Role',
        icon: 'group_add',
      },
      {
        label: 'Email',
        icon: 'mail',
      },
      {
        label: 'Logout',
        icon: 'logout',
      },
    ];
    
  }
  toggleSidebar(){
    // Check if the button click event is registered
   this.sidebarservice.toggleSidebar();
  // Check if the visibility state is changing
    this.isRotated = !this.isRotated;
  }
}
