import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  veiculo: any;
  placa: any;
  
  constructor(private apiService: ApiService) {}
  
  
  buscarPlaca(){
    this.apiService.getVeiculosPlaca(this.placa).subscribe((data)=>{
      this.veiculo = data;
    });
  }

  

}
