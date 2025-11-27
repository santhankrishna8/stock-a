import { Component, EventEmitter, Input, Output } from '@angular/core';
import { doc, updateDoc } from 'firebase/firestore';
import { Firestore } from '@angular/fire/firestore';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-news',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './edit-news.component.html',
  styleUrl: './edit-news.component.css'
})
export class EditNewsComponent {
    @Input() news: any;
  @Output() closeEdit = new EventEmitter();

  constructor(private firestore: Firestore) {}

  async updateNews() {
    if (!this.news?.id) return;

    const ref = doc(this.firestore, 'news', this.news.id);
    await updateDoc(ref, {
      title: this.news.title,
      description: this.news.description,
      imageUrl: this.news.imageUrl
    });

    alert('News Updated');
    this.closeEdit.emit();
  }

  close() {
    this.closeEdit.emit();
  }

}
