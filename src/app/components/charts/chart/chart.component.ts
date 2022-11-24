import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {ChartGeneralParsedData, ChartParsedItem} from "../../../model/chart";
import {ChartsService} from "../../../services/charts.service";

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements AfterViewInit {

  @Input() chartData!: any;
  @Input() isGeneral?: boolean;

  constructor(
      private chartsService: ChartsService
  ) { }


  ngAfterViewInit() {
    if (this.isGeneral) {
      this.chartsService.createChart("general", this.chartData.labels,  this.chartData.data);
    } else {
      this.chartsService.createChart(this.chartData.src_office_id, this.chartData.labels, this.chartData.data);
    }
  }

}
