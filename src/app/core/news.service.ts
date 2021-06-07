import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http : HttpClient) { }

  getCategories() {
    return this.http.get<any>(environment.apiUrl + 'categories');
  }

  insertNews(data) {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json');
    return this.http.post<any>(environment.apiUrl + 'news-create', data, { headers });
  }

  getAuthors() {
    return this.http.get<any>(environment.apiUrl + 'authors');
  }
}
