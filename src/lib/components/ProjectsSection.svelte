<script>
  let { projects } = $props();
</script>

<section>
  <h2 class="section-title">Projects</h2>
  {#each projects as project}
    <div class="project-entry">
      <h3 class="project-title">{project.title}</h3>
      <p class="project-description">{project.description}</p>
    </div>
  {/each}
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

  .project-entry {
    margin-bottom: 1.5rem;
  }

  .project-title {
    font-size: 1.5rem;
    font-weight: 600;
    color: #2c3e50;
    margin-bottom: 0.7rem;
  }

  .project-description {
    font-size: 1.05rem;
    line-height: 1.8;
    color: #4a5568;
  }

  @media (max-width: 768px) {
    .section-title {
      font-size: 1.75rem;
      margin-bottom: 1.5rem;
    }

    .project-title {
      font-size: 1.25rem;
    }
  }

  @media print {
    .section-title {
      font-size: 1.3rem;
      margin-bottom: 1.2rem;
      padding-bottom: 0.4rem;
    }

    .project-title {
      font-size: 1.1rem;
      margin-bottom: 0.3rem;
    }

    .project-description {
      font-size: 0.8rem;
      line-height: 1.3;
    }
  }
</style>
