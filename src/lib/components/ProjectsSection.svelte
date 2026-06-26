<script>
  let { projects } = $props();

  const icons = ['🐾', '🧹', '🌱'];
</script>

<div class="projects-grid">
  {#each projects as project, i}
    <article class="project-card">
      <div class="card-stripe"></div>
      <div class="card-content">
        <span class="card-icon">{icons[i] || '▸'}</span>
        <h3 class="card-title">{project.title}</h3>
        <p class="card-desc">{project.description}</p>
      </div>
    </article>
  {/each}
</div>

<style>
  .projects-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .project-card {
    display: flex;
    background: var(--bg-card);
    border: 1px solid var(--border-light);
    border-radius: 10px;
    overflow: hidden;
    transition: all 0.3s var(--ease-out);
  }

  .project-card:hover {
    border-color: var(--accent-soft);
    box-shadow: 0 4px 20px rgba(196, 85, 61, 0.08);
    transform: translateY(-2px);
  }

  .card-stripe {
    width: 5px;
    flex-shrink: 0;
    background: linear-gradient(180deg, var(--accent) 0%, var(--sage) 100%);
    transition: width 0.3s var(--ease-out);
  }

  .project-card:hover .card-stripe {
    width: 8px;
  }

  .card-content {
    padding: 1.25rem 1.5rem;
    flex: 1;
  }

  .card-icon {
    font-size: 1.5rem;
    display: block;
    margin-bottom: 0.5rem;
  }

  .card-title {
    font-family: var(--font-heading);
    font-size: 1.1rem;
    font-weight: 600;
    color: var(--text-primary);
    margin-bottom: 0.5rem;
    line-height: 1.3;
  }

  .card-desc {
    font-size: 0.92rem;
    color: var(--text-muted);
    line-height: 1.65;
  }

  @media print {
    .project-card {
      border: none;
      border-bottom: 1px solid var(--border);
      border-radius: 0;
      page-break-inside: avoid;
    }

    .card-stripe {
      width: 3px;
    }

    .card-content {
      padding: 0.6rem 0.8rem;
    }

    .card-icon {
      display: none;
    }

    .card-title {
      font-size: 0.85rem;
      margin-bottom: 0.2rem;
    }

    .card-desc {
      font-size: 0.72rem;
      line-height: 1.4;
    }
  }
</style>
