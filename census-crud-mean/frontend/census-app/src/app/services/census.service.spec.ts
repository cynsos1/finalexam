// src/app/services/census.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Census {
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

  create(data: Census): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }

  update(id: string, data: Partial<Census>): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, data);
  }

  delete(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
