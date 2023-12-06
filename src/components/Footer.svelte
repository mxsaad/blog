<script lang="ts">
  import FaPaperPlane from 'svelte-icons/fa/FaPaperPlane.svelte'
  import FaGithub from 'svelte-icons/fa/FaGithub.svelte'
  import FaLinkedin from 'svelte-icons/fa/FaLinkedin.svelte'
</script>

<footer class="footer footer-center p-10 bg-neutral text-neutral-content">
  <nav class="grid grid-flow-col gap-4">
    <a href="/" class="link link-hover">Home</a>
    <a href="/" class="link link-hover">Blog</a>
    <a href="/" class="link link-hover">Snippets</a>
    <a href="/" class="link link-hover">Guestbook</a>
  </nav> 
  <nav>
    <div class="grid grid-flow-col gap-4">
        <a class="w-6" href="mailto:hi@mxsaad.com" target="_blank" rel="noopener noreferrer">
            <FaPaperPlane/>
        </a>
        <a class="w-6" href="https://github.com/mxsaad" target="_blank" rel="noopener noreferrer">
            <FaGithub/>
        </a>
        <a class="w-6" href="https://linkedin.com/in/mxsaad" target="_blank" rel="noopener noreferrer">
            <FaLinkedin/>
        </a>
    </div>
  </nav> 
  <aside>
    <p>Copyright © 2023 - Muhammad Saad</p>
  </aside>
</footer>