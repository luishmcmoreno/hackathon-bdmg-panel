import { Router } from '@angular/router';
import { TableContent } from '@pluritech/ng2-responsive-table';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-integrator',
  templateUrl: './integrator.component.html',
  styleUrls: ['./integrator.component.scss']
})
export class IntegratorComponent implements OnInit {

  public data: TableContent = {
    columns: [
      {id: 'name', name: 'Integrador'},
      {id: 'cnpj', name: 'CNPJ'},
      {id: 'email', name: 'E-mail'},
      {id: 'status', name: 'Aprovado', hasCustomColor: true},
    ],
    // tslint:disable:max-line-length
    rows: [
      {name: 'Ideia Solar - Soluções Elétricas Integradas', cnpj: '39.221.642/0001-56', email: 'ideiasolar@gmail.com', status: 'Sim', color: 'blue'},
      {name: 'Vivuz Solar Energia', cnpj: '39.864.527/0001-08', email: 'vivuz@gmail.com', status: 'Sim', color: 'blue'},
      {name: 'Retrofit Solar', cnpj: '63.558.001/0001-76', email: 'atendimento@retrofit.com.br', status: 'Não', color: 'orange'},
    ],
    actions: [
      {
        name: 'Detalhe', class: 'btn btn-primary', icon: 'fa fa-info',
        handler: row => {
          this.router.navigate([`/integrator/1`]);
        }
      }
    ]
  };
  constructor(private router: Router) { }

  ngOnInit() {
  }

}
