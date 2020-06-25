import { Status } from './Status';

export class Veiculo{
    private _codCheckList: Int32Array;
    private _nome: String;
    private _status: Status;
    private _placa: String;
    private _marca: String;
    private _modelo: String;   
    private _ano: Int32Array;
   
    constructor() {}
    
    public get codCheckList(): Int32Array {
        return this._codCheckList;
    }
    public set codCheckList(value: Int32Array) {
        this._codCheckList = value;
    }

    public get nome(): String {
        return this._nome;
    }
    public set nome(value: String) {
        this._nome = value;
    }

    public get status(): Status {
        return this._status;
    }
    public set status(value: Status) {
        this._status = value;
    }

    public get placa(): String {
        return this._placa;
    }
    public set placa(value: String) {
        this._placa = value;
    }

    public get marca(): String {
        return this._marca;
    }
    public set marca(value: String) {
        this._marca = value;
    }

    public get modelo(): String {
        return this._modelo;
    }
    public set modelo(value: String) {
        this._modelo = value;
    }

    public get ano(): Int32Array {
        return this._ano;
    }
    public set ano(value: Int32Array) {
        this._ano = value;
    }
   
  }