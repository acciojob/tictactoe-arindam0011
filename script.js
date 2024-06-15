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
                        box.innerText = "O"
                        h3.innerText = Player1+", You're Up!";
                    }
                    else {
                        box.innerText = "✕"
                        h3.innerText = Player2+", You're Up!";
                    }
                }
                ct++;
                checkWinCondition();
            }

        })
    function checkWinCondition() {
        if(boxes[0].innerText == "✕" && boxes[1].innerText == "✕" && boxes[2].innerText == "✕"
            || boxes[3].innerText == "✕" && boxes[4].innerText == "✕" && boxes[5].innerText == "✕"
            || boxes[6].innerText == "✕" && boxes[7].innerText == "✕" && boxes[8].innerText == "✕"
            || boxes[0].innerText == "✕" && boxes[4].innerText == "✕" && boxes[8].innerText == "✕"
            || boxes[2].innerText == "✕" && boxes[4].innerText == "✕" && boxes[6].innerText == "✕"
            || boxes[0].innerText == "✕" && boxes[3].innerText == "✕" && boxes[6].innerText == "✕"
            || boxes[1].innerText == "✕" && boxes[4].innerText == "✕" && boxes[7].innerText == "✕"
            || boxes[2].innerText == "✕" && boxes[5].innerText == "✕" && boxes[8].innerText == "✕"
        ){
			 // boxes.forEach(box => {
    //         box.removeEventListener("click", putValue);
			 // }
            return h3.innerText= Player1+",Congatulations You Won!";
        }
        else if(boxes[0].innerText == "O" && boxes[1].innerText == "O" && boxes[2].innerText == "O"
            || boxes[3].innerText == "O" && boxes[4].innerText == "O" && boxes[5].innerText == "O"
            || boxes[6].innerText == "O" && boxes[7].innerText == "O" && boxes[8].innerText == "O"
            || boxes[0].innerText == "O" && boxes[4].innerText == "O" && boxes[8].innerText == "O"
            || boxes[2].innerText == "O" && boxes[4].innerText == "O" && boxes[6].innerText == "O"
            || boxes[0].innerText == "O" && boxes[3].innerText == "O" && boxes[6].innerText == "O"
            || boxes[1].innerText == "O" && boxes[4].innerText == "O" && boxes[7].innerText == "O"
            || boxes[2].innerText == "O" && boxes[5].innerText == "O" && boxes[8].innerText == "O"
        ){
			// boxes.forEach(box => {
   //          box.removeEventListener("click", putValue);
			//  }
            return h3.innerText=Player2+",Congatulations You Won!";
        }
        else if(ct == 10){
            return h3.innerText = "Match Tied";
        }
    }
        
});
});
