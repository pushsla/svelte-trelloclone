<script lang="ts">
    import type CardData from "../datatypes/CardData";

    export let card: CardData;

    let cardTitleEditing = false;
    let cardTextEditing = false;
</script>
<style lang="sass">
    .card
      max-width: 100%
      background: #fff
      border: 1px solid black
      border-top: 5px solid transparent
      border-radius: 3px
      padding: 10px 5px 5px
      box-shadow: 0 2px 1px #ccc
      &__title
        max-width: 100%
        font: 18px sans-serif
      &__text
        max-height: 100%
        word-wrap: break-word
        font: 14px sans-serif

</style>

<div class="card" id="card-{card.id}" style="border-top-color: {card.color}">
    {#if cardTitleEditing}
        <input class="card__title" bind:value={card.title}>
    {:else}
        <p class="card__title">{card.title}</p>
    {/if}
    {#if cardTextEditing}
        <input class="card__text" bind:value={card.text}>
    {:else}
        <p class="card__text">{@html card.text}</p>
    {/if}
</div>