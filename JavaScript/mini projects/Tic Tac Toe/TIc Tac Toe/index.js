const boxes = document.querySelectorAll(".box");  // iske endar 9 div hai like a array
const gameInfo = document.querySelector(".game-info");
const newGameBtn = document.querySelector(".btn");


let currentPlayer; //current player kon sa hai
let gameGrid; // iske upr game kheli jayegi, game ka current status kya hai 

//all the winnig possibilities on 3*3 grid, ye ek array hai jaise ki aap dekh sakete hai
const winningPositions = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

//let's create a function to initialise the game
function initGame() {
    currentPlayer = "X";
    gameGrid = ["","","","","","","","",""];
    //UI pr empty bhi karna padega boxes ko
    boxes.forEach((box, index) => {//index se hume pata chal raha hai ki konse box pe click hua hai
        box.innerText = "";
        boxes[index].style.pointerEvents = "all";
        //one more thing is missing, initialise box with css properties again
        box.classList = `box box${index+1}`;
    });
    newGameBtn.classList.remove("active");
    gameInfo.innerText = `Current Player - ${currentPlayer}`;
}

initGame();

function swapTurn() {
    if(currentPlayer === "X") {
        currentPlayer = "O";
    }
    else {
        currentPlayer = "X";
    }
    //UI Update
    gameInfo.innerText = `Current Player - ${currentPlayer}`;
}

function checkGameOver() {
    let answer = "";

    winningPositions.forEach((position) => {
        //all 3 boxes should be non-empty and exactly same in value
        if( (gameGrid[position[0]] !== "" || gameGrid[position[1]] !== "" || gameGrid[position[2]] !== "") 
            && (gameGrid[position[0]] === gameGrid[position[1]] ) && (gameGrid[position[1]] === gameGrid[position[2]])) {

                //check if winner is X
                if(gameGrid[position[0]] === "X") 
                    answer = "X";
                else {
                    answer = "O";
                } 
                    

                //disable pointer events
                boxes.forEach((box) => {
                    box.style.pointerEvents = "none";
                })

                //now we know X/O is a winner
                boxes[position[0]].classList.add("win");
                boxes[position[1]].classList.add("win");
                boxes[position[2]].classList.add("win");
            }
    });

    //it means we have a winner
    if(answer !== "" ) {
        gameInfo.innerText = `Winner Player - ${answer}`;
        newGameBtn.classList.add("active");
        return;
    }

    //We know, NO Winner Found, let's check whether there is tie
    let fillCount = 0;
    gameGrid.forEach((box) => {
        if(box !== "" )
            fillCount++;
    });

    //board is Filled, game is TIE
    if(fillCount === 9) {
        gameInfo.innerText = "Game Tied !";
        newGameBtn.classList.add("active");
    }

}

function handleClick(index) {//current user ke hisab se x ya o dale gaa ye function
    if(gameGrid[index] === "" )// gameGrid[index] rep a particular box in the  game
    {
        boxes[index].innerText = currentPlayer;//ui pe update karna
        gameGrid[index] = currentPlayer;// jo grid upr banaya hai usme update karta hai 
        boxes[index].style.pointerEvents = "none";// mouse pointer nahi bane gaa jinme x/o hai
        //swap karo turn ko
        swapTurn();
        //check koi jeet toh nahi gya
        checkGameOver();
    }
}

boxes.forEach((box, index) => {
    box.addEventListener("click", () => {
        handleClick(index);
    })
});

newGameBtn.addEventListener("click", initGame);