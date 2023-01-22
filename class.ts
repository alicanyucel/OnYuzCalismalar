class Ev{
    _odasayisi:number;
    _kat:number;
    _penceresayisi:number
    yemekye():void{
    console.log("yemek yenildi")
    }
    constructor(odasayisi:number,kat:number,penceresayisi:number)
    {
        this._odasayisi=odasayisi;
        this._kat=kat;
        this._penceresayisi=penceresayisi
    }
}
let ev=new Ev(3,4,6)
console.log("odasayisi:" + ev._odasayisi+ " " + "pencere sayisi" + ev._penceresayisi)
ev.yemekye();
