import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.scss']
})
export class BalanceComponent implements OnInit {

  public moneyChartLabels: string[] = ['Investimento', 'Retorno'];
  public moneyPieChartData: number[] = [450000, 550000];

  public projectsLabel: string[] = ['Aprovados', 'À analisar'];
  public projectPieChartData: number[] = [127, 21];
  public moneyColors: Array<any> = [{
      backgroundColor: ['rgba(47, 70, 181, 1)', 'rgba(75, 175, 80, 1)']}
  ];

  public projectColors: Array<any> = [{
      backgroundColor: ['rgba(75, 175, 80, 1)', 'rgba(236, 214, 213, 0.72)', ]}
  ];

  public pieType = 'pie';

  constructor() { }

  ngOnInit() {
  }

}
