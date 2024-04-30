import { Title } from '@angular/platform-browser';
import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-infopopup',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatButtonModule, MatDialogModule],
  templateUrl: './infopopup.component.html',
  styleUrls: ['./infopopup.component.scss']
})
export class InfopopupComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    console.log(data.data);
    
  }
}
