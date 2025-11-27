// src/app/services/news.service.ts
import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, collectionData } from '@angular/fire/firestore';
import { deleteDoc, doc } from 'firebase/firestore';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class NewsService {
  constructor(private firestore: Firestore) {}

  addNews(news: any) {
    const newsRef = collection(this.firestore, 'news');
    return addDoc(newsRef, news);
  }

  getNews(): Observable<any[]> {
    const newsRef = collection(this.firestore, 'news');
    return collectionData(newsRef, { idField: 'id' });
  }
  deleteNews(id: string) {
  const newsRef = doc(this.firestore, 'news', id);
  return deleteDoc(newsRef);
}

}
