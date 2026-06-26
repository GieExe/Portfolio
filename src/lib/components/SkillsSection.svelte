<script>
  let { skills } = $props();

  const categories = $derived([
    { label: 'Languages & Frameworks', items: skills.technical, color: 'accent' },
    { label: 'Tools', items: skills.tools, color: 'sage' },
    { label: 'Soft Skills', items: skills.soft, color: 'accent' },
    { label: 'Additional', items: skills.additional, color: 'sage' }
  ]);
</script>

<div class="skills-container">
  {#each categories as cat}
    <div class="skill-group">
      <span class="skill-label">{cat.label}</span>
      <div class="skill-tags">
        {#each cat.items as skill}
          <span class="tag tag--{cat.color}">{skill}</span>
        {/each}
      </div>
    </div>
  {/each}
</div>

<style>
  .skills-container {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
  }

  .skill-group {
    display: flex;
    align-items: flex-start;
    gap: 1rem;
  }

  .skill-label {
    font-family: var(--font-mono);
    font-size: 0.7rem;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: var(--text-muted);
    min-width: 140px;
    padding-top: 0.45rem;
    flex-shrink: 0;
  }

  .skill-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.4rem;
  }

  .tag {
    font-family: var(--font-body);
    font-size: 0.82rem;
    font-weight: 500;
    padding: 0.35rem 0.85rem;
    border-radius: 100px;
    transition: all 0.2s var(--ease-out);
    cursor: default;
  }

  .tag--accent {
    background: var(--accent-soft);
    color: var(--accent);
    border: 1px solid transparent;
  }

  .tag--accent:hover {
    background: var(--accent);
    color: #fff;
  }

  .tag--sage {
    background: var(--sage-soft);
    color: var(--sage);
    border: 1px solid transparent;
  }

  .tag--sage:hover {
    background: var(--sage);
    color: #fff;
  }

  @media (max-width: 768px) {
    .skill-group {
      flex-direction: column;
      gap: 0.4rem;
    }

    .skill-label {
      min-width: unset;
      padding-top: 0;
    }
  }

  @media print {
    .skill-label {
      font-size: 0.6rem;
      min-width: 100px;
    }
    .tag {
      font-size: 0.7rem;
      padding: 0.2rem 0.5rem;
    }
  }
</style>
