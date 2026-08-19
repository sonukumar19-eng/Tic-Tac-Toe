let boxes = document.querySelectorAll('.cell');
let resetButton = document.querySelector('#res');
let newGameButton = document.querySelector('#new');
let msg = document.querySelector('#msg');
let msgcontainer = document.querySelector('.msg-container');

let turn0 = true;

const winner = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];


boxes.forEach((cell) => {

    cell.addEventListener('click', () => {

        if(cell.innerText !== ""){
            return;
        }

        if(turn0){
            cell.innerText = "X";
            turn0 = false;
        }
        else{
            cell.innerText = "O";
            turn0 = true;
        }

        cell.disabled = true;

        checkWinner();

    });

});


// Disable boxes after win
const disableBoxes = () => {

    boxes.forEach((cell) => {
        cell.disabled = true;
    });

};


// Show winner
const showwinner = (player) => {

    msg.innerText = "Congratulations! You won " + player;

    msgcontainer.classList.remove('hide');

};



// Check winner
const checkWinner = () => {

    for(let pattern of winner){

        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;


        if(pos1val !== "" && pos2val !== "" && pos3val !== ""){


            if(pos1val === pos2val && pos2val === pos3val){

                console.log("winner", pos1val);

                showwinner(pos1val);

                disableBoxes();

                return;
            }

        }

    }

};



// Reset game
const resetGame = () => {

    boxes.forEach((cell) => {

        cell.innerText = "";
        cell.disabled = false;

    });


    msgcontainer.classList.add('hide');

    turn0 = true;

};



resetButton.addEventListener('click', resetGame);

newGameButton.addEventListener('click', resetGame);
