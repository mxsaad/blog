<script lang="ts">
  import FaExternalLinkAlt from 'svelte-icons/fa/FaExternalLinkAlt.svelte'
</script>

<nav>
    <div class="navbar bg-transparent absolute top-0 left-0 z-10">
        <div class="navbar-start">
          <div class="dropdown">
            <label for="#mobile-nav" tabindex="-1" class="btn btn-ghost btn-circle lg:hidden hover:text-primary hover:scale-105 duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul id="mobile-nav" tabindex="-1" class="menu menu-sm dropdown-content m-3 z-[1] p-2 shadow bg-base-100 rounded-box w-fit">
              <li><a href="/" class="hover:text-primary hover:scale-105 duration-300">Home</a></li>
              <li><a href="/blog" class="hover:text-primary hover:scale-105 duration-300">Blog</a></li>
              <li><a href="/snippets" class="hover:text-primary hover:scale-105 duration-300">Snippets</a></li>
              <li><a href="/guestbook" class="hover:text-primary hover:scale-105 duration-300">Guestbook</a></li>
            </ul>
          </div>
          <a href="/" class="font-['The_Nautigal'] btn btn-circle btn-ghost hover:bg-transparent hover:text-primary hover:scale-105 duration-300 text-2xl lg:ml-2">MS</a>
        </div>
        <div class="navbar-center hidden lg:flex">
          <ul class="menu menu-horizontal px-1">
            <li><a href="/" class="hover:text-primary hover:scale-105 duration-300">Home</a></li>
            <li><a href="/blog" class="hover:text-primary hover:scale-105 duration-300">Blog</a></li>
            <li><a href="/snippets" class="hover:text-primary hover:scale-105 duration-300">Snippets</a></li>
            <li><a href="/guestbook" class="hover:text-primary hover:scale-105 duration-300">Guestbook</a></li>
          </ul>
        </div>
        <div class="navbar-end">
          <a class="btn btn-ghost hover:text-primary hover:scale-105 duration-300" href="https://dub.sh/eyj5LqY" target="_blank" rel="noopener noreferrer">
            Resume <span class="w-4 h-4"><FaExternalLinkAlt /></span>
          </a>
        </div>
    </div>
</nav>