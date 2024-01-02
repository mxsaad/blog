<script lang="ts">
  import FaEnvelope from 'svelte-icons/fa/FaEnvelope.svelte'
  import FaGithub from 'svelte-icons/fa/FaGithub.svelte'
  import FaLinkedinIn from 'svelte-icons/fa/FaLinkedinIn.svelte'
</script>

<footer class="footer footer-center p-10 bg-neutral text-neutral-content">
  <nav class="grid grid-flow-col gap-4">
    <a href="/" class="link link-hover">Home</a>
    <a href="/blog" class="link link-hover">Blog</a>
    <a href="/guestbook" class="link link-hover">Guestbook</a>
  </nav> 
  <nav>
    <div class="flex items-center justify-center gap-4">
        <a class="w-6" href="mailto:hi@mxsaad.com" target="_blank" rel="noopener noreferrer">
            <FaEnvelope/>
        </a>
        <a class="w-6" href="https://github.com/mxsaad" target="_blank" rel="noopener noreferrer">
            <FaGithub/>
        </a>
        <a class="w-6" href="https://linkedin.com/in/mxsaad" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn/>
        </a>
    </div>
  </nav> 
  <aside>
    <p>Copyright © 2023 - Muhammad Saad</p>
  </aside>
</footer>