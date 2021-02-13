import {writable} from "svelte/store";
import type ColumnData from "../datatypes/ColumnData";
import type BoardData from "../datatypes/BoardData";

const defaultBoard: BoardData[] = [{id:0, name:"test board", columns:[
        {id: 0, title: "Linux", cards: [
            {id: 1, title: "Изучить Bash", text: "Изучить:<ul><li>Переменные</li><li>Форматирование</li><li>POSIX</li></ul>", color:"#7f7"},
            {id: 2, title: "Установить Arch", text: "Установить и натсроить ArchLinux"},
        ]},
        {id: 1, title: "Web", cards: [
            {id: 3, title: "HTML", text: "Сверстать лендинг-пейдж на <b>HTML</b>"},
            {id: 4, title: "CSS", text: "Изучить основы CSS и препроцессора SASS. Добавить в лендинг стили и анимации.", color:"#f77"},
            {id: 5, title: "TypeScript", text: "Изучить <i>TypeScript</i> и добавить на лендинг какой-нибудь интерактив."},
        ]},
        {id: 2, title: "Rust", cards: [
            {id: 6, title: "JavaScript", text: "Ой, кажется я пропустил изучение JS. Поставить эту задачу между <b>CSS</b> и <b>TypeScript</b>", color:"#77f"},
            {id: 7, title: "Structs", text: "Изучить структуры Rust"},
            {id: 8, title: "Traits", text: "Реализовать и научиться использовать типажи Rust"},
        ]}
    ]}];

export const BoardStore = writable(defaultBoard);