function setRandomPosition(elementID) {
	var left = Math.floor(Math.random() * (400)) + 10;
	var top = Math.floor(Math.random() * (250)) + 10;

	elementID.style.left = left + 'px';
	elementID.style.top = top + 'px';
}

function changeElementPosition(event) {
	console.log(event.offsetX);
	item.style.left = initX + event.clientX - mousePressX + 'px';
	item.style.top = initY + event.clientY - mousePressY + 'px';
	puzzle.style.cursor = "grabbing";
}

setRandomPosition(item1);
setRandomPosition(item2);
setRandomPosition(item3);
setRandomPosition(item4);
setRandomPosition(item5);

console.log(puzzle.children[0])

for (var i = 0; i < puzzle.children.length; i++) {
	puzzle.children[i].addEventListener('mousedown', function(e) {
		item = e.target;
		console.log(item);

		initX = Number(this.style.left.replace('px', ''));
		initY = Number(this.style.top.replace('px', ''));
		mousePressX = e.clientX;
		mousePressY = e.clientY;

		puzzle.addEventListener('mousemove', changeElementPosition);
	});
}

window.addEventListener('mouseup', function() {
	puzzle.removeEventListener('mousemove', changeElementPosition);
	puzzle.style.cursor = "grab";
});