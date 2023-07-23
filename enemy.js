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

var medicine = new Image();
medicine.src = 'src/medicine.png'

class Medicine {
    constructor() {
      this.x = canvas.width;
      this.y = canvas.height - 75;
      this.width = 50;
      this.height = 50;
      this.speedX = 5;
    }
    draw(anime) {
        ctx.drawImage(medicine, this.x, this.y, this.width, this.height);
    }
  }

var thread = new Image();
thread.src = 'src/pic_thread.png'

class Thread {
    constructor() {
      this.x = canvas.width;
      this.y = canvas.height - 75;
      this.width = 50;
      this.height = 50;
      this.speedX = 5;
    }
    draw(anime) {
        ctx.drawImage(thread, this.x, this.y, this.width, this.height);
    }
  }

var hall = new Image();
hall.src = 'src/hall.png'

class Hall {
    constructor() {
      this.x = canvas.width;
      this.y = canvas.height - 75;
      this.width = 50;
      this.height = 50;
      this.speedX = 5;
    }
    draw(anime) {
        ctx.drawImage(hall, this.x, this.y, this.width, this.height);
    }
  }

var box = new Image();
box.src = 'src/pic_box.png'

class Box {
    constructor() {
      this.x = canvas.width;
      this.y = canvas.height - 75;
      this.width = 50;
      this.height = 50;
      this.speedX = 5;
    }
    draw(anime) {
        ctx.drawImage(box, this.x, this.y, this.width, this.height);
    }
  }

var card1 = new Image();
card1.src = 'src/card/card_1.png'
var card2 = new Image();
card2.src = 'src/card/card_2.png'
var card3 = new Image();
card3.src = 'src/card/card_3.png'
var card4 = new Image();
card4.src = 'src/card/card_4.png'
var card5 = new Image();
card5.src = 'src/card/card_5.png'
var card6 = new Image();
card6.src = 'src/card/card_6.png'
var card7 = new Image();
card7.src = 'src/card/card_7.png'
var card8 = new Image();
card8.src = 'src/card/card_8.png'
var card9 = new Image();
card9.src = 'src/card/card_9.png'

class Card {
    constructor() {
      this.x = canvas.width;
      this.y = canvas.height - 75;
      this.width = 50;
      this.height = 50;
      this.speedX = 5;
    }
    draw(anime) {
      if (anime % 9 == 0) {
        ctx.drawImage(card1, this.x, this.y, this.width, this.height);
      } else if (anime % 9 == 1) {
        ctx.drawImage(card2, this.x, this.y, this.width, this.height);
      }else if (anime % 9 == 2) {
        ctx.drawImage(card3, this.x, this.y, this.width, this.height);
      }else if (anime % 9 == 3) {
        ctx.drawImage(card4, this.x, this.y, this.width, this.height);
      }else if (anime % 9 == 4) {
        ctx.drawImage(card5, this.x, this.y, this.width, this.height);
      }else if (anime % 9 == 5) {
        ctx.drawImage(card6, this.x, this.y, this.width, this.height);
      }else if (anime % 9 == 6) {
        ctx.drawImage(card7, this.x, this.y, this.width, this.height);
      }else if (anime % 9 == 7) {
        ctx.drawImage(card8, this.x, this.y, this.width, this.height);
      }else if (anime % 9 == 8) {
        ctx.drawImage(card9, this.x, this.y, this.width, this.height);
      }
    }
  }