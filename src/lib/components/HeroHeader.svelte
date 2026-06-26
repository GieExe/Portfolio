<script>
  let { profilePicture, name, title, contact } = $props();
</script>

<header class="hero">
  <div class="hero-inner">
    <div class="photo-wrapper">
      <img src={profilePicture} alt="{name}" class="photo" />
      <div class="photo-accent"></div>
    </div>

    <div class="hero-text">
      <p class="hero-label">Resume</p>
      <h1 class="hero-name">{name}</h1>
      <p class="hero-title">{title}</p>

      <div class="hero-contact">
        <span class="contact-item">
          <span class="contact-icon">✉</span>
          <a href="mailto:{contact.email}">{contact.email}</a>
        </span>
        <span class="contact-divider">·</span>
        <span class="contact-item">
          <span class="contact-icon">☎</span>
          {contact.phone}
        </span>
        <span class="contact-divider">·</span>
        <span class="contact-item">
          <span class="contact-icon">⌂</span>
          {contact.address}
        </span>
      </div>
    </div>
  </div>
  <div class="hero-bar"></div>
</header>

<style>
  .hero {
    position: relative;
    padding: 3rem 0 0;
    margin-bottom: 3rem;
  }

  .hero-inner {
    display: flex;
    align-items: center;
    gap: 2.5rem;
    padding: 0 0 2.5rem;
  }

  .photo-wrapper {
    position: relative;
    flex-shrink: 0;
  }

  .photo {
    width: 140px;
    height: 140px;
    border-radius: 50%;
    object-fit: cover;
    display: block;
    position: relative;
    z-index: 1;
    filter: grayscale(15%) contrast(1.05);
  }

  .photo-accent {
    position: absolute;
    top: 8px;
    left: 8px;
    width: 140px;
    height: 140px;
    border-radius: 50%;
    border: 3px solid var(--accent);
    z-index: 0;
    transition: transform 0.4s var(--ease-out);
  }

  .photo-wrapper:hover .photo-accent {
    transform: translate(-3px, -3px);
  }

  .hero-text {
    flex: 1;
  }

  .hero-label {
    font-family: var(--font-mono);
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 0.15em;
    color: var(--text-muted);
    margin-bottom: 0.4rem;
  }

  .hero-name {
    font-family: var(--font-heading);
    font-size: 2.8rem;
    font-weight: 700;
    color: var(--text-primary);
    letter-spacing: -0.02em;
    line-height: 1.1;
    margin-bottom: 0.5rem;
  }

  .hero-title {
    font-family: var(--font-body);
    font-size: 1.15rem;
    color: var(--accent);
    font-weight: 500;
    margin-bottom: 1.2rem;
  }

  .hero-contact {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.85rem;
    color: var(--text-muted);
  }

  .contact-item {
    display: inline-flex;
    align-items: center;
    gap: 0.35rem;
  }

  .contact-icon {
    font-size: 0.9rem;
    opacity: 0.6;
  }

  .contact-item a {
    color: var(--text-muted);
    border-bottom: 1px solid transparent;
    transition: all 0.2s var(--ease-out);
  }

  .contact-item a:hover {
    color: var(--accent);
    border-bottom-color: var(--accent);
  }

  .contact-divider {
    color: var(--border);
    font-size: 1.2rem;
  }

  .hero-bar {
    height: 4px;
    background: linear-gradient(90deg, var(--accent) 0%, var(--accent) 30%, var(--sage) 30%, var(--sage) 60%, var(--border) 60%, var(--border) 100%);
    border-radius: 2px;
  }

  @media (max-width: 768px) {
    .hero-inner {
      flex-direction: column;
      text-align: center;
      gap: 1.5rem;
    }

    .hero-name {
      font-size: 2rem;
    }

    .hero-contact {
      justify-content: center;
    }
  }

  @media print {
    .hero {
      padding: 0;
      margin-bottom: 1.5rem;
    }

    .photo {
      width: 100px;
      height: 100px;
    }

    .photo-accent {
      width: 100px;
      height: 100px;
      top: 5px;
      left: 5px;
    }

    .hero-name {
      font-size: 2rem;
    }

    .hero-title {
      font-size: 0.9rem;
    }

    .hero-contact {
      font-size: 0.7rem;
    }

    .hero-bar {
      height: 3px;
    }
  }
</style>
