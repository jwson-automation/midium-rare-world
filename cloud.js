// Cloud 클래스를 따로 분리한 파일


  
var cloud = new Image();
cloud.src = 'src/cloud1.png';


class Cloud {
    constructor(){
      this.x = canvas.width;
      this.y = 0;
      this.width = 100;
      this.height = 50;
      this.speedX = 2;
    }
    draw(){
      ctx.drawImage(cloud,this.x, this.y, this.width, this.height);
    }
  }
