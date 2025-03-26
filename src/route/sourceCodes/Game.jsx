import React from 'react'
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import GameVid from '../../assets/Game2048Video.mp4'

const Game = () => {

  const Gamejs = `
let board ;
let score = 0 ;
let row = 4;
let column = 4;


window.onload = ()=> {
setGame()
}

function setGame(){
board = [
[0,0,0,0],
[0,0,0,0],
[0,0,0,0],
[0,0,0,0],
]

for(let r = 0;  r < row ; r++){
  for(let c = 0 ; c < column ; c++){
    let div = document.createElement("div")
    div.style.width = '100px'
    div.style.height = '100px'
    div.style.display = 'flex'
    div.style.fontSize = '30px'
    div.style.alignItems = 'center'
    div.style.justifyContent = 'center'
    div.id = r.toString() + '-' + c.toString()
    let num = board[r][c]
    updateTile(div , num)
    document.getElementById('Board').append(div)
  }
}


setTwo(); setTwo()
}
function updateTile(tile , num){
 tile.innerText = ''
 tile.classList.value = ''
 tile.classList.add('tile')

 if(num > 0){
  tile.innerText = num
  if(num <= 4096){
    tile.classList.add('tile-'+ num.toString())
  }
  else{
    tile.classList.add('tile-8192')
  }
 } else {
  tile.classList.add("tile-0"); 
}
}

function hasEmptyTile(){
for (let r = 0; r< row ; r++ ){
  for(let c = 0 ; c < column ; c++){
    if(board[r][c] == 0){
      return true;
    }
  }
}
return false
}

function setTwo(){
if(!hasEmptyTile()){
  return;
}



let found = false;
while(!found){
  let r = Math.floor(Math.random() * row);
  let c = Math.floor(Math.random() * column);
 
  if(board[r][c] == 0) {
    board[r][c] = 2
    let tile = document.getElementById(r.toString() + '-' + c.toString())
    tile.innerText = '2';
    tile.classList.add('tile-2')
    found = true
  } 
} }

document.addEventListener('keyup',(e)=>{
if(e.code == 'ArrowLeft'){
  slideLeft();
  setTwo()
}else if(e.code == 'ArrowRight'){
  slideRight();
  setTwo()
}else if (e.code == 'ArrowUp'){
  slideUp()
  setTwo()
}else if (e.code == 'ArrowDown'){
  slideDown()
  setTwo()
}
document.getElementById('score').innerHTML = score
})
function slideLeft(){
for(let r = 0 ; r < row ; r++){
  let row = board[r]
  row = slide(row);
  board[r] = row

  for(let c = 0 ; c < column ; c++){
    let tile = document.getElementById(r.toString()+'-'+c.toString());
    let num = board[r][c];
    updateTile(tile,num)
  }
}
}
function slideRight(){
for(let r = 0 ; r < row ; r++){
  let row = board[r]
  row.reverse()
  row = slide(row);
  row.reverse()

  board[r] = row

  for(let c = 0 ; c < column ; c++){
    let tile = document.getElementById(r.toString()+'-'+c.toString());
    let num = board[r][c];
    updateTile(tile,num)
  }
}
}
function slideUp() {
for (let c = 0; c < column; c++) {
  let row = [board[0][c], board[1][c], board[2][c], board[3][c]];
  row = slide(row);
  for (let r = 0; r < row.length; r++) {
    board[r][c] = row[r];
  }
  for (let r = 0; r < row.length; r++) {
    let tile = document.getElementById(r.toString() + '-' + c.toString());
    let num = board[r][c];
    updateTile(tile, num);
  }
}
}
function slideDown() {
for (let c = 0; c < column; c++) {
  let row = [board[0][c], board[1][c], board[2][c], board[3][c]];
  row.reverse()
  row = slide(row);
  row.reverse()
  for (let r = 0; r < row.length; r++) {
    board[r][c] = row[r];
  }
  for (let r = 0; r < row.length; r++) {
    let tile = document.getElementById(r.toString() + '-' + c.toString());
    let num = board[r][c];
    updateTile(tile, num);
  }
}
}




function slide(row) {
row = filterZero(row)


for(let i = 0 ; i < row.length-1 ; i++){
  if(row[i] == row[i+1]){
    row[i] *=2;
    row[i+1] = 0;
    score += row[i];
  }
}

row = filterZero(row)

while (row.length < column){
  row.push(0)
}
return row;

}
function filterZero(row) {
return row.filter(num => num != 0)
}
`

const Gamehtml = `
<!DOCTYPE html>
<html lang="en">
<head>
<link rel="stylesheet" href="Game.css">
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Game2048</title>
<script src="https://unpkg.com/@tailwindcss/browser@4"></script>
</head>
<body>
<div class='w-full h-screen flex-col fixed top-0 bg-zinc-800 flex items-center justify-center'>
 <div class="text-4xl text-white">Score : <span id="score"></span> </div>
 <div id='Board' class="w-[80vh] !p-3 h-[80vh] flex justify-center flex-wrap gap-3 bg-zinc-700">
   
 </div>
</div>

<script src="Game.js"></script>
</body>
</html>
`

  return (
    <div className='w-full relative z-10  lg:flex hidden flex-col text-white items-center'>        
    <div className='w-full flex items-center justify-center !pt-16 '>
      <div className='w-full flex items-center flex-col gap-5 '>
        <video autoPlay muted loop className='w-[90%] object-center h-[55vh] lg:h-[75vh] ' src={GameVid}></video>
        <h1 className='text-3xl font-bold'>Game2048</h1>
        <a
          href='https://wqsrzaaaa.github.io/Game2048/'              
        className='bg-green-400 !p-3 view-proj !pl-10 rounded-[10px] cursor-pointer !pr-10 text-zinc-800'>Preview</a>
      </div>
    </div>
   
    <div className='w-full !pt-9 flex flex-wrap justify-center !pb-9 gap-5'>
    <div className='md:w-[600px]  w-[95%]  flex flex-col items-center gap-5'>
        <p>HTML</p>
        <SyntaxHighlighter
          className ='w-full h-[80vh] overflow-y-scroll'
            language="javascript"
            style={oneDark}
            wrapLongLines={true} 
            showLineNumbers 
          >
            {Gamehtml}
          </SyntaxHighlighter>
    </div>
    
     <div className='md:w-[600px] w-[95%]  flex flex-col items-center gap-5'>
     <p>Js</p>
        <SyntaxHighlighter
          className ='w-full h-[80vh] overflow-y-scroll'
          language='javascript'
          style={oneDark}
          wrapLongLines={true}
          showLineNumbers
          >
              {Gamejs}              
        </SyntaxHighlighter>
     </div>
    </div>
 </div>
  )
}

export default Game


