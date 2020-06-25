import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Status } from '../classes/Status';
import { Veiculo } from '../classes/Veiculo';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page {

 
  veiculos: Array<Veiculo> = [];
  listaStatus: Array<Status> = [];
  hideMe =  [];
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

  ionViewDidEnter(){
    let item;
    var i = 0
    this.apiService.getVeiculos().subscribe((data)=>{
      while(data[i]!=null)
      {
        this.hideMe[i] = false;
        item = new Veiculo();
        item.codCheckList = data[i].codCheckList;
        item.nome = data[i].nome;
        item.status = this.listaStatus[data[i].status];
        item.placa = data[i].placa;
        item.marca = data[i].marca;
        item.modelo = data[i].modelo;
        item.ano = data[i].ano;
        this.veiculos.push(item);
        item = null;
        i++;
      }
    });
  }
  
  abrir(i: any){
    if(this.hideMe[i] == false){
      this.hideMe[i] = true;
    }else{
      this.hideMe[i] = false;
    }
  }
}
