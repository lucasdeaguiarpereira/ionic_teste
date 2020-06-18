import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  URL_API = 'http://api.atrialub.com.br/exemplo/carros';
  API_KEY = '617f09431faac7ecaa51ee5941bd43a1';
  
 

  constructor(private httpClient: HttpClient ) { }
  getMarcas(){
    return this.httpClient.get(this.URL_API,{ headers:{token:this.API_KEY }});
  }

}
