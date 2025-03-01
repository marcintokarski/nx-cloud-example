import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

interface MenuItem {
  text: string;
  link: string;
  icon: string;
}

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent {
  menuItems = signal<MenuItem[]>([
    { text: 'Home', link: '/home', icon: 'home' },
    { text: 'Products', link: '/products', icon: 'shopping_cart' },
    { text: 'Pricing', link: '/pricing', icon: 'attach_money' },
    { text: 'About', link: '/about', icon: 'info' },
    { text: 'Contact', link: '/contact', icon: 'email' },
  ]);
}