// Pipe 클래스를 따로 분리한 파일

_pipe = new Image();
_pipe.src = "src/pipe.png";

class Pipe {
  constructor(x) {
    this.x = canvas.width - x;
    this.y = canvas.height - 25;
    this.width = 100;
    this.height = 50;
    this.speedX = 2;
  }
  draw() {
    ctx.drawImage(_pipe, this.x, this.y, this.width, this.height);
  }
}

var pipe = new Pipe();
