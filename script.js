function setRandomPosition(elementID) {
	var left = Math.floor(Math.random() * (410)) + 1;
	var top = Math.floor(Math.random() * (260)) + 1;

	elementID.style.left = left + 'px';
	elementID.style.top = top + 'px';
}
setRandomPosition(item1);
setRandomPosition(item2);
setRandomPosition(item3);
setRandomPosition(item4);
setRandomPosition(item5);

function changeElementPosition(event) {
	var newLeft = initX + event.clientX - mousePressX;
	var newTop = initY + event.clientY - mousePressY;

	if (newLeft > 600 - item.clientWidth) newLeft = 600 - item.clientWidth;
	if (newLeft < 1) newLeft = 0;
	if (newTop > 400 - item.clientHeight) newTop = 400 - item.clientHeight;
	if (newTop < 1) newTop = 0;

	item.style.left = newLeft + 'px';
	item.style.top = newTop + 'px';
}

var item;
var initX, initY;
var mousePressX, mousePressY;



for (var i = 0; i < puzzle.children.length; i++) {
	puzzle.children[i].addEventListener('mousedown', function(e) {
		item = this;
		puzzle.classList.add("grabbing");

		initX = Number(this.style.left.replace('px', ''));
		initY = Number(this.style.top.replace('px', ''));
		mousePressX = e.clientX;
		mousePressY = e.clientY;

		puzzle.addEventListener('mousemove', changeElementPosition);
	});
}

window.addEventListener('mouseup', function() {
	puzzle.removeEventListener('mousemove', changeElementPosition);
	item.style.cursor = 'grab';
	puzzle.classList.remove("grabbing");
});