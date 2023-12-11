<script lang="ts">
    import FaNewspaper from 'svelte-icons/fa/FaNewspaper.svelte'
    import FaArrowRight from 'svelte-icons/fa/FaArrowRight.svelte'
    import BlogPreviewCard from "$components/BlogPreviewCard.svelte";
    import BlogPreviewCardSkeleton from './BlogPreviewCardSkeleton.svelte';
    import { onMount } from 'svelte';
    import { posts } from '$lib/posts';
    import { formatDate } from '$lib/functions';

    let loading = true;

    onMount(async () => {
        posts.subscribe(data => {
            if (data.length > 0)
                loading = false;
        });
    });
</script>

<section class="justify-self-center w-fit flex flex-col justify-center items-center mt-6 mb-12">
    <div class="w-full flex items-center justify-between mb-6">
        <h2 class="flex-grow flex items-center gap-2 text-lg sm:text-xl md:text-2xl font-bold">
            <span class="h-4 w-4 sm:h-6 sm:w-6 md:h-8 md:w-8"><FaNewspaper/></span> Latest Articles
        </h2>
        <a href="/blog" class="text-sm sm:text-md md:text-lg flex items-center gap-2 link link-primary link-hover ml-auto hover:scale-105 duration-300">
            All Articles <span class="h-3 w-3 sm:h-4 sm:w-4"><FaArrowRight/></span>
        </a>
    </div>
    <div class="flex flex-col xl:flex-row flex-wrap items-center justify-center gap-6 xl:max-w-[57.5rem] 2xl:max-w-[75rem]">
        {#if loading}
            <BlogPreviewCardSkeleton/>
        {:else}
            {#each $posts.slice(0, 3) as post (post.id)}
                {#if post}
                    <BlogPreviewCard title={post.title} desc={post.desc} mins={post.mins} date={formatDate(post.date)} file={post.file}/>
                {/if}
            {/each}
        {/if}
    </div>
</section>
