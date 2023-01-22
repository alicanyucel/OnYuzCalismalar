abstract class KrediBase{
   
    constructor() { }
kaydet():void{
    console.log("kaydedildi");
}
abstract hesapla():void;
}
class TuketiciKredi extends KrediBase{
    hesapla(): void {
       console.log("tuketici kredisine göre hesaplama yapıldı")
    }
    constructor(){
        super()
    }
}
let tuketici=new TuketiciKredi();
tuketici.hesapla();