<script>
    import FaArrowRight from 'svelte-icons/fa/FaArrowRight.svelte'
    import FaCalendarAlt from 'svelte-icons/fa/FaCalendarAlt.svelte'
    import FaClock from 'svelte-icons/fa/FaClock.svelte'
</script>

<div class="card max-w-sm md:max-w-xl lg:max-w-xl xl:max-w-md bg-base-100 shadow-lg shadow-neutral hover:shadow-primary hover:scale-105 duration-300">
    <div class="card-body">
      <div class="stat-desc flex items-center mb-2">
        <span class="w-3"><FaClock/></span>
        <pre> 3 MIN READ</pre>
      </div>
      <h2 class="card-title">Article Title</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut tempor augue. In rutrum enim iaculis libero auctor dictum. </p>
      <div class="flex items-center mt-2">
        <div class="stat-desc flex items-center mr-auto">
            <span class="w-3 sm:w-4"><FaCalendarAlt/></span>
            <pre> 2023-11-22</pre>
        </div>
        <div class="card-actions justify-end">
            <button class="btn btn-primary btn-xs sm:btn-sm">
                Read More <span class="w-3 sm:w-4"><FaArrowRight/></span>
            </button>
        </div>
      </div>
    </div>
</div>