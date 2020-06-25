import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Status } from '../classes/Status';
import { Veiculo } from '../classes/Veiculo';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

 
  placa: any;
  veiculo: Array<Veiculo> = [];
  listaStatus: Array<Status> = [];

  constructor(private apiService: ApiService) {}
  
  ngOnInit(){
    let item;
    var i = 0;
    this.apiService.getVeiculosStatus().subscribe((data)=>{
      while(data[i]!=null)
      {
        item = new Status();
        item.status = data[i].status;
        item.setor = data[i].setor;
        item.setorCor = data[i].setorCor;
        this.listaStatus.push(item);
        item = null;
        i++;
      }
    });
  }

  
  buscarPlaca(){
    let item;
    var i = 0;
    if(this.veiculo != null){
      this.veiculo.splice(0,1);
    }
    this.apiService.getVeiculosPlaca(this.placa).subscribe((data)=>{
      while(data[i]!=null)
      {
        item = new Veiculo();
        item.codCheckList = data[i].codCheckList;
        item.nome = data[i].nome;
        item.status = this.listaStatus[data[i].status];
        item.placa = data[i].placa;
        item.marca = data[i].marca;
        item.modelo = data[i].modelo;
        item.ano = data[i].ano;
        this.veiculo.push(item);
        item = null;
        i++;
      }
    });
  }

}
