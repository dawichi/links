<script lang="ts">
    export let alias: string
    export let url: URL

    const favicon = url.origin + '/favicon.ico'
    const favicon2 = url.origin + '/favicon.png'
</script>

<a href={url.href} class="cursor-pointer hover:bg-zinc-600" rel="non-referrer" target="_blank">
    <article class="border rounded p-2 flex gap-4 items-center bg-zinc-800">
        <div class="w-10 h-10 bg-white p-1 rounded">
            <object data={favicon} type="image/x-icon" title="" class="w-8 h-8" >
                <img src={favicon2} alt="" />
            </object>
        </div>
        <span>{alias}</span>
    </article>
</a>
