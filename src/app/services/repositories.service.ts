import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class RepositoriesService {

  baseUrl = 'https://api.github.com';

  constructor(private _http: HttpClient) {
    /*this.http.get('/api/items').subscribe(data => {
      // Read the result field from the JSON response.
      // this.results = data['results'];
    });*/
  }

  getRepos(username: string) {
    return this._http.get(`${this.baseUrl}/users/${username}/repos`);
  }

}
