// var btn_plus=document.querySelectorAll('plus')
// console.log(btn_plus)

// for (let i = 0; i< btn_plus.lengt; i++) {
//     btn_plus[i].addEventListener('click',inc);

    
// }

// function inc(e){

//     var cible=e.target;
//     console.log(cible);
//     var div=cible.ParentElement;
//     console.log(div);
//     var count=Number (div.querySelector('p').
//     innerHTML);
//     console.log(count);
//     count++;
//     div.querySelector('p').innerHTML=count;
    
   
// }

// function inc(e){

//     var cible=e.target;
//     console.log(cible);
//     var div=cible.ParentElement;
//     console.log(div);
//     var count=Number (div.querySelector('p').
//     innerHTML);
//     console.log(count);
//     count--;
//     div.querySelector('p').innerHTML=count;
    
   
// }

var plus = document.querySelectorAll('.plus');
console.log(plus);

for (let i = 0; i < plus.length; i++) {
    plus[i].addEventListener('click', inc);
}

function inc (e) {
    var btn = e.target;
    console.log(btn);
    var div = btn.parentElement;
    console.log(div);
    var count = Number(div.querySelector('p').innerHTML);
    console.log(count);
    count++;
    div.querySelector('p').innerHTML = count;
    var tr=div.parentElement.parentElement
    console.log(tr)
    var up=Number(tr.querySelector('.unitPrice').innerHTML);
    var price=count*up
    tr.querySelector('.price').innerHTML=price

    somme()

}


var minus = document.querySelectorAll('.minus');
console.log(minus);

for (let i = 0; i < minus.length; i++) {
   minus[i].addEventListener('click', deinc);
}

function deinc (e) {
    var btn = e.target;
    console.log(btn);
    var div = btn.parentElement;
    console.log(div);
    var count = Number(div.querySelector('p').innerHTML);
    if (count>0) {
        console.log(count);
    count--;
    div.querySelector('p').innerHTML = count;

    var tr=div.parentElement.parentElement
    console.log(tr)
    var up=Number(tr.querySelector('.unitPrice').innerHTML);
    var price=count*up
    tr.querySelector('.price').innerHTML=price
    somme()g
    }
    

}

var prices=document.querySelectorAll('.price')
function somme(){
    var tot=0
    for (let i = 0; i < prices.length; i++) {
       tot+=Number (prices[i].innerHTML)
       document.getElementById('total').innerHTML=tot;

        
    }

}













var likes=document.querySelectorAll('.like');
for (let i = 0; i < likes.length; i++) {
   likes[i].addEventListener('click',lke)

    
}
function lke(e){
    var cible=e.target
    if(cible.style.color!='red'){
        cible.style.color='red'

    }else{
        cible.style.color='#424242';
    }
}

var del=document.querySelectorAll('.delete')
for (let i = 0; i < del.length; i++) {
 del[i].addEventListener('click',dell);

}
function dell(e){
    var cible=e.target
    var tr=cible.parentElement.parentElement.parentElement.parentElement
    console.log(tr);
    tr.querySelector('.price').innerHTML=0
    somme();
    tr.remove()
}