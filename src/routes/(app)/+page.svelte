<script>
    import Hero from '$components/Hero.svelte'
    import About from '$components/About.svelte';
    import BlogPreview from '$components/BlogPreview.svelte'
</script>

<svelte:head>
    <title>Home | Muhammad Saad</title>
    <meta name="description" content="Muhammad Saad is a fullstack software engineer who likes to write about privacy, security, cryptocurrency, productivity, fitness, and reading.">
    <meta name="keywords" content="SWE, Blog, Privacy, Security, Productivity, Cryptocurrency, Fitness, Reading">
    <meta name="author" content="Muhammad Saad">
</svelte:head>

<main class="flex flex-col items-center justify-center">
    <Hero />
    <About />
    <BlogPreview />
</main>