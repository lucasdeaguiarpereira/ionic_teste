export class Status{
    private _status: Int32Array;
    private _setor: String;
    private _setorCor: String;
   
  
    constructor() {}

    public get status(): Int32Array {
        return this._status;
    }
    public set status(value: Int32Array) {
        this._status = value;
    }
    
    public get setor(): String {
        return this._setor;
    }
    public set setor(value: String) {
        this._setor = value;
    }
 
    public get setorCor(): String {
        return this._setorCor;
    }
    public set setorCor(value: String) {
        this._setorCor = value;
    }
  }