import {Component, ElementRef, OnInit, QueryList, ViewChildren} from '@angular/core';
import { Chart, registerables } from 'chart.js';
import {ChartsService} from "../../services/charts.service";
import {ChartParsedDataItem, ChartParsedItem} from "../../model/chart";
Chart.register(...registerables);

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent implements OnInit {

  public chartsData!: Array<ChartParsedDataItem>;
  public generalChartData!: any;
  public chartData1!: any;
  chartsInRow: number = 4;
  rows!: any;
  constructor(
      private chartsService: ChartsService,
  ) { }


  ngOnInit(): void {
    this.generalChartData = this.chartsService.parseGeneralChartData();
    this.chartData1 = Array.from(this.chartsService.parseChartData1());
    this.rows = [];
    for (let i=0; i<this.chartData1.length; i++) {
      if (i % this.chartsInRow == 0) {
        this.rows.push([])
      }
      this.rows[this.rows.length - 1].push(this.chartData1[i]);
    }
  }
}
