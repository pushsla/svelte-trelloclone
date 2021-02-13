import type CardData from "./CardData";

export default interface ColumnData{
    id: number;
    title: string;
    cards: CardData[];
}