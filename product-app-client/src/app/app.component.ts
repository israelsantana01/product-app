import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'product-app-client';
  mode = 'side';
  sidebarOpen = true;

  constructor(public authService: AuthService, private router: Router) {}

  logout() {
    this.authService.logout();
    this.sidebarOpen = false;
    this.router.navigate(['/auth']);

  }

  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }

  @HostListener('window:resize')
  onWindowResize() {
    if (window.innerWidth <= 768) {
      this.mode = 'over';
      this.sidebarOpen = false;
    } else {
      this.mode = 'side';
    }
  }
}
