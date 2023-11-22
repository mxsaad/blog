<script>
    import BlogPreviewCard from "./BlogPreviewCard.svelte";
</script>

<section class="w-screen flex justify-center items-center">
    <div class="max-w-md md:max-w-lg lg:max-w-4xl xl:max-w-6xl p-8">
        <h2 class="text-2xl md:text-3xl font-bold mb-6">Latest Articles</h2>
        <div class="flex flex-col xl:flex-row gap-6">
          <BlogPreviewCard />
          <BlogPreviewCard />
          <BlogPreviewCard />
        </div>
    </div>
</section>