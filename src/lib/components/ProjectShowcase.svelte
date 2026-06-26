<script>
  let { projects } = $props();
</script>
<div class="showcase-grid">
  {#each projects as project, i}
    <article class="showcase-card" class:featured={i === 0}>
      <div class="card-image">
        <img src={project.image} alt={project.title} />
        <span class="card-type">{project.type}</span>
      </div>
      <div class="card-body">
        <h3 class="card-title">{project.title}</h3>
        <p class="card-desc">{project.description}</p>
        <div class="card-tech">
          {#each project.tech as t}
            <span class="tech-tag">{t}</span>
          {/each}
        </div>
      </div>
    </article>
  {/each}
</div>
<style>
  .showcase-grid { display: grid; grid-template-columns: 1fr; gap: 2rem; }
  .showcase-card { display: flex; background: var(--bg-card); border: 1px solid var(--border-light); border-radius: 14px; overflow: hidden; transition: all 0.35s var(--ease-out); }
  .showcase-card:hover { border-color: var(--accent-soft); box-shadow: 0 8px 32px rgba(196,85,61,0.1); transform: translateY(-3px); }
  .card-image { position: relative; width: 280px; flex-shrink: 0; overflow: hidden; }
  .card-image img { width: 100%; height: 100%; object-fit: cover; display: block; transition: transform 0.4s var(--ease-out); }
  .showcase-card:hover .card-image img { transform: scale(1.04); }
  .card-type { position: absolute; top: 1rem; left: 1rem; font-family: var(--font-mono); font-size: 0.7rem; text-transform: uppercase; letter-spacing: 0.1em; padding: 0.3rem 0.7rem; background: rgba(28,28,30,0.75); color: #fff; border-radius: 100px; backdrop-filter: blur(6px); }
  .card-body { padding: 2rem 2.5rem; display: flex; flex-direction: column; justify-content: center; flex: 1; }
  .card-title { font-family: var(--font-heading); font-size: 1.4rem; font-weight: 700; color: var(--text-primary); margin-bottom: 0.75rem; line-height: 1.25; }
  .card-desc { font-size: 0.95rem; color: var(--text-muted); line-height: 1.7; margin-bottom: 1.25rem; }
  .card-tech { display: flex; flex-wrap: wrap; gap: 0.4rem; }
  .tech-tag { font-family: var(--font-mono); font-size: 0.72rem; padding: 0.3rem 0.7rem; background: var(--bg-soft); color: var(--text-body); border-radius: 100px; border: 1px solid var(--border); }
  .showcase-card:hover .tech-tag { border-color: var(--accent-soft); color: var(--accent); }
  @media (max-width: 768px) { .showcase-card { flex-direction: column; } .card-image { width: 100%; height: 200px; } .card-body { padding: 1.5rem; } }
  @media print { .showcase-card { border: none; border-bottom: 1px solid var(--border); border-radius: 0; } .card-image { width: 180px; } .card-image img { filter: grayscale(1); } .card-body { padding: 1rem; } .card-title { font-size: 1rem; } .card-desc { font-size: 0.75rem; } }
</style>
