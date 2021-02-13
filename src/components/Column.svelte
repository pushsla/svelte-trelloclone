<script lang="ts">
    import type ColumnData from "../datatypes/ColumnData";
    import Card from "./Card.svelte";
    import {dndzone} from "svelte-dnd-action";
    import {flip, } from "svelte/animate";

    export let column: ColumnData;

    function handleSort(e){
        column.cards = e.detail.items;
    }

    let columnTitleEditing = false;
    function editColumnTitle(n: boolean){
        columnTitleEditing = n;
    }
</script>
<style lang="sass">

    .column
      width: 210px

      display: flex
      flex-direction: column
      justify-content: flex-start
      padding: 30px 10px 10px

      background: #f8f8f8
      border: 1px solid #999
      border-radius: 5px
      box-shadow: 0 5px 5px #888
      &__title
        font: 20px sans-serif
        text-align: center
        margin-bottom: 3px
      &__dnd
        min-height: 20px
      &__item
        &+.column__item
          margin-top: 10px

</style>

<section class="column" id="col-{column.id}" >
    {#if columnTitleEditing}
        <input class="column__title" on:mouseleave={()=>editColumnTitle(false)} bind:value={column.title} placeholder="Column title...">
    {:else }
        <span class="column__title" on:dblclick={()=>editColumnTitle(true)}>{column.title}</span>
    {/if}
    <div class="column__dnd" use:dndzone={{items: column.cards, type: "cards"}} on:consider={handleSort} on:finalize={handleSort}>
        {#each column.cards as card(card.id)}
            <div class="column__item" animate:flip={{duration:150}}>
                <Card bind:card={card}/>
            </div>
        {/each}
    </div>
</section>