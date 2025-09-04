let gameSeq = [];
let userSeq = [];
let color = ["red","green","yellow","blue"];

let heading = document.querySelector("h2");

let started = false;
let level = 0;

document.addEventListener("keypress",function(){
    if(started === false){  /*at first step*/
        console.log("game started");
        started = true;
    }
    levelUp();
})

function levelUp(){
    userSeq = []; 
    level++;
    heading.innerText = `level ${level}`;

    let randomInx = Math.floor(Math.random()*4);
    let randomClr = color[randomInx];
    let randomBtn = document.querySelector(`.${randomClr}`);
    gameSeq.push(randomClr);
    console.log(gameSeq);
    flashUp(randomBtn);
};

function flashUp(ranbtn){
    ranbtn.classList.add("bgcolor");
    setTimeout(function(){
        ranbtn.classList.remove("bgcolor");
    },250);
}; 
function userflashUp(ranbtn){
    ranbtn.classList.add("userflash");
    setTimeout(function(){
        ranbtn.classList.remove("userflash");
    },250);
}; 


let btns = document.querySelectorAll(".inner");
for(btn of btns){
    btn.addEventListener("click",btnpress);
}

function checkAns(idx){
    if(userSeq[idx]===gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp,1000); 
            console.log("Current sequence matched! Moving to next level.");
        } else {
            console.log("Correct so far, waiting for more input."); 
        }
    }
    else{
        heading.innerHTML = `Game Over! Your score was <b>${level}</b> <br> Press any key to start`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        },150);
        reset();
    }
}
function btnpress(){
    let btn = this;
    userflashUp(btn);
    let usercolor = btn.getAttribute("id");
    userSeq.push(usercolor);

    checkAns(userSeq.length-1);
}

function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
};