import { Injectable } from '@angular/core';
import {Chart}  from 'chart.js';
import * as data from '../data/charts.json'
import {ChartDataItem, ChartParsedDataItem} from "../model/chart";


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
 // chartGeneralParsedData!: Map;
  constructor() { }



  parseChartData(): Array<ChartParsedDataItem> {
   return (Array.from(JSON.parse(JSON.stringify(data))) as Array<ChartDataItem>).reduce((acc: any, cur)=>{
      acc[cur.src_office_id] = acc[cur.src_office_id] || {
        src_office_id: cur.src_office_id,
        office_name: cur.office_name,
        dt_date: [],
        qty_orders: [],
        qty_new: [],
        qty_delivered: [],
        qty_return: [],
      };
      acc[cur.src_office_id].dt_date.push(cur.dt_date);
      acc[cur.src_office_id].qty_orders.push(cur.qty_orders);
      acc[cur.src_office_id].qty_new.push(cur.qty_new);
      acc[cur.src_office_id].qty_delivered.push(cur.qty_delivered);
      acc[cur.src_office_id].qty_return.push(cur.qty_return);
      return acc;
    },[]).filter((el: any) => el !== undefined);


  }

  // createChart(chartItem: ChartParsedDataItem) {
  //   const chartId = 'myChart-' + chartItem.src_office_id;
  //   const datasets = [
  //     {
  //       label: 'qty_orders',
  //       data: chartItem.qty_orders,
  //       borderWidth: 1
  //     },
  //     {
  //       label: 'qty_new',
  //       data: chartItem.qty_new,
  //       borderWidth: 1
  //     },
  //     {
  //       label: 'qty_delivered',
  //       data: chartItem.qty_delivered,
  //       borderWidth: 1
  //     },
  //     {
  //       label: 'qty_return',
  //       data: chartItem.qty_return,
  //       borderWidth: 1
  //     },
  //   ]
  //   const chart = new Chart(chartId, {
  //     type: 'line',
  //     data: {
  //       labels: chartItem.dt_date,
  //       datasets: datasets
  //     },
  //     options: {
  //       scales: {
  //         x: {
  //           beginAtZero: true,
  //         }
  //       }
  //     }
  //   });
  // }

  createChart(chartItem: ChartParsedDataItem, index: number | string) {
    const chartId = `myChart-${index}`;
    const datasets = [
      {
        label: 'qty_orders',
        data: chartItem.qty_orders,
        borderWidth: 1
      },
      {
        label: 'qty_new',
        data: chartItem.qty_new,
        borderWidth: 1
      },
      {
        label: 'qty_delivered',
        data: chartItem.qty_delivered,
        borderWidth: 1
      },
      {
        label: 'qty_return',
        data: chartItem.qty_return,
        borderWidth: 1
      },
    ]
    const chart = new Chart(chartId, {
      type: 'line',
      data: {
        labels: chartItem.dt_date,
        datasets: datasets
      },
      options: {
        scales: {
          x: {
            beginAtZero: true,
          }
        }
      }
    });
  }

  // createGeneralChart(chartItem: Map<any, any>) {
  //   const chartId = `myChart-general`;
  //   const datasets = [
  //     {
  //       label: 'qty_orders',
  //       data: chartItem.qty_orders,
  //       borderWidth: 1
  //     },
  //     {
  //       label: 'qty_new',
  //       data: chartItem.qty_new,
  //       borderWidth: 1
  //     },
  //     {
  //       label: 'qty_delivered',
  //       data: chartItem.qty_delivered,
  //       borderWidth: 1
  //     },
  //     {
  //       label: 'qty_return',
  //       data: chartItem.qty_return,
  //       borderWidth: 1
  //     },
  //   ];
  //
  //   const chart = new Chart(chartId, {
  //     type: 'line',
  //     data: {
  //       labels: chartItem.keys().,
  //       datasets: datasets
  //     },
  //     options: {
  //       scales: {
  //         x: {
  //           beginAtZero: true,
  //         }
  //       }
  //     }
  //   });
  // }


  parseGeneralChartData() {
    return (Array.from(JSON.parse(JSON.stringify(data))) as Array<ChartDataItem>).reduce((acc: any, cur)=>{
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
      //acc.ser()
      return acc;
    }, new Map());

  }

}
