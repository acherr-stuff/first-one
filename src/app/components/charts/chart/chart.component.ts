import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {ChartParsedDataItem} from "../../../model/chart";
import {ChartsService} from "../../../services/charts.service";

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit, AfterViewInit {

  @Input() chartData!: ChartParsedDataItem;
  @Input() isGeneral?: boolean;

  constructor(
      private chartsService: ChartsService
  ) { }

  ngOnInit(): void {
    //console.log("chartitemdata: ", this.chartData)
    console.log("isGeneral: ", this.isGeneral)
  }

  ngAfterViewInit() {
    this.chartsService.createChart(this.chartData, this.isGeneral ? "general" : this.chartData.src_office_id);
  }

}
