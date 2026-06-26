<script>
  let { text } = $props();
</script>

<div class="objective">
  <p>{text}</p>
</div>

<style>
  .objective {
    padding-left: 1.5rem;
    border-left: 3px solid var(--accent-soft);
  }

  .objective p {
    font-family: var(--font-body);
    font-size: 1.05rem;
    line-height: 1.85;
    color: var(--text-body);
    font-style: italic;
  }

  @media print {
    .objective {
      padding-left: 1rem;
    }
    .objective p {
      font-size: 0.8rem;
      line-height: 1.5;
    }
  }
</style>
