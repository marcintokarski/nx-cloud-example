import { Component } from '@angular/core';

interface PricingPlan {
  title: string;
  price: number;
  currency: string;
  period: string;
  features: string[];
  buttonText: string;
  highlighted: boolean;
}

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss']
})
export class PricingComponent {
  pricingPlans: PricingPlan[] = [
    {
      title: 'Basic',
      price: 9.99,
      currency: '$',
      period: '/month',
      features: [
        'Single user',
        '5GB storage',
        'Basic support',
        'Access to main features'
      ],
      buttonText: 'Get Started',
      highlighted: false
    },
    {
      title: 'Pro',
      price: 19.99,
      currency: '$',
      period: '/month',
      features: [
        'Up to 5 users',
        '50GB storage',
        'Priority support',
        'Access to all features',
        'Advanced analytics'
      ],
      buttonText: 'Get Pro',
      highlighted: true
    },
    {
      title: 'Enterprise',
      price: 49.99,
      currency: '$',
      period: '/month',
      features: [
        'Unlimited users',
        '500GB storage',
        '24/7 dedicated support',
        'Custom solutions',
        'Advanced analytics',
        'API access'
      ],
      buttonText: 'Contact Sales',
      highlighted: false
    }
  ];

  toggleBilling(isAnnual: boolean): void {
    // Apply discount or change prices for annual billing
    // This is a placeholder for actual implementation
    if (isAnnual) {
      this.pricingPlans = this.pricingPlans.map(plan => ({
        ...plan,
        price: plan.price * 10, // 2 months free when billed annually
        period: '/year'
      }));
    } else {
      this.pricingPlans = this.pricingPlans.map(plan => ({
        ...plan,
        price: plan.price / 10,
        period: '/month'
      }));
    }
  }
}