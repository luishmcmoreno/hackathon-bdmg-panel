import { TableContent } from '@pluritech/ng2-responsive-table';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-approved-detail',
  templateUrl: './project-approved-detail.component.html',
  styleUrls: ['./project-approved-detail.component.scss']
})
export class ProjectApprovedDetailComponent implements OnInit {

  public data: TableContent = {
    columns: [
      {id: 'ref', name: 'Ref'},
      {id: 'value', name: 'Valor'},
      {id: 'paid', name: 'Pago', hasCustomColor: true},
    ],
    // tslint:disable:max-line-length
    rows: [
      {ref: '01/2018', value: 'R$ 1000,00', paid: 'Sim', color: 'blue'},
      {ref: '02/2018', value: 'R$ 1000,00', paid: 'Não', color: 'red'},
      {ref: '03/2018', value: 'R$ 1000,00', paid: '---'},
      {ref: '04/2018', value: 'R$ 1000,00', paid: '---'},
      {ref: '05/2018', value: 'R$ 1000,00', paid: '---'},
      {ref: '06/2018', value: 'R$ 1000,00', paid: '---'},
    ],
    actions: null
  };

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
