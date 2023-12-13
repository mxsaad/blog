<script lang="ts">
    export let name: string;
    export let message: string;
    export let timestamp: string;
</script>

<div class="card mb-6 bg-base-100 sm:break-inside-avoid shadow-lg shadow-neutral hover:shadow-primary hover:scale-105 duration-300">
    <div class="card-body gap-4">
      <p>{message}</p>
      <p class="stat-desc">{name} • {timestamp}</p>
    </div>
</div>