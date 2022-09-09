<script lang="ts">
    import Card from '$lib/Card.svelte'
    import { links } from '$lib/data/links'
</script>

<div>
    <h1 class="text-2xl text-center mt-8 p-2">Custom links for personal use</h1>
    <hr />
    <br />

    {#each Object.keys(links) as tag}
        <section class="py-2">
            <h2 class="py-2 text-xl"># {tag}</h2>
            <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                {#each Object.keys(links[tag]) as alias}
                    <Card {alias} url={links[tag][alias]} />
                {/each}
            </div>
        </section>
    {/each}
</div>
