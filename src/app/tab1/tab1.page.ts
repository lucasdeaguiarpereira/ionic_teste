import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  veiculos: any;

  constructor(private apiService: ApiService) {}

  ionViewDidEnter(){
    this.apiService.getVeiculos().subscribe((data)=>{
      this.veiculos = data;
    });
  }
  
  
}
