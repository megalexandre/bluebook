import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { SmartTableData } from '../../../@core/data/smart-table';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-classroom-list',
  templateUrl: './classroom-list.component.html',
  styleUrls: ['./classroom-list.component.scss']
})
export class ClassroomListComponent {

  constructor(
    public activatedRoute: ActivatedRoute,
    public router: Router,
  ) { }

  public add(){
    this.router.navigate(['../add'],{relativeTo: this.activatedRoute})
  }

}
