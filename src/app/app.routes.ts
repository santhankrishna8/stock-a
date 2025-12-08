import { Routes } from '@angular/router';
import { TopNewsComponent } from './components/top-news/top-news.component';
import { AddNewsComponent } from './components/add-news/add-news.component';
import { LoginComponent } from './components/login/login/login.component';
import { EditNewsComponent } from './components/edit-news/edit-news.component';


export const routes: Routes = [
    { path: 'top-news', component: TopNewsComponent },
  { path: 'add-news', component: AddNewsComponent },
  { path: 'login', component: LoginComponent },
   { path: 'edit-news', component: EditNewsComponent },
  { path: '', component: TopNewsComponent },
  
];
