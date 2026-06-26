<script>
  let { education } = $props();
</script>

<div class="edu-grid">
  {#each education as item, i}
    <div class="edu-card">
      <span class="edu-level">{item.level}</span>
      <span class="edu-school">{item.school}</span>
    </div>
  {/each}
</div>

<style>
  .edu-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.75rem;
  }

  .edu-card {
    background: var(--bg-card);
    border: 1px solid var(--border-light);
    border-radius: 8px;
    padding: 1rem 1.2rem;
    transition: border-color 0.25s var(--ease-out), box-shadow 0.25s var(--ease-out);
  }

  .edu-card:hover {
    border-color: var(--accent-soft);
    box-shadow: 0 2px 12px rgba(196, 85, 61, 0.06);
  }

  .edu-level {
    display: block;
    font-family: var(--font-mono);
    font-size: 0.7rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: var(--text-muted);
    margin-bottom: 0.3rem;
  }

  .edu-school {
    display: block;
    font-family: var(--font-heading);
    font-size: 0.95rem;
    font-weight: 600;
    color: var(--text-primary);
    line-height: 1.35;
  }

  @media (max-width: 768px) {
    .edu-grid {
      grid-template-columns: 1fr;
    }
  }

  @media print {
    .edu-grid {
      gap: 0.4rem;
    }
    .edu-card {
      padding: 0.5rem 0.8rem;
      border: none;
      border-bottom: 1px solid var(--border);
      border-radius: 0;
    }
    .edu-level {
      font-size: 0.6rem;
    }
    .edu-school {
      font-size: 0.8rem;
    }
  }
</style>
