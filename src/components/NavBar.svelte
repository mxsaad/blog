<script>
  import FaArrowRight from 'svelte-icons/fa/FaArrowRight.svelte'
</script>

<nav>
    <div class="navbar bg-transparent fixed top-0 z-30 b-rounded-box">
        <div class="navbar-start">
          <div class="dropdown">
            <button class="btn btn-ghost btn-circle lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </button>
            <ul class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-transparent rounded-box w-fit">
              <li><a>About</a></li>
              <li><a>Projects</a></li>
              <li><a>Blog</a></li>
              <li><a>Snippets</a></li>
              <li><a>Guestbook</a></li>
            </ul>
          </div>
          <a class="btn btn-circle btn-ghost hover:bg-transparent text-xl">~/</a>
        </div>
        <div class="navbar-center hidden lg:flex">
          <ul class="menu menu-horizontal px-1">
            <li><a>About</a></li>
            <li><a>Projects</a></li>
            <li><a>Blog</a></li>
            <li><a>Snippets</a></li>
            <li><a>Guestbook</a></li>
          </ul>
        </div>
        <div class="navbar-end">
          <a class="btn btn-ghost" href="https://dub.sh/eyj5LqY" target="_blank" rel="noopener noreferrer">
            Resume <span class="w-4 h-4"><FaArrowRight /></span>
          </a>
        </div>
    </div>
</nav>