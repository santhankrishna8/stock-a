import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { NewsService } from "../../services/news.service";
import { Router } from "@angular/router";
import { UploadService } from "../../services/upload.service";
import { AdminStateService } from "../../services/admin-state.service";
// import { Router } from "@angular/router";

@Component({
  selector: 'app-add-news',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.css']
})
export class AddNewsComponent {
title = '';
  link = '';
  file!: File;
  loading = false;
imageUrl: any;
showToast = false;

  constructor(
    private uploadService: UploadService,
    private newsService: NewsService,
    private router: Router,
    public adminState: AdminStateService
  ) {}

  onFileSelected(event: any) {
    this.file = event.target.files[0];
  }

  // add-news.component.ts
async submitNews() {
  this.loading = true;

  await this.newsService.addNews({
    title: this.title,
    link: this.link,
    imageUrl: this.imageUrl, // string input, e.g. https://images.pexels.com/...
    postedAt: new Date()
  });

  this.loading = false;
  this.showToast = true;
  setTimeout(() => {
    this.showToast = false;
  }, 2000); // 2 seconds
  this.router.navigate(['/top-news']);
}

}
