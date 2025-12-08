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
    this.newsList = data.sort((a, b) => {
      const timeA = (a.postedAt?.toDate?.() || a.postedAt || new Date(0)).getTime();
      const timeB = (b.postedAt?.toDate?.() || b.postedAt || new Date(0)).getTime();
      return timeB - timeA; // Newest first
    });
  });
}

  deleteNews(id: string) {
  this.newsService.deleteNews(id);
}

getRelativeTime(postedAt: any): string {
  // Handle Firestore Timestamp or Date
  let date: Date;
  
  if (postedAt && typeof postedAt.toDate === 'function') {
    // Firestore Timestamp
    date = postedAt.toDate();
  } else if (postedAt instanceof Date) {
    // Native Date
    date = postedAt;
  } else {
    // String or invalid - return empty
    return 'Unknown';
  }

  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffMins = Math.floor(diffMs / 60000);
  const diffHours = Math.floor(diffMs / 3600000);
  const diffDays = Math.floor(diffMs / 86400000);

  if (diffMins < 1) return 'Just now';
  if (diffMins < 60) return `${diffMins} min ago`;
  if (diffHours < 24) return `${diffHours} h ago`;
  if (diffDays < 7) return `${diffDays}d ago`;
  return date.toLocaleDateString();
}




}
