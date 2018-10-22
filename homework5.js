const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

canvas.width = 700;
canvas.height = 400;

let play = true;

const badGuysImagesPath = 'images/bad_guys/';
const badGuysArray = [badGuysImagesPath+'bad_guy_1.jpg', badGuysImagesPath+'bad_guy_2.jpg', badGuysImagesPath+'bad_guy_3.jpg', badGuysImagesPath+'bad_guy_4.jpg', badGuysImagesPath+'bad_guy_5.jpg'];

const goodGuyImg = new Image();
goodGuyImg.src = 'images/hero.jpg';

const leftKey = 37;
const upKey = 38;
const rightKey = 39;
const downKey = 40;
document.addEventListener('keydown', function(event) {
	hero.update(event.keyCode);
}, false);


const rand = function(num) {
	return Math.floor(Math.random() * num) + 1;
};

const plusOrMinus = function() {
	return Math.random() < 0.5 ? -1 : 1;
}

const draw = function() {
	context.drawImage(this.image, this.x, this.y, this.width, this.height);
};

const update = function() {
	this.xDelta = (this.x >= canvas.width -30 || this.x <= 0) ? this.xDelta *= -1 : this.xDelta;
	this.yDelta = (this.y >= canvas.height -30 || this.y <= 0) ? this.yDelta *= -1 : this.yDelta;
	this.x += this.xDelta;
	this.y += this.yDelta;
	if(this.x + this.width >= hero.x && this.x <= hero.x + hero.width && this.y + this.height >= hero.y && this.y <= hero.y + hero.height){
		play = false;
		document.getElementById("gameOver").style.display = 'block';
		setTimeout(function(){window.location.reload()}, 5000)
	}
}

const hero = {
	x: canvas.width/2 - 35,
	y: canvas.height - 70,
	xDelta: 10,
	yDelta: 10,
	width: 70,
	height: 70,
	image: goodGuyImg,
	draw: function(){
		context.drawImage(this.image, this.x, this.y, this.width, this.height)
	},
	update: function(keyCode){
		if(keyCode === upKey) {
			if(this.y <= 0) {
				return false;
			}
			this.y -= this.yDelta;
		} else if(keyCode === downKey) {
			if(this.y >= canvas.height - hero.height) {
				return false;
			}
			this.y += this.yDelta;
		} else if(keyCode === leftKey) {
			if(this.x <= 0) {
				return false;
			}
			this.x -= this.xDelta;
		} else if(keyCode === rightKey) {
			if(this.x >= canvas.width - hero.width) {
				return false;
			}
			this.x += this.xDelta;
		}
	}
};

const createEnemies = function(count, canvasWidth, canvasHeight) {
	const enemies = [];
	for(let i=0;i<count;++i){
		const currentEnenmy = {width: 30, height: 30, xDelta: plusOrMinus(), yDelta: plusOrMinus()};
		currentEnenmy.x = rand(canvas.width - currentEnenmy.width)
		currentEnenmy.y = rand(canvas.height - 2*hero.height - currentEnenmy.height)
		currentEnenmy.image = new Image();
		currentEnenmy.image.src = badGuysArray[rand(5)-1];
		currentEnenmy.draw = draw
		currentEnenmy.update = update
		enemies[i] = currentEnenmy;
	}
	return enemies;
}

const enemies = createEnemies(10, canvas.width, canvas.height)
const loop = function() {
	if(!play){
		return false;
	}
	context.fillStyle = '#BDBDBD';
	context.fillRect(0, 0, canvas.width, canvas.height);
	hero.draw()
	for(let v of enemies){
		v.draw();
		v.update();
	}
	requestAnimationFrame(loop);
};

loop();
