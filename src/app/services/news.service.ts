// src/app/services/news.service.ts
import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, collectionData } from '@angular/fire/firestore';
import { deleteDoc, doc } from 'firebase/firestore';
import { Observable } from 'rxjs';
import { getDoc, updateDoc } from 'firebase/firestore';

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

async getNewsById(id: string) {
  const newsRef = doc(this.firestore, 'news', id);
  const newsSnap = await getDoc(newsRef);
  return newsSnap.exists() ? { id: newsSnap.id, ...newsSnap.data() } : null;
}

async updateNews(id: string, news: any) {
  const newsRef = doc(this.firestore, 'news', id);
  return updateDoc(newsRef, news);
}


}
