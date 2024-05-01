import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { MatTableDataSource } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatDatepickerModule,
    MatInputModule,
    MatFormFieldModule,
    MatMenuModule,
    MatTableModule,
    MatCheckboxModule,
    BsDatepickerModule,
    ReactiveFormsModule,
  ],
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
})
export class ExperienceComponent implements OnInit {
  displayedColumns: string[] = ['position', 'experience', 'document', 'action'];
  dataSource: any = [];
  desginationList: any[] = [];
  tableData: any = [];
  constructor(private fb: FormBuilder) {}
  ngOnInit(): void {
    this.desginationList = [
      { value: 1, label: 'Faculty' },
      { value: 2, label: 'Officeboy' },
      { value: 3, label: 'Hr Manager' },
    ];
  }

  experience: FormGroup;
  public experiencefrm = this.fb.group({
    experience: this.fb.control(''),
    fromdate: this.fb.control(''),
    todate: this.fb.control(''),
    documentfile: this.fb.control(''),
    designation: this.fb.control(''),
  });

  public addProfessionalDetails() {
    const formData = this.experiencefrm.value;
    const newdata = {
      position: 55,
      experience: formData.experience,
      document: formData.documentfile,
      action: 'checkedMe',
    };
    this.tableData.push(newdata);
    this.dataSource = new MatTableDataSource(this.tableData);
  }
}
