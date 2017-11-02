import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { TableContent } from '@pluritech/ng2-responsive-table';
@Component({
  selector: 'app-projects-to-approve',
  templateUrl: './projects-to-approve.component.html',
  styleUrls: ['./projects-to-approve.component.scss']
})
export class ProjectsToApproveComponent implements OnInit {

  public data: TableContent = {
    columns: [
      {id: 'clientName', name: 'Empresa'},
      {id: 'integratorName', name: 'Integrador'},
      {id: 'countSuccess', name: 'Projetos de sucesso'},
      {id: 'countFail', name: 'Projetos que falharam'},
      {id: 'confiability', name: 'Risco de epréstimo'},
      {id: 'requestedValue', name: 'Valor requisitado'},
    ],
    // tslint:disable:max-line-length
    rows: [
      {clientName: 'Empresa 01', integratorName: 'Integrador 01', requestedValue: 'R$27.000,00', countSuccess: 22, countFail: 3, confiability: '87%', id: 1},
      {clientName: 'Empresa 02', integratorName: 'Integrador 02', requestedValue: 'R$28.000,00', countSuccess: 22, countFail: 3, confiability: '80%', id: 2},
      {clientName: 'Empresa 03', integratorName: 'Integrador 03', requestedValue: 'R$29.000,00', countSuccess: 22, countFail: 3, confiability: '75%', id: 3},
      {clientName: 'Empresa 04', integratorName: 'Integrador 04', requestedValue: 'R$30.000,00', countSuccess: 22, countFail: 3, confiability: '86%', id: 4},
    ],
    actions: [
      {
        name: 'Detalhe', class: 'btn btn-primary', icon: 'fa fa-info',
        handler: row => {
          this.router.navigate([`/projects-to-approve/${row.id}`]);
        }
      }
    ]
  };

  constructor(private router: Router) { }

  ngOnInit() {}

}
