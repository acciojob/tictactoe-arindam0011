//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function() {

const startBtn = document.getElementById("submit");

startBtn.addEventListener("click", getName => {
    const Player1 = document.getElementById("player1").value;
    const Player2 = document.getElementById("player2").value;
    

    let container = document.getElementById("nameCont");
    container.innerHTML = ``;
    container.innerHTML = `<h1  id="nmhd">Tic Tac Toe</h1>
						 <h3 class="message" id="h3"></h3>
						 <div id="flx">
							 <div class="box" id="1"></div>
							 <div class="box" id="2"></div>
							 <div class="box" id="3"></div>
							 <div class="box" id="4"></div>
							 <div class="box" id="5"></div>
							 <div class="box" id="6"></div>
							 <div class="box" id="7"></div>
							 <div class="box" id="8"></div>
							 <div class="box" id="9"></div>
						 </div>`

    let h3 = document.getElementsByClassName("message")[0];
	console.log(h3);
    h3.innerText = Player1+", You're Up!";

    let boxes = document.querySelectorAll(".box");
  let ct = 1;
        boxes.forEach(box => {
            box.addEventListener("click", putValue);
			
            function putValue(event) {
				let box=event.target;
                if (box.innerText == "") {
                    if (ct % 2 == 0) {
                        box.innerText = "o"
                        h3.innerText = Player1+", You're Up!";
                    }
                    else {
                        box.innerText = "x"
                        h3.innerText = Player2+", You're Up!";
                    }
                }
                ct++;
                checkWinCondition();
            }

        })
    function checkWinCondition() {
        if(boxes[0].innerText == "x" && boxes[1].innerText == "x" && boxes[2].innerText == "xx"
            || boxes[3].innerText == "x" && boxes[4].innerText == "x" && boxes[5].innerText == "x"
            || boxes[6].innerText == "x" && boxes[7].innerText == "x" && boxes[8].innerText == "x"
            || boxes[0].innerText == "x" && boxes[4].innerText == "x" && boxes[8].innerText == "x"
            || boxes[2].innerText == "x" && boxes[4].innerText == "x" && boxes[6].innerText == "x"
            || boxes[0].innerText == "x" && boxes[3].innerText == "x" && boxes[6].innerText == "x"
            || boxes[1].innerText == "x" && boxes[4].innerText == "x" && boxes[7].innerText == "x"
            || boxes[2].innerText == "x" && boxes[5].innerText == "x" && boxes[8].innerText == "x"
        ){
            return h3.innerText= Player1+" congatulations you won!";
        }
        else if(boxes[0].innerText == "o" && boxes[1].innerText == "o" && boxes[2].innerText == "o"
            || boxes[3].innerText == "o" && boxes[4].innerText == "o" && boxes[5].innerText == "o"
            || boxes[6].innerText == "o" && boxes[7].innerText == "o" && boxes[8].innerText == "o"
            || boxes[0].innerText == "o" && boxes[4].innerText == "o" && boxes[8].innerText == "o"
            || boxes[2].innerText == "o" && boxes[4].innerText == "o" && boxes[6].innerText == "o"
            || boxes[0].innerText == "o" && boxes[3].innerText == "o" && boxes[6].innerText == "o"
            || boxes[1].innerText == "o" && boxes[4].innerText == "o" && boxes[7].innerText == "o"
            || boxes[2].innerText == "o" && boxes[5].innerText == "o" && boxes[8].innerText == "o"
        ){
            return h3.innerText=Player2+" congatulations you won!";
        }
        else if(ct == 10){
            return h3.innerText = "Match Tied";
        }
    }
        
});
});
