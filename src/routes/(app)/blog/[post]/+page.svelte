<script lang="ts">
    import type { PageData } from './$types';
    import SvelteMarkdown from 'svelte-markdown';

    export let data: PageData;
</script>

<article class="w-screen min-h-screen flex flex-col justify-center items-center pt-32 pb-12">
    <div class="prose prose-sm sm:prose-base lg:prose-lg">
        <SvelteMarkdown source={data.markdown} />
    </div>
</article>