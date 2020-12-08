import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  constructor() {
  }

  set(key, value): any {
    localStorage.setItem(key, value);
  }

  get(key): any {
    return localStorage.getItem(key);;
  }

  remove(key): void {
    localStorage.removeItem(key);
  }
}
