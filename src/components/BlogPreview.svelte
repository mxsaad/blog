<script>
    import FaNewspaper from 'svelte-icons/fa/FaNewspaper.svelte'
    import FaArrowRight from 'svelte-icons/fa/FaArrowRight.svelte'
    import BlogPreviewCard from "./BlogPreviewCard.svelte";
</script>

<section class="w-screen flex justify-center items-center">
    <div class="max-w-md md:max-w-lg lg:max-w-4xl xl:max-w-6xl p-8 mb-6">
        <div class="flex items-center mb-6">
            <h2 class="flex flex-row items-center gap-2 text-lg sm:text-2xl md:text-3xl font-bold">
                <span class="h-4 w-4 sm:h-6 sm:w-6 md:h-8 md:w-8"><FaNewspaper/></span> Latest Articles
            </h2>
            <a class="text-sm sm:text-md md:text-lg flex items-center gap-2 link link-primary link-hover ml-auto hover:scale-105 duration-300">
                All Articles <span class="h-3 w-3 sm:h-4 sm:w-4"><FaArrowRight/></span>
            </a>
        </div>
        <div class="flex flex-col xl:flex-row gap-6">
          <BlogPreviewCard />
          <BlogPreviewCard />
          <BlogPreviewCard />
        </div>
    </div>
</section>