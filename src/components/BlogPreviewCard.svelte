<script lang="ts">
    import FaArrowRight from 'svelte-icons/fa/FaArrowRight.svelte'
    import FaCalendarAlt from 'svelte-icons/fa/FaCalendarAlt.svelte'
    import FaClock from 'svelte-icons/fa/FaClock.svelte'

    export let title: string
    export let desc: string
    export let date: string
    export let mins: number
    export let file: string
</script>

<div class="card w-[20rem] sm:w-[24rem] md:w-[28rem] lg:w-[42rem] xl:w-[28rem] 2xl:w-[24rem] bg-base-100 shadow-lg shadow-neutral hover:shadow-primary hover:scale-105 duration-300">
    <div class="card-body">
      <div class="stat-desc flex items-center mb-2">
        <span class="w-3"><FaClock/></span> &nbsp {mins} MIN READ
      </div>
      <h2 class="card-title text-md">{title}</h2>
      <p class="text-sm sm:text-md">{desc}</p>
      <div class="flex items-center mt-2">
        <div class="stat-desc flex items-center mr-auto">
            <span class="w-3 sm:w-4"><FaCalendarAlt/></span> &nbsp {date}
        </div>
        <div class="card-actions justify-end">
            <a href="/blog/{file}" class="btn btn-primary btn-xs sm:btn-sm">
                Read More <span class="w-3 sm:w-4"><FaArrowRight/></span>
            </a>
        </div>
      </div>
    </div>
</div>