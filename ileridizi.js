/*
Map fonksiyonu nedir?
Map fonksiyonu, geoid şeklindeki dünyanın,
 2 boyutlu olan kağıda aktarılması gibi dizinin farklı bir diziye haritalanmasını (projection) sağlar. 
*/
const dizi=[1,2,3,4,5,6,7,8,9,10]
const karedizi=[]
dizi.forEach(sayi=>{
    karedizi.push(sayi*sayi)

})
console.log(karedizi)
// map
const mapdizi=dizi.map(sayi=>sayi*3)
console.log(mapdizi)
const filtredizi=dizi.filter(sayi=>sayi>2)
console.log(filtredizi);
// reduce
/*Reduce fonksiyonu, verilen bir koşula göre diziden tek bir eleman almak için kullanılır. 
En yüksek değerli elemanı alma, elemanların toplamını bulma gibi işlemlerde kullanılabilir.
*/
const toplam=dizi.reduce((acc,sayi)=>{
    return acc+sayi
})
console.log(toplam);