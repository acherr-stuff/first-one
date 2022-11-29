import {AfterViewInit, Component, Inject, Input} from '@angular/core';
import { ChartParsedItem} from "../../../model/chart";
import {ChartsService} from "../../../services/charts.service";

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements AfterViewInit {

  @Input() chartData!: ChartParsedItem;

  constructor(
      private chartsService: ChartsService,
  ) { }


  ngAfterViewInit() {
    this.chartsService.createChart(this.chartData.src_office_id, this.chartData.labels, this.chartData.data, this.chartData.office_name);
  }

}
