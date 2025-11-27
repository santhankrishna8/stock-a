import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminStateService {
   isAdmin = false;
// isAdmin = false;

  constructor() {
    const stored = localStorage.getItem('isAdmin');
    this.isAdmin = stored === 'true';
  }

  loginAsAdmin() {
    this.isAdmin = true;
    localStorage.setItem('isAdmin', 'true');
  }

  logoutAdmin() {
    this.isAdmin = false;
    localStorage.removeItem('isAdmin');
  }
  
}
