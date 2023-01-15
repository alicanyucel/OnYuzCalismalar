var kullanicilar=[{email:"yucelalican@gmail.com",sifre:"2344"},
{email:"rifat@gmail.com",sifre:"3233"}
]
var tivitler=[{email:"yucelalican@gmail.com",sifre:"2344"},{email:"rifat@gmail.com",sifre:"3233"}]
var email=prompt("email");
var sifre=prompt("sifre");
function giris()
{

    if((email==kullanicilar[0].email && sifre==kullanicilar[0].sifre ||
        email==kullanicilar[1].email && sifre==kullanicilar[1].sifre
        ))
        {
            console.log(tivitler)
        }
        else
        {
            console.log("hatali giris");
        }
}
giris(email,sifre)