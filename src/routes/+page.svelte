<script>
  import { resume } from '$lib/data/resume';
  import ProfileSidebar from '$lib/components/ProfileSidebar.svelte';
  import ObjectiveSection from '$lib/components/ObjectiveSection.svelte';
  import EducationSection from '$lib/components/EducationSection.svelte';
  import SkillsSection from '$lib/components/SkillsSection.svelte';
  import ProjectsSection from '$lib/components/ProjectsSection.svelte';
</script>

<svelte:head>
  <title>{resume.name} - Resume</title>
  <meta name="description" content="Resume of {resume.name}, {resume.title}" />
</svelte:head>

<div class="resume-container">
  <ProfileSidebar
    profilePicture={resume.profilePicture}
    name={resume.name}
    title={resume.title}
    contact={resume.contact}
    certifications={resume.certifications}
  />

  <div class="right-column">
    <ObjectiveSection text={resume.objective} />
    <EducationSection education={resume.education} />
    <SkillsSection skills={resume.skills} />
    <ProjectsSection projects={resume.projects} />
  </div>
</div>

<style>
  .resume-container {
    max-width: 950px;
    width: 100%;
    background-color: #ffffff;
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
    border-radius: 15px;
    overflow: hidden;
    display: flex;
    min-height: 800px;
  }

  .right-column {
    padding: 3.5rem 4rem;
    width: 68%;
  }

  @media (max-width: 768px) {
    .resume-container {
      flex-direction: column;
      min-height: unset;
      border-radius: 12px;
    }

    .right-column {
      width: 100%;
      padding: 2.5rem 1.5rem;
    }
  }

  @media print {
    .resume-container {
      max-width: 100%;
      width: 210mm;
      height: 297mm;
      box-shadow: none;
      border-radius: 0;
      margin: 0 auto;
      display: flex;
      flex-direction: row;
      overflow: visible;
    }

    .right-column {
      padding: 1.2cm;
      height: 100%;
      width: 68%;
    }
  }
</style>
