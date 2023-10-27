console.log("welcome to tictactoe");

let backgroundmusic = new Audio("back.mp3");
let turnmusic = new Audio("change.mp3");
let winning = new Audio("winner.mp3");

let turn = "X";
let gameover = false;
let moves = 0;
// function to change the turn
const changeTurn = ()=>{
    
    return turn === "X"? "0":"X";
}


// function to check for win

const checkwin= ()=>{
    let boxtexts = document.getElementsByClassName('boxtext')

    let wins = [
        [0,1,2,5,5,0],
        [3,4,5,5,15,0],
        [6,7,8,5,25,0],
        [0,3,6,-5,15,90],
        [1,4,7,5,15,90],
        [2,5,8,15,15,90],
        [0,4,8,5,15,45],
        [2,4,6,5,15,135],
    ]
    wins.forEach(e=>{
        if((boxtexts[e[0]].innerText == boxtexts[e[1]].innerText) && (boxtexts[e[2]].innerText == boxtexts[e[1]].innerText) && (boxtexts[e[0]].innerText !== '' )){
            document.querySelector('.info').innerText = boxtexts[e[0]].innerText + " Won!!"
            gameover=true;
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "300px";
            document.querySelector(".line").style.width = "20vw";
            document.querySelector(".line").style.transform = `translate(${e[3]}vw,${e[4]}vw) rotate(${e[5]}deg)`
            backgroundmusic.pause();
            winning.play();
        }
    })
    
    if (moves === 9 && !gameover) {
        document.querySelector('.info').innerText = "It's a Tie! Try Again.";
        gameover = true;
      }
}

// game logic


backgroundmusic.play();

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', ()=>{
        if(boxtext.innerText === ''){
            boxtext.innerText = turn;
            turn = changeTurn();
            turnmusic.playbackRate=2;
            turnmusic.play();
            moves++;
            checkwin();
            
            if(!gameover)
            {
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;

            }
        }
    })
})


// reset button

reset.addEventListener('click',()=>{
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element =>{
        element.innerText = ""
    });
    
    turn="X";
    gameover=false;
    moves=0;
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px";
    document.querySelector(".line").style.width = "0vw";
    backgroundmusic.play();
})

