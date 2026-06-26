<script>
  let { contact, certifications } = $props();
  const links = [
    { label: 'Email', value: contact.email, href: 'mailto:' + contact.email, icon: '✉' },
    { label: 'LinkedIn', value: 'linkedin.com/in/giebert-delotavo', href: contact.linkedin, icon: '●' },
    { label: 'GitHub', value: 'github.com/GieExe', href: contact.github, icon: '◆' },
    { label: 'Portfolio', value: 'gieexe.vercel.app', href: contact.portfolio, icon: '▲' }
  ];
</script>
<div class="contact-grid">
  {#each links as link}
    <a href={link.href} target="_blank" rel="noopener noreferrer" class="contact-card">
      <span class="contact-icon">{link.icon}</span>
      <div class="contact-info">
        <span class="contact-label">{link.label}</span>
        <span class="contact-value">{link.value}</span>
      </div>
      <span class="contact-arrow">↗</span>
    </a>
  {/each}
</div>
{#if certifications.length > 0}
  <div class="certs-section">
    <h4 class="certs-title">Certifications</h4>
    <div class="certs-list">
      {#each certifications as cert}
        <a href={cert.url} target="_blank" rel="noopener noreferrer" class="cert-link">
          {cert.label} ↗
        </a>
      {/each}
    </div>
  </div>
{/if}
<style>
  .contact-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem; margin-bottom: 2rem; }
  .contact-card { display: flex; align-items: center; gap: 0.8rem; padding: 1rem 1.2rem; background: var(--bg-card); border: 1px solid var(--border-light); border-radius: 10px; transition: all 0.25s var(--ease-out); text-decoration: none; color: var(--text-body); }
  .contact-card:hover { border-color: var(--accent-soft); background: var(--accent-soft); color: var(--accent); transform: translateY(-2px); box-shadow: 0 4px 16px rgba(196,85,61,0.08); }
  .contact-icon { font-size: 1.2rem; opacity: 0.5; flex-shrink: 0; }
  .contact-info { flex: 1; min-width: 0; }
  .contact-label { display: block; font-family: var(--font-mono); font-size: 0.65rem; text-transform: uppercase; letter-spacing: 0.1em; color: var(--text-muted); margin-bottom: 0.15rem; }
  .contact-value { display: block; font-size: 0.85rem; font-weight: 500; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
  .contact-arrow { font-size: 0.9rem; opacity: 0; transform: translate(-4px, 2px); transition: all 0.25s var(--ease-out); }
  .contact-card:hover .contact-arrow { opacity: 1; transform: translate(0, 0); }
  .certs-section { border-top: 1px solid var(--border-light); padding-top: 1.5rem; }
  .certs-title { font-family: var(--font-mono); font-size: 0.7rem; text-transform: uppercase; letter-spacing: 0.1em; color: var(--text-muted); margin-bottom: 0.8rem; }
  .certs-list { display: flex; flex-wrap: wrap; gap: 0.5rem; }
  .cert-link { font-size: 0.82rem; padding: 0.35rem 0.85rem; background: var(--bg-soft); color: var(--text-body); border-radius: 100px; border: 1px solid var(--border); transition: all 0.2s var(--ease-out); text-decoration: none; }
  .cert-link:hover { background: var(--sage-soft); color: var(--sage); border-color: var(--sage-soft); }
  @media (max-width: 768px) { .contact-grid { grid-template-columns: 1fr; } }
  @media print { .contact-grid { grid-template-columns: 1fr 1fr; gap: 0.3rem; margin-bottom: 1rem; } .contact-card { padding: 0.4rem 0.6rem; border: none; border-bottom: 1px solid var(--border); border-radius: 0; } .contact-icon, .contact-arrow { display: none; } .contact-label { font-size: 0.55rem; } .contact-value { font-size: 0.72rem; } }
</style>
