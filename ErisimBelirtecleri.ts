class Personeller{
  public  name:string
  private soyad:string
  protected yas:number
}
class Musteriler extends Personeller{
    yas=30;
}
let musteriler=new Musteriler();
musteriler.name="ali can";
console.log(musteriler.yas);
