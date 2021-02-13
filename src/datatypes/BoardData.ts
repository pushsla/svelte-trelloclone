import type ColumnData from "./ColumnData";

export default interface BoardData{
    id: number;
    name: string;
    columns: ColumnData[];
}