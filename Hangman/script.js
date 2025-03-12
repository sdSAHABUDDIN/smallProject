// //INitial referances
// const letterContainer=document.getElementById("letter-container");
// const optionsContainer=document.getElementById("options-container");
// const userInputSection=document.getElementById("user-input-section");
// const newGameContainer=document.getElementById("new-game-container");
// const newGmaeButton=document.getElementById("new-game-button");
// const canvas=document.getElementById("canvas");
// const resultText=document.getElementById("result-text");

// //Options values for bouttons
// let options={
//   fruits:[
//     "Apple",
//     "Blueberry",
//     "Mandarin",
//     "Pineapple",
//     "Pomegranate",
//     "Watermelon",
//   ],
//   animals:["Hedgehog","Rhinoceros","Squirrel","Panther","Walrus","Zebra"],
//   countries:["India","Hungary","Kyrgyzstan","Switzerland","Zimbabwe","Dominica"],
// };

// //count 
// let winCount=0;
// let count=0;
// let chosenWord="";

// //Display option buttons
// const DisplayOptions=()=>{
//   optionsContainer.innerHTML+=`<h3>Please Select An option</h3>`;
//   let buttonCon=document.createElement("div");
//   for (let value in options){
//     buttonCon.innerHTML+=`<button class="options" onclick="generateWord ('${value}')">${value}</button>`;

//   }
//   optionsContainer.appendChild(buttonCon);
// };

// //Block all the Buttons
// const blocker=()=>{
//   let optionsButton=document.querySelectorAll(".options");
//   let letterButtons=document.querySelectorAll(".letters");
//   //disable all options
//   optionsButton.forEach((button)=>{
//     button.disabled=true;
//   });
//   //disable all letters
//   letterButtons.forEach((button)=>{
//     button.disabled=true;
//   });
//   newGameContainer.classList.remove("hide");
// }
// //word generator
// const generateWord=(optionValue)=>{
//   let optionsButton=document.querySelectorAll(".options");
//   //If optionValue matches the button innerText then highlight the button
//   optionsButton.forEach((button)=>{
//     if(button.innerHTML.toLowerCase()===optionValue){
//       button.classList.add("active");
//     }
//     button.disabled=true;
//   });
//   //initially hide letters,clear previous word
//   letterContainer.classList.remove("hide");
//   userInputSection.innerText="";

//   let optionArray=options[optionValue];
//   //choose random word
//   chosenWord=optionArray[Math.floor(Math.random()*optionArray.length)];
//   chosenWord=chosenWord.toUpperCase();
//   console.log(chosenWord);

//   //replace every letter with span containing dash
//   let displayItem = chosenWord.replace(/[^ ]/g, '<span class="dashes">_</span>');

//   //display each element as span
//   userInputSection.innerHTML=displayItem;
// };
// //intial fuction (Called when page loads/user presses new game)
// const initializer=()=>{
//   winCount=0;
//   count=0;
//   //Initially erase all content and hide letteres and new game button
//   userInputSection.innerHTML="";
//   optionsContainer.innerHTML="";
//   letterContainer.classList.add("hide");
//   newGameContainer.classList.add("hide");
//   letterContainer.innerHTML="";
//   //for createing letter buttons
//   for(let i=65;i<91;i++){
//     let button=document.createElement("button");
//     button.classList.add("letters");
//     //Number to ASCII[A-Z]
//     button.innerHTML=String.fromCharCode(i);
//     //character button click
//     button.addEventListener("click",()=>{
//       let charArray=chosenWord.split("");
//       let dashes=document.getElementsByClassName("dashes");
//       //if array contains clicked value replace the matched dash with letter else dram on canvas
//       if(charArray.includes(button.innerText)){
//         charArray.forEach((char,index)=>{
//           //if character in array is same clicked button
//           if(char==button.innerText){
//             //replaece dash with letter
//             dashes[index].innerHTML=char;
//             //increment counter
//             winCount+=1;
//             //if winconunt equals word length 
//             if(winCount==charArray.length){
//               resultText.innerHTML=`<h2 class='win-msg'>You win!!</h2>
//               <p>The word was<span>${chosenWord}</span></p>`;
//               //block all buttons
//               blocker();
//             }
//           }
//         })
//       }else{
//         //lose count
//         count+=1;
//         //for drawing man
//         drawMan(count);
//         //count ==b because head,body,left.arm,right,arm,left leg,rightleg
//         if(count==6){
//           resultText.innerHTML=`<h2 class='lose-msg'>You lose!!</h2><p>The word was<span>${chosenWord}</span></p>`;
//           blocker();
//         }
//       }
//       //disable clicked button
//       button.disabled=true;
//     })
//     letterContainer.append(button);
//   }
//   DisplayOptions();
//   //call to canvas Creator (for clearing previous cansvas and creating initial canvas)
//   let {initialDrawing}=canvasCreator();
//   //initial Drawing would draw the frame
//   initialDrawing();
// };
// //canvas
// const canvasCreator=()=>{
//   let context=canvas.getContext('2d');
//   context.beginPath();
//   context.strokeStyle="#000";
//   context.lineWidth=2;

//   //For drawing lines
//   const drawLine =(formX,formY,toX,toY)=>{
//     context.moveTo(formX,formY);
//     context.lineTo(toX,toY);
//     context.storke();
//   };
//   const head=()=>{
//     context.beginPath();
//     context.arc(70, 30, 10, 0, Math.PI * 2,true);
//     context.storke();
//   };
//   const body=()=>{
//     drawLine(70, 40, 70, 80);
//   };
//   const leftArm=()=>{
//     drawLine(70, 50, 50, 70);
//   }
//   const rightArm=()=>{
//     drawLine(70, 50, 90, 70);
//   };
//   const leftLeg=()=>{
//     drawLine(70, 80, 50, 110);
//   };
//   const rightLeg=()=>{
//     drawLine(70, 80, 90, 110);
//   };
//   //initial frame
//   const initialDrawing=()=>{
//   //clear canvas
//   context.clearRect(0, 0, context.canvas.width, context.canvas.height);
//   //bottom line
//   drawLine(10, 130, 130, 130);
//   //left line
//   drawLine(10, 10, 10, 131);
//   //top line
//   drawLine(10, 10, 70, 10);
//   //small top line
//   drawLine(70, 10, 70, 20);
//   };
//   return {initialDrawing, head, body, leftArm,rightArm, leftLeg, rightLeg};
// };

// //draw the man
// const drawMan=(count)=>{
//   let {head, body,leftArm,rightArm,leftLeg,rightLeg}=canvasCreator();
//   switch(count){
//     case 1:
//       head();
//       break;
//     case 2:
//       body();
//       break;
//     case 3:
//       leftArm();
//       break;
//     case 4:
//       rightArm();
//       break;
//     case 5:
//       leftLeg();
//       break;
//     case 6:
//       rightLeg();
//       break;
//     default:
//       break;
//   }
// }

// //new game 
// newGmaeButton.addEventListener("click",initializer);
// window.onload=initializer;

// Initial References
const letterContainer = document.getElementById("letter-container");
const optionsContainer = document.getElementById("options-container");
const userInputSection = document.getElementById("user-input-section");
const newGameContainer = document.getElementById("new-game-container");
const newGameButton = document.getElementById("new-game-button");
const canvas = document.getElementById("canvas");
const resultText = document.getElementById("result-text");

// Options values for buttons
let options = {
  fruits: ["Apple", "Blueberry", "Mandarin", "Pineapple", "Pomegranate", "Watermelon"],
  animals: ["Hedgehog", "Rhinoceros", "Squirrel", "Panther", "Walrus", "Zebra"],
  countries: ["India", "Hungary", "Kyrgyzstan", "Switzerland", "Zimbabwe", "Dominica"],
};

// Game variables
let winCount = 0;
let count = 0;
let chosenWord = "";

// Display category options
const displayOptions = () => {
  optionsContainer.innerHTML = `<h3>Please Select a Category</h3>`;
  let buttonCon = document.createElement("div");

  for (let category in options) {
    buttonCon.innerHTML += `<button class="options" onclick="generateWord('${category}')">${category}</button>`;
  }
  optionsContainer.appendChild(buttonCon);
};

// Block all buttons (disable after game over)
const blocker = () => {
  document.querySelectorAll(".options, .letters").forEach(button => button.disabled = true);
  newGameContainer.classList.remove("hide");

  // Add Restart Button After Win/Loss
  let restartButton = document.createElement("button");
  restartButton.innerText = "Restart";
  restartButton.classList.add("restart-btn");
  restartButton.addEventListener("click", initializer); // Restart game when clicked
  resultText.appendChild(restartButton);
};

// Word Generator
const generateWord = (optionValue) => {
  // Disable selected category buttons
  document.querySelectorAll(".options").forEach(button => {
    if (button.innerText.toLowerCase() === optionValue) button.classList.add("active");
    button.disabled = true;
  });

  // Reset UI
  letterContainer.classList.remove("hide");
  userInputSection.innerHTML = "";
  let optionArray = options[optionValue];

  // Pick a random word
  chosenWord = optionArray[Math.floor(Math.random() * optionArray.length)].toUpperCase();
  console.log(`Chosen Word: ${chosenWord}`);

  // Replace letters with dashes
  let displayItem = chosenWord.replace(/[^ ]/g, `<span class="dashes">_</span>`);
  userInputSection.innerHTML = displayItem;
};

// Initialize game (runs on page load and new game button)
const initializer = () => {
  winCount = 0;
  count = 0;
  userInputSection.innerHTML = "";
  optionsContainer.innerHTML = "";
  letterContainer.classList.add("hide");
  newGameContainer.classList.add("hide");
  letterContainer.innerHTML = "";

  // Create letter buttons (A-Z)
  for (let i = 65; i < 91; i++) {
    let button = document.createElement("button");
    button.classList.add("letters");
    button.innerHTML = String.fromCharCode(i);

    // Letter button click event
    button.addEventListener("click", () => {
      let charArray = chosenWord.split("");
      let dashes = document.getElementsByClassName("dashes");

      if (charArray.includes(button.innerText)) {
        charArray.forEach((char, index) => {
          if (char === button.innerText) {
            dashes[index].innerHTML = char;
            winCount++;

            if (winCount === charArray.filter(c => c !== " ").length) {
              resultText.innerHTML = `<h2 class='win-msg'>You Win!!</h2><p>The word was <span>${chosenWord}</span></p>`;
              blocker();
            }
          }
        });
      } else {
        count++;
        drawMan(count);

        if (count === 6) {
          resultText.innerHTML = `<h2 class='lose-msg'>You Lose!!</h2><p>The word was <span>${chosenWord}</span></p>`;
          blocker();
        }
      }
      button.disabled = true;
    });

    letterContainer.append(button);
  }
  
  displayOptions();
  canvasCreator().initialDrawing(); // Reset canvas
};

// Canvas Drawing
const canvasCreator = () => {
  let context = canvas.getContext('2d');
  context.beginPath();
  context.strokeStyle = "#000";
  context.lineWidth = 2;

  // Draw a line
  const drawLine = (fromX, fromY, toX, toY) => {
    context.moveTo(fromX, fromY);
    context.lineTo(toX, toY);
    context.stroke();
  };

  // Body parts
  const head = () => {
    context.beginPath();
    context.arc(70, 30, 10, 0, Math.PI * 2, true);
    context.stroke();
  };
  const body = () => drawLine(70, 40, 70, 80);
  const leftArm = () => drawLine(70, 50, 50, 70);
  const rightArm = () => drawLine(70, 50, 90, 70);
  const leftLeg = () => drawLine(70, 80, 50, 110);
  const rightLeg = () => drawLine(70, 80, 90, 110);

  // Initial Hangman Stand
  const initialDrawing = () => {
    context.clearRect(0, 0, canvas.width, canvas.height);
    drawLine(10, 130, 130, 130); // Bottom
    drawLine(10, 10, 10, 131);   // Left
    drawLine(10, 10, 70, 10);    // Top
    drawLine(70, 10, 70, 20);    // Small Top
  };

  return { initialDrawing, head, body, leftArm, rightArm, leftLeg, rightLeg };
};

// Draw the man based on wrong attempts
const drawMan = (count) => {
  let { head, body, leftArm, rightArm, leftLeg, rightLeg } = canvasCreator();
  switch (count) {
    case 1: head(); break;
    case 2: body(); break;
    case 3: leftArm(); break;
    case 4: rightArm(); break;
    case 5: leftLeg(); break;
    case 6: rightLeg(); break;
  }
};

// Start a new game
newGameButton.addEventListener("click", initializer);
window.onload = initializer;
