<script lang="ts">
    import FaUserCircle from 'svelte-icons/fa/FaUserCircle.svelte'
    import FaArrowRight from 'svelte-icons/fa/FaArrowRight.svelte'
</script>

<section class="p-8 w-scren flex flex-col items-center">
    <div class="flex items-center mb-6">
        <h2 class="flex gap-2 items-center text-lg sm:text-xl md:text-2xl font-bold">
            <span class="h-4 w-4 sm:h-6 sm:w-6 md:h-8 md:w-8"><FaUserCircle/></span> About Me
        </h2>
    </div>
    <div class="card p-8 gap-4 w-[20rem] sm:w-[24rem] md:w-[28rem] lg:w-[42rem] bg-base-100 shadow-lg shadow-neutral hover:shadow-primary duration-300">
        <h2 class="card-title self-center text-4xl sm:text-5xl font-['The_Nautigal']">Muhammad Saad</h2>
        <p class="text-sm sm:text-md">Using modern technologies to solve modern problems. My specialty is fullstack development, but I love learning new technologies. I'm passionate about privacy, security, cryptocurrency, productivity, fitness, and reading. If that sounds like you, check out my blog or reach out to connect.</p>
        <div class="card-actions justify-end">
            <a class="btn btn-primary btn-xs sm:btn-sm" href="mailto:hi@mxsaad.com" target="_blank" rel="noopener noreferrer">
                Contact <span class="w-3 sm:w-4"><FaArrowRight/></span>
            </a>
        </div>
    </div>
</section>