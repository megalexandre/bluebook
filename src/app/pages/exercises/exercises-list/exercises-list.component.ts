import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-exercises-list',
  templateUrl: './exercises-list.component.html',
  styleUrls: ['./exercises-list.component.scss']
})
export class ExercisesListComponent {

  itens;

  constructor(
    public activatedRoute: ActivatedRoute,
    public router: Router,
  ) {
      this.itens = [
        {name: "2020: O estigma associado às doenças mentais na sociedade brasileira"},
        {name: "2019: Democratização do acesso ao cinema no Brasil"},
        {name: "2018: Manipulação do comportamento do usuário pelo controle de dados na internet"},
        {name: "2017: Desafios para a formação educacional de surdos no Brasil"},
        {name: "2016: Caminhos para combater a intolerância religiosa no Brasil"},
    ]
  }



  public add(){
    this.router.navigate(['../add'],{relativeTo: this.activatedRoute})
  }

}
