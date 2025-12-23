import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  protected apiUrl = environment.apiUrl + environment.apiVersion;

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
