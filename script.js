let gamecontainer = document.getElementById('game-container');
let reset = document.getElementById('reset');
let hash= {};
let turn = true;
let filled = 0;
gamecontainer.addEventListener('click',(e)=>{
          let cell = e.target.dataset.index;
          
          if(turn == true && !hash[cell]){
          	      hash[cell] = 'X';
          	      e.target.classList.add('cellWith-X');
          	     
          	    
          	    


          }
          else if(turn== false && !hash[cell] ){
                  hash[cell] = 'O';
                  e.target.classList.add('cellWith-Y');
          	     
          	      
          	     
          }

          filled++;
          turn = !turn;
          let result = checkWin();
          console.log(result);
              
              if(filled == 9 || result.includes("Win")){  
              	document.getElementById('result').textContent = result;
          }
          	 




});


function checkWin() {
  //row
  for (let i = 0; i < 3; i++) {
    let set = new Set();
    let player = "";
    for (let j = 0; j < 3; j++) {
      let key = `${i}-${j}`;
      set.add(hash[key]);
      player = hash[key];
    }

    if (set.size == 1 && player) {
      return `Player ${player} Win`;
    }
  }

  //col
  for (let j = 0; j < 3; j++) {
    let set = new Set();
    let player = "";
    for (let i = 0; i < 3; i++) {
      let key = `${i}-${j}`;
      set.add(hash[key]);
      player = hash[key];
    }

    if (set.size == 1 && player) {
      return `Player ${player} Win`;
    }
  }

  // diagonal
  let i = 0,
    j = 0;
  let set = new Set();
  let player = "";
  while (i < 3 && j < 3) {
    let key = `${i}-${j}`;
    set.add(hash[key]);
    player = hash[key];
    i++;
    j++;
  }

  if (set.size == 1 && player) {
    return `Player ${player} Win`;
  }

  // anti-daiagonal
  (i = 0), (j = 2);
  set.clear();
  while (i < 3 && j >= 0) {
    let key = `${i}-${j}`;
    set.add(hash[key]);
    player = hash[key];
    i++;
    j--;
  }

  if (set.size == 1 && player) {
    return `Player ${player} Win`;
  }

  return "Match draw";
}



reset.addEventListener("click", function (e) {
  const cells = document.querySelectorAll(".cell");

  cells.forEach((val) => {
    if (val.classList.contains("cellWith-X")) {
      val.classList.remove("cellWith-X");
    } else {
      val.classList.remove("cellWith-Y");
    }
  });

  hash = {};
  filled = 0;
  chance = true;
  document.getElementById("result").textContent = "";
  gameContainer.style.pointerEvents = "auto";
});