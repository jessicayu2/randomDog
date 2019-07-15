import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DogsService {

  constructor(private http: HttpClient) { }

  dogUrl = 'https://dog.ceo/api/breeds/image/random';

  getADog() {
    return this.http.get(this.dogUrl);
  }
}
