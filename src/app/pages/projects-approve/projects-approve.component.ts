import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { TableContent } from '@pluritech/ng2-responsive-table';

@Component({
  selector: 'app-projects-approve',
  templateUrl: './projects-approve.component.html',
  styleUrls: ['./projects-approve.component.scss']
})
export class ProjectsApproveComponent implements OnInit {

  public data: TableContent = {
    columns: [
      {id: 'clientName', name: 'Empresa'},
      {id: 'dtBegin', name: 'Início Financiamento'},
      {id: 'dtEnd', name: 'Fim Financiametno'},
      {id: 'totalValue', name: 'Valor total'},
      {id: 'invalidPaidStatus', name: 'Parcela em atraso'}
    ],
    // tslint:disable:max-line-length
    rows: [
      {clientName: 'Empresa 01', dtBegin: '13/11/2017', dtEnd: '13/11/2022', totalValue: 'R$ 35.000,00', invalidPaidStatus: 'Não', id: 1},
      {clientName: 'Empresa 02', dtBegin: '13/11/2017', dtEnd: '13/11/2022', totalValue: 'R$ 35.000,00', invalidPaidStatus: 'Sim', id: 2},
      {clientName: 'Empresa 03', dtBegin: '13/11/2017', dtEnd: '13/11/2022', totalValue: 'R$ 35.000,00', invalidPaidStatus: 'Não', id: 3},
      {clientName: 'Empresa 04', dtBegin: '13/11/2017', dtEnd: '13/11/2022', totalValue: 'R$ 35.000,00', invalidPaidStatus: 'Sim', id: 4},
    ],
    actions: null
  };

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
