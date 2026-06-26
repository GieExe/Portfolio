<script>
  let { label, number } = $props();
</script>

<div class="section-heading">
  <span class="section-number">{number}</span>
  <h2>{label}</h2>
  <div class="heading-line"></div>
</div>

<style>
  .section-heading {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 2rem;
  }

  .section-number {
    font-family: var(--font-mono);
    font-size: 0.8rem;
    font-weight: 500;
    color: var(--accent);
    background: var(--accent-soft);
    padding: 0.3rem 0.6rem;
    border-radius: 4px;
    letter-spacing: 0.05em;
    flex-shrink: 0;
  }

  h2 {
    font-family: var(--font-heading);
    font-size: 1.6rem;
    font-weight: 700;
    color: var(--text-primary);
    text-transform: uppercase;
    letter-spacing: 0.08em;
    white-space: nowrap;
  }

  .heading-line {
    flex: 1;
    height: 2px;
    background: linear-gradient(90deg, var(--border) 0%, transparent 100%);
  }

  @media (max-width: 768px) {
    h2 {
      font-size: 1.3rem;
    }
  }

  @media print {
    .section-number {
      font-size: 0.65rem;
      padding: 0.2rem 0.4rem;
    }
    h2 {
      font-size: 1.1rem;
    }
  }
</style>
