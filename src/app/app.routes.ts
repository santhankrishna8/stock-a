import { Routes } from '@angular/router';
import { TopNewsComponent } from './components/top-news/top-news.component';
import { AddNewsComponent } from './components/add-news/add-news.component';
import { LoginComponent } from './components/login/login/login.component';


export const routes: Routes = [
    { path: 'top-news', component: TopNewsComponent },
  { path: 'add-news', component: AddNewsComponent },
  { path: 'login', component: LoginComponent },

  { path: '', component: TopNewsComponent },
  
];
