import { Component } from '@angular/core';

interface LegalService {
  title: string;
  description: string;
  icon: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <div class="page-container">
      <section class="hero">
        <h1>Welcome to Our Legal Practice</h1>
        <p class="subtitle">Specialized legal expertise for your personal and business needs</p>
      </section>

      <section class="features">
        <h2>Why Choose Us</h2>
        <div class="features-grid">
          <div class="feature">
            <span class="material-icons">gavel</span>
            <h3>Expert Attorneys</h3>
            <p>Our team consists of experienced legal professionals dedicated to your success.</p>
          </div>
          <div class="feature">
            <span class="material-icons">support_agent</span>
            <h3>Client-Focused</h3>
            <p>We prioritize your needs and provide personalized legal solutions.</p>
          </div>
          <div class="feature">
            <span class="material-icons">trending_up</span>
            <h3>Proven Track Record</h3>
            <p>Our history of successful cases speaks for our expertise and commitment.</p>
          </div>
        </div>
      </section>

      <section class="legal-services">
        <h2>Our Legal Services</h2>
        <div class="services-grid">
          @for (service of legalServices; track service.title) {
            <div class="service-card">
              <div class="service-icon">
                <span class="material-icons">{{ service.icon }}</span>
              </div>
              <h3>{{ service.title }}</h3>
              <p>{{ service.description }}</p>
              <a href="#" class="learn-more">Learn More</a>
            </div>
          }
        </div>
      </section>

      <section class="consultation">
        <div class="consultation-content">
          <h2>Free Initial Consultation</h2>
          <p>We offer a free initial consultation to discuss your legal needs and how we can assist you.</p>
          <button class="consultation-button">Schedule Now</button>
        </div>
      </section>

      <section class="testimonials">
        <h2>What Our Clients Say</h2>
        <div class="testimonial">
          <p class="quote">"The legal team provided exceptional service throughout my case. Their expertise and dedication made all the difference in achieving a favorable outcome."</p>
          <p class="author">— Jane Smith, Corporate Client</p>
        </div>
      </section>
    </div>
  `,
  styles: [`
    .page-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 1rem;
    }

    section {
      margin-bottom: 4rem;
    }

    h1, h2 {
      color: #ff69b4;
      text-align: center;
    }

    h1 {
      font-size: 2.5rem;
      margin-bottom: 1rem;
    }

    h2 {
      font-size: 2rem;
      margin-bottom: 2rem;
    }

    h3 {
      color: #333;
      margin-bottom: 1rem;
    }

    .hero {
      text-align: center;
      padding: 4rem 0;
      background-color: #f9f9f9;
      border-radius: 8px;
      margin-top: 2rem;
    }

    .subtitle {
      font-size: 1.25rem;
      margin-bottom: 0;
      color: #555;
    }

    .features-grid {
      display: flex;
      flex-wrap: wrap;
      gap: 2rem;
      justify-content: center;
    }

    .feature {
      flex: 1;
      min-width: 250px;
      text-align: center;
      padding: 2rem;
      border-radius: 8px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s ease;
    }

    .feature:hover {
      transform: translateY(-5px);
    }

    .material-icons {
      font-size: 3rem;
      color: #ff69b4;
      margin-bottom: 1rem;
    }

    /* Legal Services Section */
    .legal-services {
      padding: 2rem 0;
    }

    .services-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
      gap: 2rem;
    }

    .service-card {
      background-color: #fff;
      border-radius: 8px;
      padding: 2rem;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      position: relative;
      z-index: 1;
    }

    .service-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
    }

    .service-icon {
      display: flex;
      justify-content: center;
      margin-bottom: 1.5rem;
    }

    .service-icon .material-icons {
      background-color: rgba(255, 105, 180, 0.1);
      border-radius: 50%;
      padding: 1rem;
      font-size: 2rem;
    }

    .service-card h3 {
      text-align: center;
      margin-bottom: 1rem;
    }

    .service-card p {
      color: #666;
      margin-bottom: 1.5rem;
      line-height: 1.6;
    }

    .learn-more {
      display: inline-block;
      color: #ff69b4;
      text-decoration: none;
      font-weight: 500;
      position: relative;
    }

    .learn-more:after {
      content: '';
      position: absolute;
      width: 100%;
      height: 2px;
      bottom: -4px;
      left: 0;
      background-color: #ff69b4;
      transform: scaleX(0);
      transform-origin: bottom right;
      transition: transform 0.3s ease;
    }

    .learn-more:hover:after {
      transform: scaleX(1);
      transform-origin: bottom left;
    }

    /* Consultation Section */
    .consultation {
      background-color: #f9f9f9;
      border-radius: 8px;
      padding: 3rem 2rem;
      text-align: center;
    }

    .consultation h2 {
      margin-bottom: 1rem;
    }

    .consultation p {
      max-width: 700px;
      margin: 0 auto 2rem;
      font-size: 1.1rem;
      line-height: 1.6;
    }

    .consultation-button {
      background-color: #ff69b4;
      color: white;
      border: none;
      padding: 1rem 2rem;
      font-size: 1.1rem;
      border-radius: 50px;
      cursor: pointer;
      font-family: 'Poppins', sans-serif;
      font-weight: 500;
      transition: background-color 0.3s ease, transform 0.3s ease;
    }

    .consultation-button:hover {
      background-color: #e0509e;
      transform: translateY(-2px);
    }

    /* Testimonials */
    .testimonials {
      padding: 2rem 0;
    }

    .testimonial {
      max-width: 800px;
      margin: 0 auto;
      text-align: center;
      padding: 2rem;
      background-color: #fff;
      border-radius: 8px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
    }

    .quote {
      font-size: 1.2rem;
      line-height: 1.8;
      color: #444;
      font-style: italic;
      margin-bottom: 1rem;
    }

    .author {
      font-weight: 600;
      color: #333;
    }

    /* Responsive adjustments */
    @media (max-width: 768px) {
      h1 {
        font-size: 2rem;
      }
      
      h2 {
        font-size: 1.5rem;
      }
      
      .services-grid {
        grid-template-columns: 1fr;
      }
      
      .consultation {
        padding: 2rem 1rem;
      }
    }
  `]
})
export class HomeComponent {
  legalServices: LegalService[] = [
    {
      title: 'Corporate Law',
      description: 'Expert advice on business formation, contracts, mergers and acquisitions, and corporate governance issues.',
      icon: 'business'
    },
    {
      title: 'Real Estate Law',
      description: 'Comprehensive legal services for property transactions, leases, land use, and zoning matters.',
      icon: 'apartment'
    },
    {
      title: 'Family Law',
      description: 'Compassionate representation in divorce, child custody, adoption, and other family-related legal matters.',
      icon: 'family_restroom'
    },
    {
      title: 'Intellectual Property',
      description: 'Protection for your innovations, including patents, trademarks, copyrights, and trade secrets.',
      icon: 'copyright'
    },
    {
      title: 'Estate Planning',
      description: 'Personalized wills, trusts, and estate plans to protect your assets and provide for your loved ones.',
      icon: 'description'
    },
    {
      title: 'Litigation',
      description: 'Skilled representation in civil and commercial disputes, with a focus on achieving favorable outcomes.',
      icon: 'gavel'
    }
  ];
}