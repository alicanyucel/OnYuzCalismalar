//optional ve default parametrelerin sonda olması gerekiyor
function total(x:number,y?:number):number{
    if(y)
    {
        return x+y
    }
    else
    return x;
}
total(3,4)
// default
function total2(x:number,y=4):number{
    return x+y;
}
total2(2); // 6 yazar
total2(4,5) //9 yazar