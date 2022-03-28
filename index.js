let squares = 16;
let boxes;
function pad(){
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
	boxes = [...document.querySelectorAll('.boxes')];
	return boxes;
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

boxes.forEach(box => {box.addEventListener('mouseenter', color)})
