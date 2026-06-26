<script>
  let { text } = $props();
</script>
<div class="about-content">
  <p>{text}</p>
</div>
<style>
  .about-content { padding-left: 1.5rem; border-left: 3px solid var(--accent-soft); }
  .about-content p { font-family: var(--font-body); font-size: 1.05rem; line-height: 1.85; color: var(--text-body); font-style: italic; }
  @media print { .about-content { padding-left: 1rem; } .about-content p { font-size: 0.8rem; line-height: 1.5; } }
</style>
