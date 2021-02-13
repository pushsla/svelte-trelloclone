<script lang="ts">
    import type BoardData from "../datatypes/BoardData";
    import Column from "./Column.svelte";
    import {dndzone} from "svelte-dnd-action";
    import {flip} from "svelte/animate";

    export let board: BoardData;

    function handleSort(e){
        board.columns = e.detail.items;
    }
</script>
<style lang="sass">
    .board
      &__dnd
        display: flex
        justify-content: flex-start
      &__item
        &+.board__item
          margin-left: 15px
</style>

<main class="board">
    <div class="board__dnd" use:dndzone={{items: board.columns, type:"columns"}} on:consider={handleSort} on:finalize={handleSort}>
        {#each board.columns as column(column.id)}
            <div class="board__item" animate:flip={{duration: 150}}>
                <Column bind:column={column}/>
            </div>
        {/each}
    </div>
</main>