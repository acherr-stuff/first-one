import { Injectable } from '@angular/core';
import {Chart}  from 'chart.js';
import * as data from '../data/charts.json'
import {ChartDataItem, ChartGeneralParsedData, ChartParsedItem, ChartParsedItemData} from "../model/chart";


@Injectable({
  providedIn: 'root'
})
export class ChartsService {

  constructor() { }

  parseChartData1(): Array<ChartParsedItem> {
    return Array.from((Array.from(JSON.parse(JSON.stringify(data))) as Array<ChartDataItem>).reduce((acc: Map<number,any>, cur)=>{
      if (acc.get(cur.src_office_id)) {
        acc.get(cur.src_office_id).data.qty_orders.push(cur.qty_orders);
        acc.get(cur.src_office_id).data.qty_new.push(cur.qty_new);
        acc.get(cur.src_office_id).data.qty_delivered.push(cur.qty_delivered);
        acc.get(cur.src_office_id).data.qty_return.push(cur.qty_return);
        acc.get(cur.src_office_id).labels.push(cur.dt_date);
      } else {
        const data = {
          qty_orders: [cur.qty_orders],
          qty_new: [cur.qty_new],
          qty_delivered: [cur.qty_delivered],
          qty_return: [cur.qty_return],
        };
        const labels = [cur.dt_date]
        const src_office_id = cur.src_office_id;
        const office_name = cur.office_name;
        acc.set(cur.src_office_id, {src_office_id, office_name, labels, data});
      }
       return acc;
    },new Map()).values());
  }

  createChart(id: number | string,  labels: Array<string>, data: ChartParsedItemData, office_name?: string, ) {
    const chartId = `myChart-${id}`;
    const datasets = [
      {
        label: 'qty_orders',
        data: data.qty_orders,
        borderWidth: 1
      },
      {
        label: 'qty_new',
        data: data.qty_new,
        borderWidth: 1
      },
      {
        label: 'qty_delivered',
        data: data.qty_delivered,
        borderWidth: 1
      },
      {
        label: 'qty_return',
        data: data.qty_return,
        borderWidth: 1
      },
    ];
    const chart = new Chart(chartId, {
      type: 'line',
      data: {
        labels: labels,
        datasets: datasets
      },
      options: {
        scales: {
          x: {
            beginAtZero: true,
          },
          y: {
            ticks: {
              precision: 0
            }
          }
        },
        plugins: {
          title: {
            display: true,
            text: office_name
          }
        }
      }
    });
  }

  parseGeneralChartData(): ChartParsedItem {
    const parsed = (Array.from(JSON.parse(JSON.stringify(data))) as Array<ChartDataItem>).reduce((acc: Map<string, any>, cur)=>{
      if (acc.get(cur.dt_date)) {
        const data = {
          qty_orders: acc.get(cur.dt_date).qty_orders + cur.qty_orders,
          qty_new: acc.get(cur.dt_date).qty_new + cur.qty_new,
          qty_delivered: acc.get(cur.dt_date).qty_delivered + cur.qty_delivered,
          qty_return: acc.get(cur.dt_date).qty_new + cur.qty_new,
        };
        acc.set(cur.dt_date, data);
      } else {
        const data = {
          qty_orders: cur.qty_orders,
          qty_new: cur.qty_new,
          qty_delivered: cur.qty_delivered,
          qty_return: cur.qty_new,
        };
        acc.set(cur.dt_date, data);
      }
      return acc;
    }, new Map());


    const chart: ChartParsedItem = {src_office_id: "general", office_name: "General Chart", labels: <string[]>[], data: {qty_orders: <number[]>[], qty_new: <number[]>[], qty_delivered: <number[]>[], qty_return: <number[]>[]}};
    chart.labels = Array.from(parsed.keys());
    Array.from(parsed.values()).forEach((el: any) => {
      chart.data.qty_orders.push(el.qty_orders);
      chart.data.qty_new.push(el.qty_new);
      chart.data.qty_delivered.push(el.qty_delivered);
      chart.data.qty_return.push(el.qty_return);
    })
    return chart;
  }

}
