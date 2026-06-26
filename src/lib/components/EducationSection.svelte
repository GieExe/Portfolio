<script>
  let { education } = $props();
</script>

<section class="mb-6">
  <h2 class="section-title">Education</h2>
  <ul class="edu-list">
    {#each education as item}
      <li><strong>{item.level}:</strong> {item.school}</li>
    {/each}
  </ul>
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

  .edu-list {
    list-style: disc;
    padding-left: 2rem;
  }

  .edu-list li {
    margin-bottom: 0.7rem;
    color: #4a5568;
    line-height: 1.7;
    font-size: 1rem;
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
    .edu-list li {
      font-size: 0.8rem;
      line-height: 1.3;
    }
  }
</style>
