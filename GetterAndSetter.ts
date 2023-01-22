class Person{
    private _isim:string;
    get isim():string{
        return this._isim
    }
    set isim(ad:string){
        this.isim=ad;
    }
}
let person=new Person();
let resultname=person.isim="ali can"
console.log(resultname);