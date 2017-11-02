import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.scss']
})
export class BalanceComponent implements OnInit {

  public moneyChartLabels: string[] = ['Investimento', 'Retorno'];
  public moneyPieChartData: number[] = [450, 500];

  public projectsLabel: string[] = ['Aprovados', 'À analisar'];
  public projectPieChartData: number[] = [127, 21];

  public pieType = 'pie';

  constructor() { }

  ngOnInit() {
  }

}
