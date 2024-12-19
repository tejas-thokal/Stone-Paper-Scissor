let user_score=0;
let computer_score=0;

//access nodes
let choices=document.querySelectorAll(".choice");
let msg=document.querySelector(".msg");
let userscore=document.querySelector("#user_score");
let compscore=document.querySelector("#computer_score");
let reset=document.querySelector(".reset");


//reset score
reset.addEventListener(("click"),()=>{
    userscore.innerText="0";
    user_score=0;
    compscore.innerText="0";
    computer_score=0;
});

//draw game
const drawgame=()=>{
    msg.innerText="game draw!";
}

//computer choice
const computerChoice=()=>{
    let options=["stone","paper","scissor"];
    const random=Math.floor(Math.random() * 3);
    return options[random];
}


//display winner
const showwinner=(userwin)=>{
    if(userwin){
        user_score++;
        userscore.innerText=user_score;
    }else{
        computer_score++;
        compscore.innerText=computer_score;
    }
}


//playgame
const playgame=(userchoice)=>{
    console.log("userchoice="+ userchoice);
    const compchoice = computerChoice();
    console.log("computer choice=" + compchoice);

    if(userchoice===compchoice){
        drawgame();
    }else{
        let userwin=true;
        if(userchoice==="stone"){
            userwin=compchoice==="paper"?false:true;
            if(userwin===true){
                msg.innerText="Stone Beats Scissor";
            }else{
                msg.innerText="Paper Beats Stone";
            }
        }else if(userchoice==="paper"){
            userwin=compchoice==="scissor"?false:true;
            if(userwin==true){
                msg.innerText="Paper Beats Stone";
            }else{
                msg.innerText="Scissor Beats Paper";
            }
        }else{
            userwin=compchoice==="stone"?false:true;
            if(userwin==true){
                msg.innerText="Scissor Beats Paper";
            }else{
                msg.innerText="Stone Beats Scissor";
            }
        }
        showwinner(userwin);
    }
}

//access each choice
choices.forEach((choice)=>{
    choice.addEventListener(("click"),()=>{
        let userchoice=choice.getAttribute("id");
        playgame(userchoice);
    });
});