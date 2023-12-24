<script lang="ts">
    import FaEnvelope from 'svelte-icons/fa/FaEnvelope.svelte'
    import FaGithub from 'svelte-icons/fa/FaGithub.svelte'
    import FaLinkedin from 'svelte-icons/fa/FaLinkedin.svelte'
    import hero from '$assets/hero.gif'
</script>

<section>
    <div class="hero w-screen min-h-screen" style="background-image: url({hero});">
        <div class="hero-overlay bg-base-100 bg-opacity-50"></div>
        <div class="hero-content text-start">
          <div class="max-w-md md:max-w-lg lg:max-w-2xl px-4">
            <h3 class="mb-3 text-2xl md:text-3xl lg:text-4xl font-bold">Hi, my name is</h3>
            <h1 class="font-['The_Nautigal'] mb-3 text-5xl md:text-6xl lg:text-7xl font-bold text-primary duration-300">Muhammad Saad,</h1>
            <h3 class="mb-3 text-2xl md:text-3xl lg:text-4xl font-bold">Software Engineer.</h3>
            <div class="text-primary flex">
                <a class="btn join-item btn-ghost hover:text-primary duration-300" href="mailto:hi@mxsaad.com" target="_blank" rel="noopener noreferrer">
                    <span class="w-6 md:w-7 lg:w-8"><FaEnvelope/></span>
                </a>
                <a class="btn join-item btn-ghost hover:text-primary duration-300" href="https://github.com/mxsaad" target="_blank" rel="noopener noreferrer">
                    <span class="w-6 md:w-7 lg:w-8"><FaGithub/></span>
                </a>
                <a class="btn join-item btn-ghost hover:text-primary duration-300" href="https://linkedin.com/in/mxsaad" target="_blank" rel="noopener noreferrer">
                    <span class="w-6 md:w-7 lg:w-8"><FaLinkedin/></span>
                </a>
            </div>
          </div>
        </div>
    </div>
</section>