<script>
  import { portfolio } from '$lib/data/portfolio';
  import HeroHeader from '$lib/components/HeroHeader.svelte';
  import SectionHeading from '$lib/components/SectionHeading.svelte';
  import ProjectShowcase from '$lib/components/ProjectShowcase.svelte';
  import AboutSection from '$lib/components/AboutSection.svelte';
  import SkillsSection from '$lib/components/SkillsSection.svelte';
  import ContactSection from '$lib/components/ContactSection.svelte';
</script>

<svelte:head>
  <title>{portfolio.name} — Portfolio</title>
  <meta name="description" content="{portfolio.tagline}" />
</svelte:head>

<main class="page">
  <div class="container">
    <HeroHeader
      profilePicture={portfolio.profilePicture}
      name={portfolio.name}
      title={portfolio.title}
      contact={portfolio.contact}
    />
    <section class="section-block hero-section">
      <p class="tagline">{portfolio.tagline}</p>
    </section>
    <section class="section-block">
      <SectionHeading label="Projects" number="01" />
      <ProjectShowcase projects={portfolio.projects} />
    </section>
    <div class="content-grid">
      <section class="col-wide">
        <SectionHeading label="About" number="02" />
        <AboutSection text={portfolio.about} />
      </section>
      <section class="col-narrow">
        <SectionHeading label="Skills" number="03" />
        <SkillsSection skills={portfolio.skills} />
      </section>
    </div>
    <section class="section-block">
      <SectionHeading label="Contact" number="04" />
      <ContactSection contact={portfolio.contact} certifications={portfolio.certifications} />
    </section>
    <footer class="page-footer">
      <span class="footer-note">Designed and built by {portfolio.name}</span>
    </footer>
  </div>
</main>

<style>
  .page { min-height: 100vh; padding: 3rem 1.5rem; }
  .container { max-width: 960px; margin: 0 auto; background: var(--bg-card); border-radius: 16px; box-shadow: 0 1px 3px rgba(0,0,0,0.04), 0 8px 30px rgba(0,0,0,0.06); padding: 3rem 3.5rem; }
  .hero-section { text-align: center; margin-bottom: 3rem; }
  .tagline { font-family: var(--font-body); font-size: 1.2rem; color: var(--text-muted); font-style: italic; line-height: 1.6; }
  .content-grid { display: grid; grid-template-columns: 1.4fr 1fr; gap: 2.5rem; margin-top: 2.5rem; }
  .section-block { margin-bottom: 2.5rem; }
  .section-block:last-of-type { margin-bottom: 0; }
  .page-footer { margin-top: 3rem; padding-top: 1.5rem; border-top: 1px solid var(--border-light); text-align: center; }
  .footer-note { font-family: var(--font-mono); font-size: 0.7rem; color: var(--text-light); letter-spacing: 0.05em; }
  @media (max-width: 768px) { .page { padding: 1rem 0.75rem; } .container { padding: 2rem 1.5rem; border-radius: 12px; } .content-grid { grid-template-columns: 1fr; gap: 2rem; } .tagline { font-size: 1rem; } }
  @media print { .page { padding: 0; } .container { max-width: 100%; box-shadow: none; border-radius: 0; padding: 0; background: transparent; } .content-grid { gap: 1.2rem; margin-top: 1.2rem; } .section-block { margin-bottom: 1.2rem; } }
</style>
