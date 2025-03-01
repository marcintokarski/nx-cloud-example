import { Component, signal } from '@angular/core';

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
}

@Component({
  selector: 'app-products',
  standalone: true,
  template: `
    <div class="page-container">
      <h1>Our Products</h1>
      <p>Explore our selection of high-quality products.</p>
      
      <div class="products-grid">
      @for (product of products(); track product.id) {
        <div class="product-card">
            <div class="product-image" [style.background-image]="'url(' + product.imageUrl + ')'"></div>
            <div class="product-info">
              <h3>{{ product.name }}</h3>
              <p class="price">$ {{ product.price.toFixed(2) }}</p>
              <p class="description">{{ product.description }}</p>
              <button class="view-button">View Details</button>
            </div>
          </div>
        }
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
      margin-bottom: 1rem;
      text-align: center;
    }
    
    p {
      font-size: 1.1rem;
      line-height: 1.6;
      margin-bottom: 2rem;
      text-align: center;
    }
    
    .products-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
      gap: 2rem;
    }
    
    .product-card {
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s ease;
    }
    
    .product-card:hover {
      transform: translateY(-5px);
    }
    
    .product-image {
      height: 200px;
      background-size: cover;
      background-position: center;
    }
    
    .product-info {
      padding: 1.5rem;
    }
    
    h3 {
      margin-bottom: 0.5rem;
      color: #333;
    }
    
    .price {
      font-size: 1.2rem;
      font-weight: bold;
      color: #ff69b4;
      margin-bottom: 0.5rem;
    }
    
    .description {
      color: #666;
      margin-bottom: 1rem;
      font-size: 0.9rem;
    }
    
    .view-button {
      padding: 0.5rem 1rem;
      background-color: #ff69b4;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      transition: background-color 0.3s ease;
      font-family: 'Poppins', sans-serif;
    }
    
    .view-button:hover {
      background-color: #e0509e;
    }
  `]
})
export class ProductsComponent {
  products = signal<Product[]>([
    {
      id: 1,
      name: 'Premium Headphones',
      price: 249.99,
      description: 'High-quality wireless headphones with noise cancellation.',
      imageUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e'
    },
    {
      id: 2,
      name: 'Smartwatch',
      price: 199.99,
      description: 'Track your fitness and stay connected with this smartwatch.',
      imageUrl: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30'
    },
    {
      id: 3,
      name: 'Wireless Speaker',
      price: 129.99,
      description: 'Portable speaker with excellent sound quality.',
      imageUrl: 'https://images.unsplash.com/photo-1564424224827-cd24b8915874'
    },
    {
      id: 4,
      name: 'Laptop Stand',
      price: 49.99,
      description: 'Ergonomic laptop stand for better posture and comfort.',
      imageUrl: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf'
    }
  ]);
}
