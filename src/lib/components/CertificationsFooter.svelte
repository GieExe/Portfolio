<script>
  let { certifications } = $props();
</script>

<footer class="footer">
  <div class="footer-grid">
    {#each certifications as cert, i}
      <a href={cert.url} target="_blank" rel="noopener noreferrer" class="cert-link">
        <span class="cert-num">{String(i + 1).padStart(2, '0')}</span>
        <span class="cert-label">{cert.label}</span>
        <span class="cert-arrow">↗</span>
      </a>
    {/each}
  </div>
  <div class="footer-bar">
    <span class="footer-note">Built with SvelteKit · {new Date().getFullYear()}</span>
  </div>
</footer>

<style>
  .footer {
    margin-top: 3rem;
    border-top: 1px solid var(--border);
    padding-top: 2rem;
  }

  .footer-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.5rem;
    margin-bottom: 2rem;
  }

  .cert-link {
    display: flex;
    align-items: center;
    gap: 0.6rem;
    padding: 0.7rem 1rem;
    border-radius: 8px;
    background: var(--bg-card);
    border: 1px solid var(--border-light);
    transition: all 0.25s var(--ease-out);
    text-decoration: none;
    color: var(--text-body);
  }

  .cert-link:hover {
    border-color: var(--accent-soft);
    background: var(--accent-soft);
    color: var(--accent);
  }

  .cert-num {
    font-family: var(--font-mono);
    font-size: 0.65rem;
    color: var(--text-light);
    flex-shrink: 0;
  }

  .cert-label {
    flex: 1;
    font-size: 0.85rem;
    font-weight: 500;
  }

  .cert-arrow {
    font-size: 0.85rem;
    opacity: 0;
    transform: translate(-4px, 2px);
    transition: all 0.25s var(--ease-out);
  }

  .cert-link:hover .cert-arrow {
    opacity: 1;
    transform: translate(0, 0);
  }

  .footer-bar {
    border-top: 1px solid var(--border-light);
    padding-top: 1rem;
    text-align: center;
  }

  .footer-note {
    font-family: var(--font-mono);
    font-size: 0.7rem;
    color: var(--text-light);
    letter-spacing: 0.05em;
  }

  @media (max-width: 768px) {
    .footer-grid {
      grid-template-columns: 1fr;
    }
  }

  @media print {
    .footer {
      margin-top: 1.5rem;
      padding-top: 1rem;
    }
    .footer-grid {
      grid-template-columns: 1fr 1fr;
      gap: 0.2rem;
      margin-bottom: 1rem;
    }
    .cert-link {
      padding: 0.3rem 0.5rem;
      border: none;
      border-bottom: 1px solid var(--border);
      border-radius: 0;
    }
    .cert-num {
      font-size: 0.55rem;
    }
    .cert-label {
      font-size: 0.7rem;
    }
    .cert-arrow {
      display: none;
    }
    .footer-bar {
      display: none;
    }
  }
</style>
