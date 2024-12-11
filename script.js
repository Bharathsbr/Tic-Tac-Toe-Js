const cells=document.querySelectorAll(".cell");
const stat=document.querySelector("#ps");
const restartbtn=document.querySelector("#bt");

var running=false;
var player='X';

const win=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

var options=["","","","","","","","",""];

inintializeGame();

function inintializeGame()
{
    cells.forEach(cells=>cells.addEventListener("click",cellClicked));
    restartbtn.addEventListener("click",restartGame);
    running=true;
    stat.textContent=`${player} 's turn`;
}
function cellClicked()
{
    const cellind=this.getAttribute("cellIndex");
    if(options[cellind]!="" && !running)
    {
        return;
    }
    updateCell(this,cellind);
    checkWinner();
}

function updateCell(cell,index)
{
    options[index]=player;
    cell.textContent=player;
    if(cell.textContent=="X")
    {
        cell.style.color="green";
    }
    else if(cell.textContent=="O")
        {
            cell.style.color="red";
        }
}

function changePlayer()
{
    player=(player=="X")?"O":"X";
    stat.textContent=`${player} 's turn`;
}

function checkWinner()
{
    var won=false;
    for(let i=0;i<win.length;i++)
    {
        var con=win[i];
        var  cellA=options[con[0]];
        var  cellB=options[con[1]];
        var  cellC=options[con[2]];

        if(cellA=="" || cellB=="" || cellC=="")
        {
            continue;
        }
        if(cellA==cellB && cellB==cellC)
        {
            won=true;
            break;
        }
    }
    if(won)
    {
        stat.textContent=`${player} wins!`;
        running=false;
    }
    else if(!options.includes(""))
    {
        stat.textContent="Draw!";
        running=false;
    }
    else{
        changePlayer();
    }
}

function restartGame()
{
    player="X";
    running=true;
    options=["","","","","","","","",""];
    stat.textContent=`${player} 's turn`;
    cells.forEach(cell=>cell.textContent="");
    cells.forEach(cell=>cell.style.color="black");


}