function lasohoanhao(n){
    if(n<=1){
        return false;
    }
    let tonguoc=1;
    for(let i=2;i<=Math.sqrt(n);i++){
        if(n%i===0){
            tonguoc +=1;
            if( i!== n/i){
                tonguoc+= n/i;
            }
        }
    }
    return tonguoc ===n;
}
function kiemtrasohoanhao(){
    let number=parseInt(document.getElementById('numberInput').value);
    if (isNaN(number)||number<=0){
        document.getElementById('result').innerText='vui long nhap so nguyen duong';
        return;
    }
    let ketqua=lasohoanhao(number);
    if(ketqua){
        document.getElementById('result').innerText =number+ 'la so hoan hao'

    }
    else{
        document.getElementById('result').innerText=number+ 'khong la so hoan hao';

    }
}
