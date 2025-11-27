import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {  NewsService } from '../../services/news.service';
import { AuthService } from '../../services/auth.service';
import { EditNewsComponent } from '../edit-news/edit-news.component';
import { AdminStateService } from '../../services/admin-state.service';

@Component({
  selector: 'app-top-news',
  standalone: true,
  imports:[CommonModule],
  templateUrl: './top-news.component.html',
  styleUrl: './top-news.component.css'
})
export class TopNewsComponent {
  newsList: any[] = [];

   isAdmin = false;

// news$: Observable<undefined>|Subscribable<undefined>|Promise<undefined>;

  constructor(private newsService: NewsService,public adminState: AdminStateService
) {}

  ngOnInit() {
    this.newsService.getNews().subscribe(data => {
      this.newsList = data;
    });
  }
  deleteNews(id: string) {
  this.newsService.deleteNews(id);
}


}
