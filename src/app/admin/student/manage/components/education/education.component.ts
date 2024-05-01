import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatTableModule} from '@angular/material/table';
import { MatTableDataSource } from '@angular/material/table';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-education',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatDatepickerModule,
    MatTableModule,
    MatCheckboxModule,
    BsDatepickerModule
  ],
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
  displayedColumns: string[] = ['position', 'qualification', 'certificate','action'];
  dataSource:any
 constructor(private fb:FormBuilder){
  const elements: any[] = [
    {position: 1, qualification: 'B.tech', certification:"certificate.pdf", action: 'CheckMe'},
    {position: 2, qualification: 'Degree',  certification:"certificate.jpeg", action: 'CheckMe'},
  ];
 this.dataSource = new MatTableDataSource(elements)
 }

 ngOnInit(): void {
   
 }
 public educationfrm = this.fb.group({
  
 })
}
