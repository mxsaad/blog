<script lang="ts">
    export let name: string;
    export let message: string;
    export let timestamp: string;
</script>

<div class="card w-full h-min bg-base-100 shadow-lg shadow-neutral hover:shadow-primary duration-300">
    <slot />
    <div class="card-body gap-4">
      <p>{message}</p>
      <p class="stat-desc">{name} • {timestamp}</p>
    </div>
</div>