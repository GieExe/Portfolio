<script>
  let { text } = $props();
</script>

<section class="mb-6">
  <h2 class="section-title">Objective</h2>
  <p class="body-text">{text}</p>
</section>

<style>
  .section-title {
    border-bottom: 2px solid #e0e0e0;
    padding-bottom: 0.9rem;
    margin-bottom: 2.5rem;
    color: #2c3e50;
    font-size: 2.2rem;
    font-weight: 700;
    letter-spacing: 0.03em;
    text-transform: uppercase;
  }

  .body-text {
    font-size: 1.05rem;
    line-height: 1.8;
    color: #4a5568;
  }

  @media (max-width: 768px) {
    .section-title {
      font-size: 1.75rem;
      margin-bottom: 1.5rem;
    }
  }

  @media print {
    .section-title {
      font-size: 1.3rem;
      margin-bottom: 1.2rem;
      padding-bottom: 0.4rem;
    }
    .body-text {
      font-size: 0.8rem;
      line-height: 1.3;
    }
  }
</style>
