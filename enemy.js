// Enemy 클래스를 따로 분리한 파일

var heart1 = new Image();
heart1.src = "src/heart.png";

var heart2 = new Image();
heart2.src = "src/broken_heart.png";

class Heart {
  constructor() {
    this.x = canvas.width;
    this.y = canvas.height - 75;
    this.width = 50;
    this.height = 50;
    this.speedX = 5;
  }
  draw(anime) {
    if (anime % 2 == 0) {
      ctx.drawImage(heart1, this.x, this.y, this.width, this.height);
    } else {
      ctx.drawImage(heart2, this.x, this.y, this.width, this.height);
    }
  }
}

var enemy2 = new Image();
