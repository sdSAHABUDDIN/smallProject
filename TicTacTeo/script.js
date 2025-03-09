let btnRef=document.querySelectorAll('.button-option');
let popupRef=document.querySelector('.popup');
let newGameBtn=document.getElementById('new-game');
let restartBtn=document.getElementById('message');
let msgRef=document.getElementById('message');

//winning Pattern Array
let winningPattern=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[0,4,8],[2,4,6],[1,4,7],[2,5,8]];

//Player 'X' plays first
let xTurn=true;
let count=0;
//Disable all button
const disableButton=()=>{
  btnRef.forEach((ele)=>(ele.disabled=true));
  //enable popup
  popupRef.classList.remove("hide");
}

//enable all buttons (for restart and new game)
const enableButtons=()=>{
  btnRef.forEach((ele)=>{
    ele.innerHTML="";
    ele.disabled=false;

  });
  //disable popup
  popupRef.classList.add('hide')
}
//new game
newGameBtn.addEventListener('click',()=>{
  count=0;
  enableButtons();
})
//restart btn
restartBtn.addEventListener('click',()=>{
  count=0;
  enableButtons();
})
//winner check
const winnerCheck=(letter)=>{
  disableButton();
  if(letter=='X'){
    msgRef.innerHTML="&#x1f389; <br> 'X' wins"
  }
  else{
    msgRef.innerHTML="&#x1F389; <br> 'O' wins"
  }
};
//function for draw
const drawFunction=()=>{
  disableButton();
  msgRef.innerHTML="&#x1F60E; <br> It's Draw"
}
//wining check
const winCheck = () => {
  for (let ele of winningPattern) {
    let index1 = btnRef[ele[0]].innerText;
    let index2 = btnRef[ele[1]].innerText;
    let index3 = btnRef[ele[2]].innerText;
    
    if (index1 !== "" && index2 !== "" && index3 !== "") {
      if (index1 === index2 && index2 === index3) {
        winnerCheck(index1);
        return; // Stop checking after finding a winner
      }
    }
  }
};
//display x/o on click
btnRef.forEach((btn)=>{
  btn.addEventListener("click",()=>{
    if(xTurn){
      xTurn=false;
      //Display x
      btn.innerHTML="X";
      btn.disabled=true;
    }else{
      xTurn=true;
      //Display o
      btn.innerHTML="O";
      btn.disabled=true;
    }
    //Increment count on each click
    count +=1;
    if(count===9){
      //It's a draw since there are a total of 9 boxed
      drawFunction();
    } 
    //Check for win on every click
    winCheck();
  })
})
window.onload=enableButtons;