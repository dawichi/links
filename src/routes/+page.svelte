<script lang="ts">
    import '../app.css'
    import { links } from '$lib/data/links'
</script>

<section>
    <h2 class="bg-red-300">hello</h2>
    {#each links as link}
        <article>
            <p>{link.alias}</p>
        </article>
    {/each}
</section>
