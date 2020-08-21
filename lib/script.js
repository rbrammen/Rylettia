//white dice
var dieImage = document.getElementById("die");
var dieImage2 = document.getElementById("die2");
var dieImage3 = document.getElementById("die3");
var dieImage4 = document.getElementById("die4");
var dieImage5 = document.getElementById("die5");
var dieImage6 = document.getElementById("die6");
var dieImage7 = document.getElementById("die7");
var dieImage8 = document.getElementById("die8");

//black dice
var dieImage9 = document.getElementById("die9");
var dieImage10 = document.getElementById("die10");
var dieImage11 = document.getElementById("die11");
var dieImage12 = document.getElementById("die12");
var dieImage13 = document.getElementById("die13");
var dieImage14 = document.getElementById("die14");
var dieImage15 = document.getElementById("die15");
var dieImage16 = document.getElementById("die16");

//board tiles
var cellA1 = document.getElementById("cellA1");
var cellA2 = document.getElementById("cellA2");
var cellA3 = document.getElementById("cellA3");
var cellA4 = document.getElementById("cellA4");
var cellA5 = document.getElementById("cellA5");
var cellA6 = document.getElementById("cellA6");
var cellA7 = document.getElementById("cellA7");
var cellA8 = document.getElementById("cellA8");

var cellB1 = document.getElementById("cellB1");
var cellB2 = document.getElementById("cellB2");
var cellB3 = document.getElementById("cellB3");
var cellB4 = document.getElementById("cellB4");
var cellB5 = document.getElementById("cellB5");
var cellB6 = document.getElementById("cellB6");
var cellB7 = document.getElementById("cellB7");
var cellB8 = document.getElementById("cellB8");

var cellC1 = document.getElementById("cellC1");
var cellC2 = document.getElementById("cellC2");
var cellC3 = document.getElementById("cellC3");
var cellC4 = document.getElementById("cellC4");
var cellC5 = document.getElementById("cellC5");
var cellC6 = document.getElementById("cellC6");
var cellC7 = document.getElementById("cellC7");
var cellC8 = document.getElementById("cellC8");

var cellD1 = document.getElementById("cellD1");
var cellD2 = document.getElementById("cellD2");
var cellD3 = document.getElementById("cellD3");
var cellD4 = document.getElementById("cellD4");
var cellD5 = document.getElementById("cellD5");
var cellD6 = document.getElementById("cellD6");
var cellD7 = document.getElementById("cellD7");
var cellD8 = document.getElementById("cellD8");

var cellE1 = document.getElementById("cellE1");
var cellE2 = document.getElementById("cellE2");
var cellE3 = document.getElementById("cellE3");
var cellE4 = document.getElementById("cellE4");
var cellE5 = document.getElementById("cellE5");
var cellE6 = document.getElementById("cellE6");
var cellE7 = document.getElementById("cellE7");
var cellE8 = document.getElementById("cellE8");

var cellF1 = document.getElementById("cellF1");
var cellF2 = document.getElementById("cellF2");
var cellF3 = document.getElementById("cellF3");
var cellF4 = document.getElementById("cellF4");
var cellF5 = document.getElementById("cellF5");
var cellF6 = document.getElementById("cellF6");
var cellF7 = document.getElementById("cellF7");
var cellF8 = document.getElementById("cellF8");

var cellG1 = document.getElementById("cellG1");
var cellG2 = document.getElementById("cellG2");
var cellG3 = document.getElementById("cellG3");
var cellG4 = document.getElementById("cellG4");
var cellG5 = document.getElementById("cellG5");
var cellG6 = document.getElementById("cellG6");
var cellG7 = document.getElementById("cellG7");
var cellG8 = document.getElementById("cellG8");

var cellH1 = document.getElementById("cellH1");
var cellH2 = document.getElementById("cellH2");
var cellH3 = document.getElementById("cellH3");
var cellH4 = document.getElementById("cellH4");
var cellH5 = document.getElementById("cellH5");
var cellH6 = document.getElementById("cellH6");
var cellH7 = document.getElementById("cellH7");
var cellH8 = document.getElementById("cellH8");

//global variables
var captureSound = document.getElementById("captureSound"); 
var captureSide = '';
var dieSelected = false;
var roundCounter = 0;
var promotionRound = false;
document.getElementById("roundCounter").innerHTML = "The current round is: " + roundCounter + " - White to move";
var winCounterBlack = 0;
var winCounterWhite = 0;

var dieList = [
  //name0, value1, top2, left3, isSelected4, cell5, HTML_element6, border_color7, image8, isCapturable9, side10, captureDistance11, isCaptured12
    ['die', 1, '175px', '35px', false, cellA1, document.getElementById("die"), dieImage, dieImage, false, 'white', false],
    ['die2', 1, '175px', '135px', false, cellA2, document.getElementById("die2"), dieImage2, dieImage2, false, 'white', false],
    ['die3', 1, '175px', '235px', false, cellA3, document.getElementById("die3"), dieImage3, dieImage3, false, 'white', false],
    ['die4', 1, '175px', '335px', false, cellA4, document.getElementById("die4"), dieImage4, dieImage4, false, 'white', false],
    ['die5', 1, '175px', '435px', false, cellA5, document.getElementById("die5"), dieImage5, dieImage5, false, 'white', false],
    ['die6', 1, '175px', '535px', false, cellA6, document.getElementById("die6"), dieImage6, dieImage6, false, 'white', false],
    ['die7', 1, '175px', '635px', false, cellA7, document.getElementById("die7"), dieImage7, dieImage7, false, 'white', false],
    ['die8', 1, '175px', '735px', false, cellA8, document.getElementById("die8"), dieImage8, dieImage8, false, 'white', false],
    ['die9', 1, '875px', '35px', false, cellH1, document.getElementById("die9"), dieImage9, dieImage9, false, 'black', false],
    ['die10', 1, '875px', '135px', false, cellH2, document.getElementById("die10"), dieImage10, dieImage10, false, 'black', false],
    ['die11', 1, '875px', '235px', false, cellH3, document.getElementById("die11"), dieImage11, dieImage11, false, 'black', false],
    ['die12', 1, '875px', '335px', false, cellH4, document.getElementById("die12"), dieImage12, dieImage12, false, 'black', false],
    ['die13', 1, '875px', '435px', false, cellH5, document.getElementById("die13"), dieImage13, dieImage13, false, 'black', false],
    ['die14', 1, '875px', '535px', false, cellH6, document.getElementById("die14"), dieImage14, dieImage14, false, 'black', false],
    ['die15', 1, '875px', '635px', false, cellH7, document.getElementById("die15"), dieImage15, dieImage15, false, 'black', false],
    ['die16', 1, '875px', '735px', false, cellH8, document.getElementById("die16"), dieImage16, dieImage16, false, 'black', false],

];

dieImage.onclick = selectDie;
dieImage2.onclick = selectDie;
dieImage3.onclick = selectDie;
dieImage4.onclick = selectDie;
dieImage5.onclick = selectDie;
dieImage6.onclick = selectDie;
dieImage7.onclick = selectDie;
dieImage8.onclick = selectDie;

dieImage9.onclick = selectDie;
dieImage10.onclick = selectDie;
dieImage11.onclick = selectDie;
dieImage12.onclick = selectDie;
dieImage13.onclick = selectDie;
dieImage14.onclick = selectDie;
dieImage15.onclick = selectDie;
dieImage16.onclick = selectDie;


cellA1.onclick = moveDie;
cellA2.onclick = moveDie;
cellA3.onclick = moveDie;
cellA4.onclick = moveDie;
cellA5.onclick = moveDie;
cellA6.onclick = moveDie;
cellA7.onclick = moveDie;
cellA8.onclick = moveDie;

cellB1.onclick = moveDie;
cellB2.onclick = moveDie;
cellB3.onclick = moveDie;
cellB4.onclick = moveDie;
cellB5.onclick = moveDie;
cellB6.onclick = moveDie;
cellB7.onclick = moveDie;
cellB8.onclick = moveDie;

cellC1.onclick = moveDie;
cellC2.onclick = moveDie;
cellC3.onclick = moveDie;
cellC4.onclick = moveDie;
cellC5.onclick = moveDie;
cellC6.onclick = moveDie;
cellC7.onclick = moveDie;
cellC8.onclick = moveDie;

cellD1.onclick = moveDie;
cellD2.onclick = moveDie;
cellD3.onclick = moveDie;
cellD4.onclick = moveDie;
cellD5.onclick = moveDie;
cellD6.onclick = moveDie;
cellD7.onclick = moveDie;
cellD8.onclick = moveDie;

cellE1.onclick = moveDie;
cellE2.onclick = moveDie;
cellE3.onclick = moveDie;
cellE4.onclick = moveDie;
cellE5.onclick = moveDie;
cellE6.onclick = moveDie;
cellE7.onclick = moveDie;
cellE8.onclick = moveDie;

cellF1.onclick = moveDie;
cellF2.onclick = moveDie;
cellF3.onclick = moveDie;
cellF4.onclick = moveDie;
cellF5.onclick = moveDie;
cellF6.onclick = moveDie;
cellF7.onclick = moveDie;
cellF8.onclick = moveDie;

cellG1.onclick = moveDie;
cellG2.onclick = moveDie;
cellG3.onclick = moveDie;
cellG4.onclick = moveDie;
cellG5.onclick = moveDie;
cellG6.onclick = moveDie;
cellG7.onclick = moveDie;
cellG8.onclick = moveDie;

cellH1.onclick = moveDie;
cellH2.onclick = moveDie;
cellH3.onclick = moveDie;
cellH4.onclick = moveDie;
cellH5.onclick = moveDie;
cellH6.onclick = moveDie;
cellH7.onclick = moveDie;
cellH8.onclick = moveDie;


//This function runs whenever a user selects any dice
function selectDie() {
  //debugger;
  var i;
  if (promotionRound === false) {
    for (i = 0; i < dieList.length; i++) {
      dieList[i][4] = false;
      dieList[i][7].style.border = "";
      dieList[i][9] = false;
      if (roundCounter % 2 === 0 && dieList[i][10] === 'black') {
        dieList[i][9] = true
      }
      else if (roundCounter % 2 !=0 && dieList[i][10] === 'white') {
        dieList[i][9] = true
      }
    };
    for (i = 0; i < dieList.length; i++) {
      //debugger;
      if (dieList[i][2] === event.target.style.top && dieList[i][3] === event.target.style.left) {
          dieList[i][4] = true;
          dieList[i][7].style.border = "2px solid #7CFC00";
          break;
      }
    };
    captureSide = 'empty';
    dieSelected = true;
  }
  else {
    for (i = 0; i < dieList.length; i++) {
      if (dieList[i][2] === event.target.style.top && dieList[i][3] === event.target.style.left && dieList[i][1] != 6 && dieList[i][12] != true) {
        if (dieList[i][1] === 1 && dieList[i][10] === 'white') {
          dieList[i][8].style.background = "url('https://i.imgur.com/whJIYil.jpg')";
        }
        else if (dieList[i][1] === 2 && dieList[i][10] === 'white') {
          dieList[i][8].style.background = "url('https://i.imgur.com/YFSozBT.jpg')"
        }
        else if (dieList[i][1] === 3 && dieList[i][10] === 'white') {
          dieList[i][8].style.background = "url('https://i.imgur.com/xQLLrTx.jpg')"
        }
        else if (dieList[i][1] === 4 && dieList[i][10] === 'white') {
          dieList[i][8].style.background = "url('https://i.imgur.com/UapZist.jpg')"
        }
        else if (dieList[i][1] === 5 && dieList[i][10] === 'white') {
          dieList[i][8].style.background = "url('https://i.imgur.com/pfg4l8v.jpg')"
        }
        else if (dieList[i][1] === 1 && dieList[i][10] === 'black') {
          dieList[i][8].style.background = "url('https://i.imgur.com/7yTakrz.jpg')";
        }
        else if (dieList[i][1] === 2 && dieList[i][10] === 'black') {
          dieList[i][8].style.background = "url('https://i.imgur.com/76apMa1.jpg')"
        }
        else if (dieList[i][1] === 3 && dieList[i][10] === 'black') {
          dieList[i][8].style.background = "url('https://i.imgur.com/7AshxlE.jpg')"
        }
        else if (dieList[i][1] === 4 && dieList[i][10] === 'black') {
          dieList[i][8].style.background = "url('https://i.imgur.com/gBcd42T.jpg')"
        }
        else if (dieList[i][1] === 5 && dieList[i][10] === 'black') {
          dieList[i][8].style.background = "url('https://i.imgur.com/4Xho9Mh.jpg')"
        }
        dieList[i][1]++;
        dieList[i][4] = false;
        promotionRound = false;
        roundCounter++
        //dieList[i][8].style.pointerEvents = 'none'
      }
      else if (dieList[i][2] === event.target.style.top && dieList[i][3] === event.target.style.left && dieList[i][1] === 6) {
        window.alert("You cannot promote a dice past level 6. Please pick another dice of yours to promote.")
      }
    }
    if (roundCounter % 2 != 0 && promotionRound === false) {
      document.getElementById("roundCounter").innerHTML = "The current round is: " + roundCounter + " - Black to play"
    }
    else if (roundCounter % 2 === 0 && promotionRound === false) {
      document.getElementById("roundCounter").innerHTML = "The current round is: " + roundCounter + " - White to play"
    }
    for (i = 0; i < dieList.length; i++) {
      dieList[i][8].style.pointerEvents = 'none'
      if (roundCounter % 2 != 0 && dieList[i][10] === 'black') {
        dieList[i][8].style.pointerEvents = 'auto'
      }
      else if (roundCounter % 2 === 0 && dieList[i][10] === 'white') {
        dieList[i][8].style.pointerEvents = 'auto'
      }
    } 
  }
}

function moveDie() {
  //debugger;
  var i;
  if (roundCounter % 2 === 0) {
    captureSide = 'black';
    }
    else {
        captureSide = 'white'
      }

  for (i = 0; i < dieList.length; i++) {
    if (dieSelected === false && promotionRound != true) {
      window.alert("You must first select a die to move.")
      break
    }
    else if (dieSelected === false && promotionRound === true) {
      window.alert("You must select one of your die to promote")
      break
    }
    else if (dieList[i][4] === true && dieList[i][5].id === event.target.id) {
      window.alert("You cannot move a die to the same spot it currently occupies.")
      break
    }
    else if (dieList[i][4] === true && dieList[i][5].id != event.target.id && dieList[i][10] === event.target.slot) {
      window.alert("You cannot capture a die of the same color.")
      break
    }
    else if (dieList[i][4] === true && 
    (Math.abs(Number(event.target.style.x) - Number(dieList[i][8].style.x)) + Math.abs(Number(event.target.style.y) - Number(dieList[i][8].style.y)) > dieList[i][1])) {
      window.alert("Invalid move! The tile you selected is further than your movement total of " + dieList[i][1] + " .")
      break
    }
    else if (dieList[i][4] === true && dieList[i][10] != captureSide && dieList[i][5].id != event.target.id && dieList[i][10] != event.target.slot && dieList[i][1] % 2 != 0) {
      //captureSound.play();
        if (
          (Math.abs(Number(event.target.style.x) - Number(dieList[i][8].style.x) + Math.abs(Number(event.target.style.y) - Number(dieList[i][8].style.y))) % 2 != 0) && 
          ((Math.abs(Number(event.target.style.x) - Number(dieList[i][8].style.x)) + Math.abs(Number(event.target.style.y) - Number(dieList[i][8].style.y)) <= dieList[i][1]))
          ) { 
        dieList[i][5].slot = 'empty';
        dieList[i][2] = 25 + event.target.offsetTop + "px";
        dieList[i][3] = 25 + event.target.offsetLeft + "px";
        dieList[i][5] = event.target
        dieList[i][7].style.border = null; 
        dieList[i][7].style.top = 25 + event.target.offsetTop + "px";
        dieList[i][7].style.left = 25 + event.target.offsetLeft + "px";
        dieList[i][8].style.x = event.target.style.x;
        dieList[i][8].style.y = event.target.style.y;
          if (roundCounter % 2 != 0) {
            document.getElementById("roundCounter").innerHTML = "The current round is: " + roundCounter + " - Black to promote";
          }
          if (roundCounter % 2 === 0) {
            document.getElementById("roundCounter").innerHTML = "The current round is: " + roundCounter + " - White to promote";
          }
        //debugger;
        dieSelected = false;
        dieList[i][9] = false;
          for (i = 0; i < dieList.length; i++) {
            //debugger;
            if (dieList[i][9] === true && dieList[i][5].id === event.target.id) {
              captureSound.play();
              dieList[i][7].style.height = "0px";
              dieList[i][7].style.width = "0px";
              dieList[i][7].style.top = "0px";
              dieList[i][7].style.left = "0px";
              dieList[i][7].style.border = "";
              dieList[i][12] = true;
                if (dieList[i][10] === 'white' && dieList[i][12] === true) {
                winCounterBlack++;
                }
                else if (dieList[i][10] === 'black' && dieList[i][12] === true) {
                winCounterWhite++; 
                }
            }
          }
        if (winCounterBlack === 8) {
          window.alert('Black wins!')
        }
        else if (winCounterWhite === 8) {
          window.alert('White wins!')
        }
      promotionRound = true;
      }
      else {
        window.alert("Invalid move! You must move a total of " + dieList[i][1] + " spot(s) away(non-diagonally).")
        }
      }
      else if (dieList[i][4] === true && dieList[i][10] != captureSide && dieList[i][5].id != event.target.id && dieList[i][10] != event.target.slot && dieList[i][1] % 2 === 0) {
        if (
          (Math.abs(Number(event.target.style.x) - Number(dieList[i][8].style.x) + Math.abs(Number(event.target.style.y) - Number(dieList[i][8].style.y))) % 2 === 0) && 
          ((Math.abs(Number(event.target.style.x) - Number(dieList[i][8].style.x)) + Math.abs(Number(event.target.style.y) - Number(dieList[i][8].style.y)) <= dieList[i][1]))
          ) { 
        dieList[i][5].slot = 'empty';
        dieList[i][2] = 25 + event.target.offsetTop + "px";
        dieList[i][3] = 25 + event.target.offsetLeft + "px";
        dieList[i][5] = event.target
        dieList[i][7].style.border = null; 
        dieList[i][7].style.top = 25 + event.target.offsetTop + "px";
        dieList[i][7].style.left = 25 + event.target.offsetLeft + "px";
        dieList[i][8].style.x = event.target.style.x;
        dieList[i][8].style.y = event.target.style.y;
        //roundCounter++;
          if (roundCounter % 2 != 0) {
            document.getElementById("roundCounter").innerHTML = "The current round is: " + roundCounter + " - Black to promote";
          }
          if (roundCounter % 2 === 0) {
            document.getElementById("roundCounter").innerHTML = "The current round is: " + roundCounter + " - White to promote";
          }
        //debugger;
        dieSelected = false;
        dieList[i][9] = false;
          for (i = 0; i < dieList.length; i++) {
            //debugger;
            if (dieList[i][9] === true && dieList[i][5].id === event.target.id) {
              dieList[i][7].style.height = "0px";
              dieList[i][7].style.width = "0px";
              dieList[i][7].style.top = "0px";
              dieList[i][7].style.left = "0px";
              dieList[i][7].style.border = "";
              dieList[i][12] = true;
                if (dieList[i][10] === 'white' && dieList[i][12] === true) {
                winCounterBlack++;
                }
                else if (dieList[i][10] === 'black' && dieList[i][12] === true) {
                winCounterWhite++; 
                }
            }
          }
        if (winCounterBlack === 8) {
          window.alert('Black wins!')
        }
        else if (winCounterWhite === 8) {
          window.alert('White wins!')
        }
      promotionRound = true;
        }
        else {
        window.alert("Invalid move! You must move a total of " + dieList[i][1] + " spot(s) away(non-diagonally).")
        }
      } 
    }
    //debugger;
    for (i = 0; i < dieList.length; i++) {
      if (dieList[i][7].style.height === "0px") {
        dieList.splice(i, 1);
        break
      }
    }
}
