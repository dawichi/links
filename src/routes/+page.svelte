<script lang="ts">
    import Card from '$lib/Card.svelte'
    import { links } from '$lib/data/links'
</script>

<div>
    <h1 class="text-2xl text-center mt-8 p-2">Custom links for personal use</h1>
    <hr />
    <br />

    {#each Object.keys(links) as tag}
        <div>{tag}</div>
        <section class="grid grid-cols-4 gap-4">
            {#each Object.keys(links[tag]) as alias}
                <Card {alias} url={links[tag][alias]} />
            {/each}
        </section>
    {/each}
</div>
