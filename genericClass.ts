class GenericClass<T>{
    degisken:T
    fonksiyon(parametre:T):T{
        return parametre
    }
}
let gclass=new GenericClass<string>()
gclass.fonksiyon("ankara")
gclass.degisken="1";