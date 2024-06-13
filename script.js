//your JS code here. If required.

const startBtn = document.getElementById("submit");

startBtn.addEventListener("click", getName => {
    let p1 = document.getElementById("player1").value;
    let p2 = document.getElementById("player2").value;
    window.localStorage.setItem("player_1", p1);
    window.localStorage.setItem("player_2", p2);

    let container = document.getElementById("nameCont");
    container.innerHTML = ``;
    container.innerHTML = `<h1  id="nmhd">Tic Tac Toe</h1>
						 <h3 id="h3"></h3>
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

    let h3 = document.getElementById("h3");
    let ct = 1;
    h3.innerText = `${window.localStorage.getItem("player_1")}, You're Up!`;

    let boxes = document.querySelectorAll(".box");

        boxes.forEach(box => {
            box.addEventListener("click", putValue)
            function putValue(event) {
                if (box.innerText == "") {
                    if (ct % 2 == 0) {
                        box.innerText = "O"
                        h3.innerText = `${window.localStorage.getItem("player_1")}, You're Up!`;
                    }
                    else {
                        box.innerText = "✕"
                        h3.innerText = `${window.localStorage.getItem("player_2")}, You're Up!`;
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
            return h3.innerText=`${window.localStorage.getItem("player_1")},Congatulations You Won!`
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
            return h3.innerText=`${window.localStorage.getItem("player_2")},Congatulations You Won!`
        }
        else if(ct == 10){
            return h3.innerText = "Match Tied";
        }
    }
        
})
