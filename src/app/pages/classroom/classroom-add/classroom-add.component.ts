import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-classroom-add',
  templateUrl: './classroom-add.component.html',
  styleUrls: ['./classroom-add.component.scss']
})
export class ClassroomAddComponent {

  constructor(
    public activatedRoute: ActivatedRoute,
    public router: Router,
  ) { }

  public back(){
    this.router.navigate(['../list'],{relativeTo: this.activatedRoute})
  }

}
