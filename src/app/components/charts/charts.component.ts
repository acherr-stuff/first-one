import {Component, OnInit} from '@angular/core';
import { Chart, registerables } from 'chart.js';
import {ChartsService} from "../../services/charts.service";
import {ChartGeneralParsedData, ChartParsedItem} from "../../model/chart";
Chart.register(...registerables);

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent implements OnInit {

  public chartsData!: Array<ChartParsedItem>;
  public generalChartData!: ChartGeneralParsedData;
  chartsInRow: number = 4;
  rows!: any;
  constructor(
      private chartsService: ChartsService,
  ) { }


  ngOnInit(): void {
    this.generalChartData = this.chartsService.parseGeneralChartData();
    this.chartsData = this.chartsService.parseChartData1();
    this.rows = [];
    for (let i=0; i<this.chartsData.length; i++) {
      if (i % this.chartsInRow == 0) {
        this.rows.push([])
      }
      this.rows[this.rows.length - 1].push(this.chartsData[i]);
    }
  }
}
