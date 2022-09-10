<script type="ts">
    import { page } from '$app/stores'
    import { goto } from '$app/navigation'
    import { browser } from '$app/environment'
    import { linksIndex } from '$lib/data/links'

    const linkUrl = linksIndex[$page.params.link]
    if (browser) {
        if (linkUrl) goto(linkUrl.href)
        else throw goto('/')
    }
</script>

<div>redirecting</div>
