<script lang="ts">
    import FaNewspaper from 'svelte-icons/fa/FaNewspaper.svelte';
    import BlogPreviewCard from "$components/BlogPreviewCard.svelte";
    import BlogPreviewCardSkeleton from '$components/BlogPreviewCardSkeleton.svelte';
    import { onMount } from 'svelte';
    import { posts } from '$lib/posts';
    import { formatDate } from '$lib/functions';
    import type { DocumentData } from 'firebase/firestore/lite';

    let filteredPosts: DocumentData[] = [];
    let searchTerm = '';
    let timer: NodeJS.Timeout;
    let loading = true;

    const filterPosts = (s: string) => {
        filteredPosts = $posts.filter(post =>
            post.title.toLowerCase().includes(s) || post.desc.toLowerCase().includes(s)
        );
    };
    const debounce = (fn: Function) => {
        clearTimeout(timer);
        timer = setTimeout(() => fn(), 300);
    };

    onMount(async () => {
        posts.subscribe(data => {
            if (data.length > 0)
                loading = false;
        });
    });

    $: searchTerm, debounce(() => filterPosts(searchTerm.toLowerCase()))
</script>

<svelte:head>
    <title>Blog | Muhammad Saad</title>
    <meta name="description" content="Muhammad Saad is a fullstack software engineer who likes to write about privacy, security, cryptocurrency, productivity, fitness, and reading.">
    <meta name="keywords" content="SWE, Blog, Privacy, Security, Productivity, Cryptocurrency, Fitness, Reading">
    <meta name="author" content="Muhammad Saad">
</svelte:head>

<main class="w-screen min-h-screen flex flex-col justify-center items-center pt-20 pb-12 gap-6">
    <h1 class="mt-10 flex items-center gap-2 text-xl sm:text-2xl md:text-3xl font-bold">
        <span class="h-4 w-4 sm:h-6 sm:w-6 md:h-8 md:w-8"><FaNewspaper/></span> All Articles
    </h1>
    <input type="text" placeholder="Search" bind:value={searchTerm} class="input input-bordered input-primary input-sm sm:input-md w-[20rem] sm:w-[24rem] md:w-[28rem] lg:w-[42rem]"/>
    <div class="flex flex-col items-center justify-center gap-6">
        {#if loading}
            <BlogPreviewCardSkeleton/>
            <BlogPreviewCardSkeleton/>
            <BlogPreviewCardSkeleton/>
        {:else}
            {#each filteredPosts as post (post.id)}
                <BlogPreviewCard title={post.title} desc={post.desc} mins={post.mins} date={formatDate(post.date)} file={post.file}/>
            {/each}
        {/if}
    </div>
</main>
