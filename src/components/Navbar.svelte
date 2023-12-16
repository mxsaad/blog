<script>
	import FaExternalLinkAlt from 'svelte-icons/fa/FaExternalLinkAlt.svelte';
</script>

<div class="drawer">
	<input id="my-drawer-3" type="checkbox" class="drawer-toggle" /> 
	<div class="drawer-content flex flex-col">
	  <!-- Navbar -->
	  <div class="w-full navbar bg-transparent absolute top-0 left-0 z-5">
		<div class="ml-2 flex-none lg:hidden">
		  <label for="my-drawer-3" aria-label="open sidebar" class="btn btn-sm btn-ghost hover:text-primary duration-300">
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
		  </label>
		</div> 
		<div class="navbar-start pl-2">
			<a href="/" class="font-['The_Nautigal'] lg:ml-2 btn btn-circle btn-ghost hover:bg-transparent hover:text-primary duration-300 text-2xl">MS</a>
		</div>
		<div class="navbar-center hidden lg:flex">
		  <ul class="menu menu-horizontal items-center justify-center">
			<!-- Navbar menu content here -->
			<li><a href="/" class="btn btn-sm btn-ghost hover:text-primary duration-300">Home</a></li>
            <li><a href="/blog" class="btn btn-sm btn-ghost hover:text-primary duration-300">Blog</a></li>
            <li><a href="/guestbook" class="btn btn-sm btn-ghost hover:text-primary duration-300">Guestbook</a></li>
		  </ul>
		</div>
		<div class="navbar-end">
			<a class="btn btn-ghost btn-sm mr-2 hover:text-primary duration-300" href="https://dub.sh/eyj5LqY" target="_blank" rel="noopener noreferrer">
			  Resume <span class="w-4 h-4"><FaExternalLinkAlt /></span>
			</a>
		  </div>
	  </div>
	  <!-- Page content here -->
	  <slot />
	</div> 
	<div class="drawer-side">
	  <label for="my-drawer-3" aria-label="close sidebar" class="drawer-overlay"></label> 
	  <ul class="menu p-4 w-80 min-h-full bg-base-100">
		<!-- Sidebar content here -->
		<li><a href="/" class="hover:text-primary duration-300">Home</a></li>
		<li><a href="/blog" class="hover:text-primary duration-300">Blog</a></li>
		<li><a href="/guestbook" class="hover:text-primary duration-300">Guestbook</a></li>
	  </ul>
	</div>
</div>