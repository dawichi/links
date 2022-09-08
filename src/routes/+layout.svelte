<script lang="ts">
    import '../app.css'
</script>

<div class="bg-zinc-900 text-white min-h-screen">
    <header class="">
        <nav class="bg-zinc-800 p-4 flex justify-between items-center border border-x-0 border-t-0 ">
            <div class="flex items-center">
                <img class="w-12" src='/favicon.png' alt="Svelte Logo" />
                <h1 class="text-xl ml-5">URL Shortcuts</h1>
            </div>

            <div class="text-2xl hover:text-red-500">
                <a title="See project" href="https://github.com/dawichi/links" target="_blank" rel="noreferrer">
                    <i class="bi bi-github" />
                </a>
            </div>
        </nav>
    </header>
    
    <main class="container mx-auto px-2">
        <slot></slot>
    </main>
</div>