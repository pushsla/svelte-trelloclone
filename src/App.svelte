<script lang="ts">
    import Board from "./components/Board.svelte";
    import {BoardStore} from "./stores/BoardStore";
    import type BoardData from "./datatypes/BoardData";

    export let boards: BoardData[];

    const unsubscribe_board = BoardStore.subscribe(value => {
        boards = value;
    })
</script>
<style lang="sass"></style>

<Board bind:board={boards[0]}/>
