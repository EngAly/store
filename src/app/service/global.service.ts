import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor(private httpClient: HttpClient) { }

  /**
   * get all country codes
   */
  public getCountryCodes() { return this.httpClient.get("assets/countryCodes.json"); }
}
