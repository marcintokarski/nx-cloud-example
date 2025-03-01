import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <div class="page-container">
      <h1>About Us</h1>
      
      <div class="about-content">
        <div class="about-image"></div>
        
        <div class="about-text">
          <h2>Our Story</h2>
          <p>
            Founded in 2023, our company has been dedicated to providing high-quality products and services to our customers.
            We believe in innovation, quality, and customer satisfaction.
          </p>
          
          <h2>Our Mission</h2>
          <p>
            Our mission is to create products that enhance people's lives while maintaining the highest standards of quality and innovation.
            We strive to be environmentally conscious and socially responsible in all our business practices.
          </p>
          
          <h2>Our Team</h2>
          <p>
            We have a dedicated team of professionals who are passionate about what they do. From our designers to our customer service representatives,
            everyone works together to ensure that we deliver the best possible experience to our customers.
          </p>
        </div>
      </div>
      
      <div class="values">
        <h2>Our Core Values</h2>
        <div class="values-grid">
          <div class="value-card">
            <span class="material-icons">favorite</span>
            <h3>Passion</h3>
            <p>We are passionate about creating products that our customers love.</p>
          </div>
          <div class="value-card">
            <span class="material-icons">lightbulb</span>
            <h3>Innovation</h3>
            <p>We continuously strive to innovate and improve our offerings.</p>
          </div>
          <div class="value-card">
            <span class="material-icons">people</span>
            <h3>Teamwork</h3>
            <p>We believe in the power of collaboration and teamwork.</p>
          </div>
          <div class="value-card">
            <span class="material-icons">verified</span>
            <h3>Quality</h3>
            <p>We are committed to maintaining the highest standards of quality.</p>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .page-container {
      padding: 2rem;
      max-width: 1200px;
      margin: 0 auto;
    }
    
    h1 {
      color: #ff69b4;
      margin-bottom: 2rem;
      text-align: center;
    }
    
    .about-content {
      display: flex;
      flex-wrap: wrap;
      gap: 2rem;
      margin-bottom: 3rem;
    }
    
    .about-image {
      flex: 1;
      min-width: 300px;
      height: 400px;
      background-image: url('https://images.unsplash.com/photo-1552581234-26160f608093');
      background-size: cover;
      background-position: center;
      border-radius: 8px;
    }
    
    .about-text {
      flex: 2;
      min-width: 300px;
    }
    
    h2 {
      color: #ff69b4;
      margin: 1.5rem 0 1rem;
    }
    
    h2:first-child {
      margin-top: 0;
    }
    
    p {
      font-size: 1.1rem;
      line-height: 1.6;
      margin-bottom: 1.5rem;
      color: #444;
    }
    
    .values {
      margin-top: 2rem;
    }
    
    .values h2 {
      text-align: center;
      margin-bottom: 2rem;
    }
    
    .values-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 2rem;
    }
    
    .value-card {
      text-align: center;
      padding: 2rem;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
      border-radius: 8px;
      transition: transform 0.3s ease;
    }
    
    .value-card:hover {
      transform: translateY(-5px);
    }
    
    .material-icons {
      font-size: 2.5rem;
      color: #ff69b4;
      margin-bottom: 1rem;
    }
    
    h3 {
      margin-bottom: 0.5rem;
      color: #333;
    }
    
    .value-card p {
      font-size: 1rem;
      margin-bottom: 0;
    }
  `]
})
export class AboutComponent {}
