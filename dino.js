// Dino 클래스를 따로 분리한 파일

let groundY = canvas.height - 25;

    var cow1 = new Image();
    cow1.src = 'src/cow.png';
    var cow2 = new Image();
    cow2.src = 'src/cow2.png'
    var cow3 = new Image();
    cow3.src = 'src/cow3.png'


class Dino {
    constructor(){
      this.x = 50;
      this.y = canvas.height - 75;
      this.width = 50;
      this.height = 50;
      this.speedX = 5;
      this.isJumping = false;
      this.jumpingEnd = true;
      this.jumpCount = 0;
      this.jumpMaxHeight = 20;
      this.jumpSpeed = 10;
    }
    draw(){
      ctx.drawImage(cow1,this.x, this.y, this.width, this.height);
    }
    draw2(){
      ctx.drawImage(cow2,this.x, this.y, this.width, this.height);
    }
    draw3(){
      ctx.drawImage(cow3,this.x, this.y, this.width, this.height);
    }
  }
  
  var dino = new Dino();
  