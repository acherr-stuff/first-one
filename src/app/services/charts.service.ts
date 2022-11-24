import { Injectable } from '@angular/core';
import {Chart}  from 'chart.js';
import * as data from '../data/charts.json'
import {ChartDataItem, ChartParsedDataItem, ChartParsedItem, ChartParsedItemData} from "../model/chart";


// export const group = (data: any) => {
//   const counts = data.reduce(
//       (rslt: any, { (value: any) }) => rslt.set(value, ~~rslt.get(value) + 1)
//       , new Map());
//   return [...counts.entries()].map(
//       ([value, groupCount]) => ({ value, groupCount })
//   );
// };

@Injectable({
  providedIn: 'root'
})
export class ChartsService {

  chartData = new Map();
  chartParsedData!: Array<ChartParsedDataItem>;

  constructor() { }

  parseChartData1() {
    return (Array.from(JSON.parse(JSON.stringify(data))) as Array<ChartDataItem>).reduce((acc: any, cur)=>{

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
        acc.set(cur.src_office_id, {src_office_id, labels, data});
      }
       return acc;
    },new Map());


  }

  createChart(id: number | string, labels: Array<string>, data: ChartParsedItemData ) {

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
            display: typeof id === "number",
            text: `Chart for ${id} office `
          }
        }
      }
    });
  }

  parseGeneralChartData() {
    const parsed = (Array.from(JSON.parse(JSON.stringify(data))) as Array<ChartDataItem>).reduce((acc: any, cur)=>{
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


    let chart = { labels: [], data: {qty_orders: <any[]>[], qty_new: <any[]>[], qty_delivered: <any[]>[], qty_return: <any[]>[]}};
    chart.labels = Array.from(parsed.keys());
    Array.from(parsed.values()).forEach((el: any) => {
      chart.data.qty_orders.push(el.qty_orders);
      chart.data.qty_new.push(el.qty_new);
      chart.data.qty_delivered.push(el.qty_delivered);
      chart.data.qty_return.push(el.qty_return);
    })
    console.log("labels: ", chart.labels)
    console.log("data: ", chart.data)

    return chart;
  }

}
