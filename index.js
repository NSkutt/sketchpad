let squares = 16;

function pad(){
	//container.style.backgroundColor = "red";
	for (i=1; i<=squares*squares; i++){
		window[`square${i}`] = document.createElement('div');
		window[`square${i}`].classList.add("boxes");
		window[`square${i}`].id = `box${i}`;
		//console.log(window[`square${i}`]);
		window[`square${i}`].style.minWidth = `${container.clientWidth / squares }px`;
		window[`square${i}`].style.minHeight  = `${container.clientHeight / squares }px`;
		container.append(window[`square${i}`]);
	};
}
pad();
