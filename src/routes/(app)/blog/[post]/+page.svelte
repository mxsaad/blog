<script lang="ts">
    import SvelteMarkdown from 'svelte-markdown';
    import type { PageData } from './$types';
    import type { DocumentData } from 'firebase/firestore/lite';
    import { posts } from '$lib/posts';
	import { onMount } from 'svelte';

    export let data: PageData;

    let title = 'Blog | Muhammad Saad';
    let desc = 'Muhammad Saad is a fullstack software engineer who likes to write about privacy, security, cryptocurrency, productivity, fitness, and reading.';
    let keywords = 'SWE, Blog, Privacy, Security, Productivity, Cryptocurrency, Fitness, Reading';

    onMount(() => {
        posts.subscribe(all => {
            const post = all.find((post: DocumentData) => post.file === data.post);
            if (post) {
                title = post.title;
                desc = post.desc;
                keywords = post.tags.join(', ');
            }
        });
    });
</script>

<svelte:head>
    <title>{title} | Muhammad Saad</title>
    <meta name="description" content={desc}>
    <meta name="keywords" content={keywords}>
    <meta name="author" content="Muhammad Saad">
</svelte:head>

<article class="w-screen min-h-screen flex flex-col justify-center items-center pt-24 pb-12">
    <div class="prose prose-sm sm:prose-base lg:prose-lg xl:prose-xl">
        <SvelteMarkdown source={data.markdown} />
    </div>
</article>