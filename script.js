//your JS code here. If required.

const startBtn= document.getElementById("subbtn");

startBtn.addEventListener("click", getName=>{
	let p1=document.getElementById("Player1").value;
	let p2=document.getElementById("Player2").value;
	window.localStorage.setItem("player_1", p1);
	window.localStorage.setItem("player_2", p2);

	let container=document.getElementById("nameCont");
	container.innerHTML=``;
	container.innerHTML=`<h1  id="nmhd">Tic Tac Toe</h1>
						 <h3 id="h3"></h3>
						 <div id="flx">
							 <div class="box" id="box_1"></div>
							 <div class="box" id="box_2"></div>
							 <div class="box" id="box_3"></div>
							 <div class="box" id="box_4"></div>
							 <div class="box" id="box_5"></div>
							 <div class="box" id="box_6"></div>
							 <div class="box" id="box_7"></div>
							 <div class="box" id="box_8"></div>
							 <div class="box" id="box_9"></div>
						 </div>`

	let h3 = document.getElementById("h3");
    let ct = 1;
    h3.innerText = `${window.localStorage.getItem("player_1")}, You're Up!`;

	let boxes=document.querySelectorAll(.box),

		boxes.forEach(box=>{
	         box.addEventListener("click", putValue)
	function putValue(event){
		if(box.innerText==""){
				if(ct%2==0){
					box.innerText="O"
					h3.innerText=`${window.localStorage.getItem("player_1")}, You're Up!`;
				}
			else{
				box.innerText="✕"
					h3.innerText=`${window.localStorage.getItem("player_2")}, You're Up!`;
			}
			ct++;
			}
	}
			
		})
})
