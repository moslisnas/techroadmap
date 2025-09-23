import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  protected apiUrl = 'http://localhost:3000/api/v0';

  constructor(protected http: HttpClient) {}

  //GET
  getTechnologies(): Observable<any> {
    return this.http.get(`${this.apiUrl}/technology`);
  }
  getTechnologyById(id:number): Observable<any> {
    return this.http.get(`${this.apiUrl}/technology?id=${id}`);
  }
  getTechnologyByIdWithVersions(id:number): Observable<any> {
    return this.http.get(`${this.apiUrl}/technology?id=${id}&dependencies=true`);
  }
  getTechnologyVersionsByIdTechnology(id_technology:number): Observable<any> {
    return this.http.get(`${this.apiUrl}/technology_versions?id_technology=${id_technology}`);
  }
}
