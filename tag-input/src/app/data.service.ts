import { Injectable } from "@angular/core";
import { HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    Authorization: 'Teu token'
  })
};

@Injectable({
  providedIn: "root"
})
export class DataService {
  constructor(private http: HttpClient) {}

  // mude a url pra sua base
  URL: string = "https:localhost:8080/tags"

  /** POST: add a new tag to the database */
  addtag(tag: string) {
    return this.http.post<string[]>(this.URL, tag);
  }
}