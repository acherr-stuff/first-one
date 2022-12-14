import {Component, OnInit} from '@angular/core';
import {Chart, registerables} from 'chart.js';
import {ChartsService} from "../../services/charts.service";
import {ChartParsedItem} from "../../model/chart";
Chart.register(...registerables);

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent implements OnInit {

  public chartsData!: ChartParsedItem[];
  chartsInRow: number = 4;
  rows: ChartParsedItem[][] = [];
  constructor(
      private chartsService: ChartsService,
  ) { }


  ngOnInit(): void {
    this.chartsData = this.chartsService.parseChartData1();
    this.chartsData.push(this.chartsService.parseGeneralChartData())
    for (let i=0; i<this.chartsData.length; i++) {
      if (i % this.chartsInRow == 0) {
        this.rows.push([])
      }
      this.rows[this.rows.length - 1].push(this.chartsData[i]);
    }
  }

}
