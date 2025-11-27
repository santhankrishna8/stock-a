import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdminStateService } from '../../../services/admin-state.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
 email = '';
password = '';
isAdmin = false;
constructor(public adminState: AdminStateService) {}
private readonly ADMIN_EMAIL = 'admin1.m';
private readonly ADMIN_PASS = 'admin123';


login() {
  if (this.email === this.ADMIN_EMAIL && this.password === this.ADMIN_PASS) {
    this.adminState.loginAsAdmin();
    this.isAdmin = true;
  }
}

logout() {
  this.adminState.logoutAdmin();
  this.isAdmin = false;
}

}
