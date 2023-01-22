//c# taki paramslara benziyor dileiğimiz kadar değer atama yapabiliyoruz
function Davet(ilkdavetli:String,...digerleri:string[]):string
{
 return ilkdavetli + digerleri.join("")
}
Davet("alican","eser","ahmet")