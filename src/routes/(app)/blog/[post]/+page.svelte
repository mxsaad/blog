<script lang="ts">
    import SvelteMarkdown from 'svelte-markdown';
    import type { PageData } from './$types';
    import type { DocumentData } from 'firebase/firestore/lite';
    import { posts } from '$lib/posts';
	import { onMount } from 'svelte';
    import FaArrowLeft from 'svelte-icons/fa/FaArrowLeft.svelte'

    export let data: PageData;

    let title = 'Blog';
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
    <div class="px-10 prose prose-sm sm:prose-base lg:prose-lg">
        <SvelteMarkdown source={data.markdown} />
    </div>
    <a href="/blog" class="mt-8 flex items-center gap-2 btn btn-primary btn-sm sm:btn-md">
        <span class="h-4 w-4"><FaArrowLeft/></span> Back to Blog
    </a>
</article>
