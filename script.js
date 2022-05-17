let whiteElem = `<div class = "white"></div>`
let blackElem = `<div class = "black"></div>`
let board;
let line;
let finishedLine;


function newLine(black , white) {
    let i;
    line = black + white
    for (i = 0 ; i < 3 ; i++) {
        line += black + white
    } 
    finishedLine = document.createElement('div')
    finishedLine.innerHTML = line
    console.log(finishedLine)
    return finishedLine
}


function newBoard(){
    board = document.getElementById('div')
    for (let i = 0 ; i < 8 ; i++){
        if (i%2 == 0){
            console.log(true)
            board.appendChild(newLine(blackElem, whiteElem))
        }
        else{
            console.log(false)
            board.appendChild(newLine(whiteElem , blackElem))
        }
    }
}
newBoard()