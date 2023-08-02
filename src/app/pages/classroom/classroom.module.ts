import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NbButtonModule, NbCardModule, NbIconModule, NbInputModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ClassroomAddComponent } from './classroom-add/classroom-add.component';
import { ClassroomListComponent } from './classroom-list/classroom-list.component';
import { ClassroomRoutingModule } from './classroom-routing.module';
import { ClassroomComponent } from './classroom.component';


@NgModule({

  imports: [
    CommonModule,
    RouterModule,
    ClassroomRoutingModule,
    NbCardModule,
    NbIconModule,
    NbButtonModule,
    NbInputModule,
  ],
  declarations: [
    ClassroomComponent,
    ClassroomAddComponent,
    ClassroomListComponent
  ],
})
export class ClassroomModule { }
