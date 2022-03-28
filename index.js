
function pad(){
	let squares = parseInt(squareNumber.value);
	if(squares > 35){return console.error("Warning: Cannot handle more than 35!")};
	container.replaceChildren(); //When function runs again, empty container of old boxes
	//container.style.backgroundColor = "red";
	for (i=1; i<=squares*squares; i++){
		window[`square${i}`] = document.createElement('div');
		window[`square${i}`].classList.add("boxes");
		window[`square${i}`].id = `box${i}`;
		//console.log(window[`square${i}`]);
		window[`square${i}`].style.minWidth = `${container.clientWidth / squares }px`;
		window[`square${i}`].style.minHeight  = `${container.clientHeight / squares }px`;
		//window[`square${i}`].style.backgroundColor = `#${Math.floor(Math.random()*10)}${Math.floor(Math.random()*10)}${Math.floor(Math.random()*10)}`;
		container.append(window[`square${i}`]);
	};
	let boxes = [...document.querySelectorAll('.boxes')];
	boxes.forEach(box => {box.addEventListener('mouseenter', color)});
}
pad();

function color(){
	//console.log(this.style.backgroundColor);
	//this.style.backgroundColor = '';
	if(this.style.backgroundColor != ''){
		this.style.backgroundColor = "#000";
	}else if ([...this.classList].includes('hovered')){
		//console.log(this.style);
		this.style.backgroundColor = '#555';
	}else{
		this.classList.add('hovered');
	}
}

btn.addEventListener('click', pad);
