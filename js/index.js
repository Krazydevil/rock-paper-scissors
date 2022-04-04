let showresult = function (){
    // document.querySelector('.btn').style.visibility = 'visible';    
    let player1 = this.alt;
    document.querySelector('.header-3').innerHTML=player1;
    this.style.transform='scale(1.3)';
    computer();
    
    if(player1 == player2)
    {
        document.querySelector('.btn').innerHTML='DRAW';
        document.querySelector('.btn').style.background = 'orange';
        document.querySelector('.btn').style.visibility = 'visible';
    }
    else if(player1 == 'rock' && (player2=='scissors' || player2=='lizard')){
    
        document.querySelector('.btn').innerHTML='YOU WIN';
        document.querySelector('.btn').style.background = 'green';
        document.querySelector('.btn').style.visibility = 'visible';
    
    }

    else if(player1 == 'paper' && (player2=='rock' || player2=='spock')){
    
        document.querySelector('.btn').innerHTML='YOU WIN';
        document.querySelector('.btn').style.background = 'green';
        document.querySelector('.btn').style.visibility = 'visible';
    
    }
    else if(player1 == 'scissors' && (player2=='paper' || player2=='lizard')){
    
        document.querySelector('.btn').innerHTML='YOU WIN';
        document.querySelector('.btn').style.background = 'green';
        document.querySelector('.btn').style.visibility = 'visible';
    
    }
    else if(player1 == 'lizard' && (player2=='paper' || player2=='spock')){
    
        document.querySelector('.btn').innerHTML='YOU WIN';
        document.querySelector('.btn').style.background = 'green';
        document.querySelector('.btn').style.visibility = 'visible';
    
    }
    else if(player1 == 'spock' && (player2=='rock' || player2=='scissors')){
    
        document.querySelector('.btn').innerHTML='YOU WIN';
        document.querySelector('.btn').style.background = 'green';
        document.querySelector('.btn').style.visibility = 'visible';
    
    }
    else{
        document.querySelector('.btn').innerHTML='YOU LOSE';
        document.querySelector('.btn').style.background = 'RED';
        document.querySelector('.btn').style.visibility = 'visible';
    }
    document.querySelector('.cover').style.display = 'block';
}  

let allimgs = document.querySelectorAll('.pic');
for( let x of allimgs){
x.addEventListener('click',showresult)  
}


let num = Math.trunc(Math.random()*5);
let arr= ['rock', 'paper', 'scissors', 'lizard', 'spock'];
let pcplay = document.querySelectorAll('.pic-1')
let player2;

function computer(){
    
    player2 = arr[num];
    document.querySelector('.header-2').innerHTML=player2;
    for( let y of pcplay){
        if(player2 == y.alt)
        {
            y.style.transform='scale(1.3)';
        }    
    }
}