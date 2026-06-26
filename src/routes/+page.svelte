<script>
  import { resume } from '$lib/data/resume';
  import HeroHeader from '$lib/components/HeroHeader.svelte';
  import SectionHeading from '$lib/components/SectionHeading.svelte';
  import ObjectiveSection from '$lib/components/ObjectiveSection.svelte';
  import EducationSection from '$lib/components/EducationSection.svelte';
  import SkillsSection from '$lib/components/SkillsSection.svelte';
  import ProjectsSection from '$lib/components/ProjectsSection.svelte';
  import CertificationsFooter from '$lib/components/CertificationsFooter.svelte';
</script>

<svelte:head>
  <title>{resume.name} — {resume.title}</title>
  <meta name="description" content="Resume of {resume.name}, {resume.title}" />
</svelte:head>

<main class="page">
  <div class="container">

    <HeroHeader
      profilePicture={resume.profilePicture}
      name={resume.name}
      title={resume.title}
      contact={resume.contact}
    />

    <div class="content-grid">
      <section class="col-wide">
        <SectionHeading label="Objective" number="01" />
        <ObjectiveSection text={resume.objective} />
      </section>

      <section class="col-narrow">
        <SectionHeading label="Education" number="02" />
        <EducationSection education={resume.education} />
      </section>
    </div>

    <section class="section-block">
      <SectionHeading label="Skills" number="03" />
      <SkillsSection skills={resume.skills} />
    </section>

    <section class="section-block">
      <SectionHeading label="Projects" number="04" />
      <ProjectsSection projects={resume.projects} />
    </section>

    <CertificationsFooter certifications={resume.certifications} />

  </div>
</main>

<style>
  .page {
    min-height: 100vh;
    padding: 3rem 1.5rem;
  }

  .container {
    max-width: 880px;
    margin: 0 auto;
    background: var(--bg-card);
    border-radius: 16px;
    box-shadow:
      0 1px 3px rgba(0, 0, 0, 0.04),
      0 8px 30px rgba(0, 0, 0, 0.06);
    padding: 3rem 3.5rem;
  }

  .content-grid {
    display: grid;
    grid-template-columns: 1.4fr 1fr;
    gap: 2.5rem;
    margin-bottom: 2.5rem;
  }

  .section-block {
    margin-bottom: 2.5rem;
  }

  .section-block:last-of-type {
    margin-bottom: 0;
  }

  @media (max-width: 768px) {
    .page {
      padding: 1rem 0.75rem;
    }

    .container {
      padding: 2rem 1.5rem;
      border-radius: 12px;
    }

    .content-grid {
      grid-template-columns: 1fr;
      gap: 2rem;
    }
  }

  @media print {
    .page {
      padding: 0;
    }

    .container {
      max-width: 100%;
      box-shadow: none;
      border-radius: 0;
      padding: 0;
      background: transparent;
    }

    .content-grid {
      gap: 1.2rem;
      margin-bottom: 1.2rem;
    }

    .section-block {
      margin-bottom: 1.2rem;
    }
  }
</style>
