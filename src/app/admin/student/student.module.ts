import { FileuploadComponent } from './../../shared/component/fileupload/fileupload.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { ListComponent } from './list/list.component';
import { ManageComponent } from './manage/manage.component';

import { MatInputModule } from '@angular/material/input';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import { ExperienceComponent } from "./manage/components/experience/experience.component";
import { EducationComponent } from "./manage/components/education/education.component";
import { StaffComponent } from './manage/components/staff/staff.component';
@NgModule({
    declarations: [
        ListComponent,
        ManageComponent,
    ],
    imports: [CommonModule,
        MatInputModule,
        MatPaginatorModule,
        MatSortModule,
        MatTableModule,
        MatButtonModule,
        MatDialogModule,
        MatDialogModule,
        StudentRoutingModule,
        FileuploadComponent,
        MatIconModule,
        MatTabsModule,
        MatSelectModule,
        MatRadioModule,
        MatDatepickerModule,
        MatNativeDateModule, 
        ExperienceComponent, 
        EducationComponent,
        StaffComponent 
      ]
})
export class StudentModule { }
