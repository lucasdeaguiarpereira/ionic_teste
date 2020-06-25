import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  URL_API = 'http://api.atrialub.com.br/exemplo';
  API_KEY = '617f09431faac7ecaa51ee5941bd43a1';
  
  constructor(private httpClient: HttpClient ) { }
  getVeiculos(){
    return this.httpClient.get(this.URL_API+"/carros",{ headers:{token:this.API_KEY }});
  }

  getVeiculosPlaca(placa: any){
    return this.httpClient.get(this.URL_API+"/carros/"+placa,{ headers:{token:this.API_KEY }});
  }

  getVeiculosStatus(){
    return this.httpClient.get(this.URL_API+"/status/",{ headers:{token:this.API_KEY }});
  }

}
