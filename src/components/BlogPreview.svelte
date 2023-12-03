<script>
    import FaNewspaper from 'svelte-icons/fa/FaNewspaper.svelte'
    import FaArrowRight from 'svelte-icons/fa/FaArrowRight.svelte'
    import BlogPreviewCard from "./BlogPreviewCard.svelte";
    import { onMount } from 'svelte';
    import { Client, Databases, Query } from 'appwrite';

    let posts = [];
    let loading = true;

    const client = new Client()
        .setEndpoint('https://cloud.appwrite.io/v1')
        .setProject('655e6a0499db44afa840');
    const databases = new Databases(client);

    const query = [
        Query.select(['title', 'desc', 'mins', 'date']),
        Query.limit(3),
    ];

    onMount(() => {
        databases
            .listDocuments('656ca40858cbb68a748f', '656ca41ce59710b30826', query)
            .then((response) => {
                console.log('Fetched posts:', response.documents);
                posts = response.documents;
            })
            .catch((error) => {
                console.error('Error fetching posts:', error);
            })
            .finally(() => loading = false);
    });
</script>

<section class="w-screen flex flex-col justify-center items-center mb-6 p-8">
        <div class="flex items-center justify-between mb-6 w-[24rem] md:w-[28rem] lg:w-[42rem]">
            <h2 class="flex-grow flex items-center gap-2 text-lg sm:text-xl md:text-2xl font-bold">
                <span class="h-4 w-4 sm:h-6 sm:w-6 md:h-8 md:w-8"><FaNewspaper/></span> Latest Articles
            </h2>
            <a class="text-sm sm:text-md md:text-lg flex items-center gap-2 link link-primary link-hover ml-auto hover:scale-105 duration-300">
                All Articles <span class="h-3 w-3 sm:h-4 sm:w-4"><FaArrowRight/></span>
            </a>
        </div>
        <div class="flex flex-col xl:flex-row gap-6">
            {#if loading}
                <div class="skeleton h-52 w-[24rem] md:w-[28rem] lg:w-[42rem] xl:w-[24rem]"></div>
            {:else}
                {#each posts as post (post.id)}
                    <BlogPreviewCard title={post.title} desc={post.desc} mins={post.mins} date={post.date.split('T')[0]}/>
                {/each}
            {/if}
        </div>
</section>