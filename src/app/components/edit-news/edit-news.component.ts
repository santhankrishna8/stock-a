import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ActivatedRoute, Router, RouterLink, RouterLinkActive } from "@angular/router";
import { NewsService } from "../../services/news.service";
import { AdminStateService } from "../../services/admin-state.service";

@Component({
  selector: 'app-edit-news',
  standalone: true,
  imports: [FormsModule, CommonModule,RouterLink, RouterLinkActive],
  templateUrl: './edit-news.component.html',
  styleUrls: ['./edit-news.component.css']
})
export class EditNewsComponent implements OnInit {
  newsList: any[] = [];
  loading = false;
  showToast = false;

  // For editing single item
  editingNewsId: string | null = null;
  editingTitle = '';
  editingLink = '';
  editingImageUrl = '';

  constructor(
    private newsService: NewsService,
    private router: Router,
    private route: ActivatedRoute,
    public adminState: AdminStateService
  ) {}

  async ngOnInit() {
    this.loading = true;
   this.newsService.getNews().subscribe(data => {
    this.newsList = data.sort((a, b) => {
      const timeA = (a.postedAt?.toDate?.() || a.postedAt || new Date(0)).getTime();
      const timeB = (b.postedAt?.toDate?.() || b.postedAt || new Date(0)).getTime();
      return timeB - timeA; // Newest first
    });
      this.loading = false;
    });
  }

  editNews(news: any) {
    this.editingNewsId = news.id;
    this.editingTitle = news.title;
    this.editingLink = news.link;
    this.editingImageUrl = news.imageUrl;
  }

  cancelEdit() {
    this.editingNewsId = null;
    this.editingTitle = '';
    this.editingLink = '';
    this.editingImageUrl = '';
  }

  async updateNews() {
    if (!this.editingNewsId) return;

    this.loading = true;
    await this.newsService.updateNews(this.editingNewsId, {
      title: this.editingTitle,
      link: this.editingLink,
      imageUrl: this.editingImageUrl
    });
    
    this.loading = false;
    this.showToast = true;
    setTimeout(() => {
      this.showToast = false;
    }, 2000);
    this.cancelEdit();
  }

  async deleteNews(id: string) {
    if (!confirm('Delete this news item?')) return;

    this.loading = true;
    await this.newsService.deleteNews(id);
    this.loading = false;
  }
}
