<script>
    import NavBar from '../components/NavBar.svelte'
    import Hero from '../components/Hero.svelte'
    import About from '../components/About.svelte';
    import BlogPreview from '../components/BlogPreview.svelte'
    import Footer from '../components/Footer.svelte';
</script>

<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Home | Muhammad Saad</title>
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=The+Nautigal:wght@700&display=swap" rel="stylesheet">
      </head>
    <body class="bg-[#0b0909]">
        <NavBar />
        <Hero />
        <About />
        <BlogPreview />
        <Footer />
    </body>
</html>