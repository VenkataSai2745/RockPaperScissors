let txt = document.querySelector(".text");
let us = document.querySelector("#user-score");
let cs = document.querySelector("#com-score");
let reset=document.querySelector("button");

let userScore = 0;
let comScore = 0;


const items = document.querySelectorAll(".option");
const drawGame = () => {
    txt.innerText = "Game was Draw. Play again.";
};

reset.addEventListener("click", ()=>{
    userScore = 0;
    comScore = 0;
    us.innerText = userScore;
    cs.innerText = comScore;
    txt.innerText = "Game reset. Start again.";
});


const showWinner = (userWin, ids, computer) => {
    if (userWin) {
        userScore++;
        us.innerText = userScore;
        txt.innerText = `You won \n${ids} beats ${computer}`;

    }
    else {
        comScore++;
        cs.innerText = comScore;
        txt.innerText = `Computer won \n${computer} beats ${ids}`
    }
}

const comChoice = () => {

    const comOptions = ["rock", "paper", "scissor"];
    let idx = Math.floor(Math.random() * 3);
    return comOptions[idx];

};

const game = (ids) => {
    console.log(`yours is ${ids}`);
    const computer = comChoice();
    console.log(`comp is ${computer}`);

    if (ids === computer) {
        console.log("game is draw");
        txt.innerText = "The game is Draw";
    } else {
        userWin = (ids === "rock" && computer === "scissor") ||
            (ids === "paper" && computer === "rock") ||
            (ids === "scissor" && computer === "paper");
        showWinner(userWin, ids, computer);
    }
};





items.forEach((item) => {
    console.log(item);
    item.addEventListener("click", () => {
        const ids = item.getAttribute("id");
        game(ids);
    })
});