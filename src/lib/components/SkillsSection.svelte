<script>
  let { skills } = $props();
</script>

<section class="mb-6">
  <h2 class="section-title">Skills</h2>
  <div class="skills-grid">
    <div>
      <span class="skill-category">Technical Skills:</span>
      <ul class="skill-list">
        {#each skills.technical as skill}
          <li>{skill}</li>
        {/each}
      </ul>
    </div>
    <div>
      <span class="skill-category">Soft Skills:</span>
      <ul class="skill-list">
        {#each skills.soft as skill}
          <li>{skill}</li>
        {/each}
      </ul>
    </div>
    <div>
      <span class="skill-category">Tools:</span>
      <ul class="skill-list">
        {#each skills.tools as skill}
          <li>{skill}</li>
        {/each}
      </ul>
    </div>
    <div>
      <span class="skill-category">Additional Skills:</span>
      <ul class="skill-list">
        {#each skills.additional as skill}
          <li>{skill}</li>
        {/each}
      </ul>
    </div>
  </div>
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

  .skills-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 0.75rem 1.5rem;
  }

  .skill-category {
    font-weight: 700;
    color: #2c3e50;
    margin-bottom: 0.8rem;
    display: block;
    font-size: 1.2rem;
  }

  .skill-list {
    list-style: disc;
    padding-left: 2rem;
  }

  .skill-list li {
    margin-bottom: 0.5rem;
    color: #4a5568;
    line-height: 1.7;
    font-size: 1rem;
  }

  @media (max-width: 768px) {
    .section-title {
      font-size: 1.75rem;
      margin-bottom: 1.5rem;
    }

    .skills-grid {
      grid-template-columns: 1fr;
    }
  }

  @media print {
    .section-title {
      font-size: 1.3rem;
      margin-bottom: 1.2rem;
      padding-bottom: 0.4rem;
    }

    .skill-category {
      font-size: 1rem;
      margin-bottom: 0.5rem;
    }

    .skill-list li {
      font-size: 0.8rem;
      line-height: 1.3;
    }
  }
</style>
