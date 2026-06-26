<script>
  let { profilePicture, name, title, contact, certifications } = $props();
</script>

<aside class="left-column">
  <img src={profilePicture} alt="{name} Profile Picture" class="profile-picture" />

  <h2 class="text-4xl font-extrabold mb-4 text-white">{name}</h2>
  <p class="text-xl mb-8 text-blue-300">{title}</p>

  <div class="contact-info-left w-full text-left mb-10">
    <h3 class="section-title-left">Contact</h3>
    <p>{contact.address}</p>
    <p>{contact.phone}</p>
    <p>{contact.email}</p>
  </div>

  <section class="w-full text-left">
    <h3 class="section-title-left">Certifications & Diplomas</h3>
    <ul class="space-y-1">
      {#each certifications as cert}
        <li>
          <a href={cert.url} target="_blank" rel="noopener noreferrer" class="cert-link">
            {cert.label}
          </a>
        </li>
      {/each}
    </ul>
  </section>
</aside>

<style>
  .left-column {
    background-color: #2c3e50;
    color: #ecf0f1;
    padding: 3.5rem 2rem;
    width: 32%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .profile-picture {
    width: 170px;
    height: 170px;
    border-radius: 50%;
    object-fit: cover;
    border: 6px solid #5fa2dd;
    margin-bottom: 2rem;
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.3);
  }

  .section-title-left {
    border-bottom: 2px solid #5fa2dd;
    color: #ecf0f1;
    font-size: 1.8rem;
    margin-bottom: 2rem;
    padding-bottom: 0.8rem;
    width: 100%;
    text-align: left;
    text-transform: uppercase;
    font-weight: 700;
    letter-spacing: 0.03em;
  }

  .contact-info-left p {
    display: flex;
    align-items: center;
    margin-bottom: 0.7rem;
    font-size: 0.875rem;
    color: #d0d7e0;
    line-height: 1.3;
    text-align: left;
    width: 100%;
  }

  ul {
    list-style: none;
    padding-left: 0;
    width: 100%;
    text-align: left;
  }

  li {
    margin-bottom: 0.8rem;
    font-size: 0.95rem;
    line-height: 1.5;
  }

  .cert-link {
    color: #85c1e9;
    text-decoration: none;
    transition: color 0.2s ease-in-out;
  }

  .cert-link:hover {
    color: #5fa2dd;
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    .left-column {
      width: 100%;
      padding: 2.5rem 1.5rem;
      border-top-left-radius: 12px;
      border-top-right-radius: 12px;
    }

    .profile-picture {
      width: 120px;
      height: 120px;
    }

    .section-title-left {
      font-size: 1.75rem;
      margin-bottom: 1.5rem;
    }
  }

  @media print {
    .left-column {
      width: 32%;
      padding: 1.2cm;
    }

    .profile-picture {
      width: 120px;
      height: 120px;
      border: 4px solid #5fa2dd;
      box-shadow: none;
    }

    .section-title-left {
      font-size: 1.3rem;
      margin-bottom: 1.2rem;
      padding-bottom: 0.4rem;
    }

    .cert-link {
      font-size: 0.8rem;
    }
  }
</style>
