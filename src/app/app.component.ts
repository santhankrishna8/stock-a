import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AdminStateService } from './services/admin-state.service';
// import { RouterOutlet } from "../../node_modules/@angular/router/index";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'trading';
  isAdmin = false;
  constructor(public adminState: AdminStateService) {}
   logoutAdmin() {
    this.isAdmin = false;
    localStorage.removeItem('isAdmin');
  }
  
}
