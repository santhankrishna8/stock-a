// src/app/services/upload.service.ts
import { Injectable } from '@angular/core';
import { Storage, ref, uploadBytes, getDownloadURL } from '@angular/fire/storage';

@Injectable({ providedIn: 'root' })
export class UploadService {
  constructor(private storage: Storage) {}

  uploadImage(file: File): Promise<string> {
    const filePath = `news/${Date.now()}_${file.name}`;
    const storageRef = ref(this.storage, filePath);

    return uploadBytes(storageRef, file).then(() => getDownloadURL(storageRef));
  }
}
