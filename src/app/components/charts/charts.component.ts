import {Component, ElementRef, OnInit, QueryList, ViewChildren} from '@angular/core';
import { Chart, registerables } from 'chart.js';
import {ChartsService} from "../../services/charts.service";
import {ChartParsedDataItem} from "../../model/chart";
Chart.register(...registerables);

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent implements OnInit {

  //@ViewChildren('canvas') canvasList!: QueryList<ElementRef>

  //public chart: any;
  public chartsData!: Array<ChartParsedDataItem>;
  public generalChartData!: any;
  //public chartsIdList!: Array<number>;
  public charts!: Array<Chart>;
  chartsInRow: number = 4; // number of companies in row
  rows!: any;
  constructor(
      private chartsService: ChartsService,
  ) { }


  ngOnInit(): void {
    this.chartsData = this.chartsService.parseChartData();
    this.generalChartData = this.chartsService.parseGeneralChartData();
    console.log(this.generalChartData, typeof this.generalChartData);
    this.rows = this.chartsData.reduce((acc, value, index) => {
      if (index % this.chartsInRow == 0 && index !== 0) acc.push([])
      // @ts-ignore
      acc[acc.length - 1].push(value)
      return acc;
    }, [[]]);
    console.log("rows: ", this.rows)
  }
}
