<script lang="ts">
    import SvelteMarkdown from 'svelte-markdown';
    import type { PageData } from './$types';
    import { posts } from '$lib/posts';

    export let data: PageData;
</script>

<svelte:head>
    <title>Blog | Muhammad Saad</title>
    <meta name="description" content="Muhammad Saad is a fullstack software engineer who likes to write about privacy, security, cryptocurrency, productivity, fitness, and reading.">
    <meta name="keywords" content="SWE, Blog, Privacy, Security, Productivity, Cryptocurrency, Fitness, Reading">
    <meta name="author" content="Muhammad Saad">
</svelte:head>

<article class="w-screen min-h-screen flex flex-col justify-center items-center pt-24 pb-12">
    <div class="prose prose-sm sm:prose-base lg:prose-lg">
        <SvelteMarkdown source={data.markdown} />
    </div>
</article>