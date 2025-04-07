import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Census {
  _id?: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  numberOfPeople: number;
  year: number;
  censusTaker: string;
}

@Injectable({
  providedIn: 'root'
})
export class CensusService {
  private apiUrl = 'http://localhost:3000/api/census';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Census[]> {
    return this.http.get<Census[]>(this.apiUrl);
  }

  getById(id: string): Observable<Census> {
    return this.http.get<Census>(`${this.apiUrl}/${id}`);
  }

  create(data: Census): Observable<Census> {
    return this.http.post<Census>(this.apiUrl, data);
  }

  update(id: string, data: Census): Observable<Census> {
    return this.http.put<Census>(`${this.apiUrl}/${id}`, data);
  }

  delete(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
