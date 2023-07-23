// Cloud 클래스를 따로 분리한 파일


  
var cloud = new Image();
cloud.src = 'src/cloud1.png';


class Cloud {
    constructor(cloud_height){
      this.x = canvas.width;
      this.y = cloud_height;
      this.width = 100;
      this.height = 50;
      this.speedX = 2;
    }
    draw(){
      ctx.drawImage(cloud,this.x, this.y, this.width, this.height);
    }
  }
