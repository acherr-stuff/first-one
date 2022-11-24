export interface ChartDataItem {
    src_office_id: number;
    office_name: string;
    dt_date: string[],
    qty_orders: number,
    qty_new: number,
    qty_delivered: number,
    qty_return: number
}

export interface ChartParsedDataItem {
    src_office_id: number;
    office_name: string;
    dt_date: string[],
    qty_orders: number[],
    qty_new: number[],
    qty_delivered: number[],
    qty_return: number[]
}

export interface ChartParsedItem {
    src_office_id: number;
    office_name: string;
    labels: string[],
    data: ChartParsedItemData,
}

export interface ChartParsedItemData {
    qty_orders: number[],
    qty_new: number[],
    qty_delivered: number[],
    qty_return: number[]
}


export interface ChartGeneralParsedData {
    labels: string[],
    data: ChartParsedItemData
}

export interface ChartDataItemFields {
    dt_date: string;
    qty_orders: number;
    qty_new: number;
    qty_delivered: number;
    qty_return: number;
}
