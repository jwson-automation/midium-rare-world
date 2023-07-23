// Enemy 클래스를 따로 분리한 파일

  
var enemy1 = new Image();
enemy1.src = 'heart.png';

class Enemy {
    constructor(){
      this.x = canvas.width;
      this.y = canvas.height - 75;
      this.width = 50;
      this.height = 50;
      this.speedX = 5;
    }
    draw(){
      ctx.drawImage(enemy1,this.x, this.y, this.width, this.height);
    }
  }

  