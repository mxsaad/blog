<script>
  import FaPaperPlane from 'svelte-icons/fa/FaPaperPlane.svelte'
  import FaGithub from 'svelte-icons/fa/FaGithub.svelte'
  import FaLinkedin from 'svelte-icons/fa/FaLinkedin.svelte'
</script>

<footer class="footer footer-center p-10 bg-neutral text-neutral-content rounded-t-box">
  <nav class="grid grid-flow-col gap-4">
    <a class="link link-hover">Home</a>
    <a class="link link-hover">Blog</a>
    <a class="link link-hover">Snippets</a>
    <a class="link link-hover">Guestbook</a>
  </nav> 
  <nav>
    <div class="grid grid-flow-col gap-4">
        <a class="w-6 md:w-7 lg:w-8" href="mailto:hi@mailias.maskmy.id" target="_blank" rel="noopener noreferrer">
            <FaPaperPlane/>
        </a>
        <a class="w-6 md:w-7 lg:w-8" href="https://github.com/mxsaad" target="_blank" rel="noopener noreferrer">
            <FaGithub/>
        </a>
        <a class="w-6 md:w-7 lg:w-8" href="https://linkedin.com/in/mxsaad" target="_blank" rel="noopener noreferrer">
            <FaLinkedin/>
        </a>
    </div>
  </nav> 
  <aside>
    <p>Copyright © 2023 - Muhammad Saad</p>
  </aside>
</footer>