interface Product{
    name:string;
    surname:string;
    id:number;
}
function save(product:Product){
console.log(product.name + "kaydedildi");
    }
save({name:"ali can",surname:"yucel",id:1});

