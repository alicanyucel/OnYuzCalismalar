var result=document.getElementById("ali").addEventListener("click",rengiDegistir)
function rengiDegistir()
{
    document.getElementById("div1").style.color="red";
    var isimElemanlari=document.getElementsByName("musteriAdi");
    isimElemanlari[0].value="Deneme";

}