class Musteri{
    ad:string;
    soyad:string;
    department:string;
    maasOde(){
        console.log("maaş ödendi");
    }
}
//kalıtım extends ile alıyoruz
class Personel extends Musteri{

}
let personel=new Personel();
personel.ad="ali can";
personel.soyad="yücel";
personel.maasOde();
personel.department="Yazılım Geliştirme";