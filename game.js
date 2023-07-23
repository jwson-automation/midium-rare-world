// 게임 루프 및 기타 함수들을 따로 분리한 파일

background = new Image();
background.src = "src/background.png";

restartImg = new Image();
restartImg.src = "src/restart.png";

arr_pipe = [];

// 점수 업데이트 함수
function updateScore(score) {
  const scoreElement = document.getElementById("score");
  scoreElement.textContent = score;
}

// 점프 처리 함수
function jump() {
  if (dino.isJumping) {
    // 점프 중이면 위로 이동
    dino.jumpCount++;
    dino.y -= dino.jumpSpeed;
    if (dino.jumpCount === dino.jumpMaxHeight) {
      // 최대 높이에 도달하면 다시 내려오도록 설정
      dino.isJumping = false;
    }
  } else {
    if (dino.y < groundY - dino.height) {
      // 땅보다 높이에 있으면 계속 내려옴
      dino.y += dino.jumpSpeed;
    } else {
      dino.jumpingEnd = true;
      // 땅에 닿으면 점프 카운트 초기화
      dino.jumpCount = 0;
    }
  }
}

// 충돌 확인하기
function collide(dino, enemy, restartImg) {
  var x_ = enemy.x - (dino.x + dino.width);
  var y_ = enemy.y - (dino.y + dino.height);
  if (50 < enemy.x && enemy.x < 100 && y_ < 0) {
    console.log("collide!!");
    dino.draw3();

    ctx.drawImage(restartImg, canvas.width / 2 - 50, canvas.height / 2  - 40, 100, 80);

    cancelAnimationFrame(game);

    restart_flag = true;

  }
}
// 게임 루프 함수
function gameLoop() {
  game = requestAnimationFrame(gameLoop);

  restart_flag = false;

  // 캔버스 지우기
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

  if (timer % 10 == 0) {
    var pipe = new Pipe();
    arr_pipe.push(pipe);
  }

  arr_pipe.forEach((a) => {
    a.x -= 10;
    a.draw();
    if (a.x < -1000) {
      arr_pipe.shift(0);
    }
  });

  //timer
  timer++;

  const randomNumber = Math.floor(Math.random() * 3) + 1;
  enemy_timer += randomNumber;

  // 디노 그리기
  if (timer % 10 == 0) {
    if (flag == false) {
      flag = true;
    } else {
      flag = false;
    }
  }

  if (flag) {
    dino.draw();
  } else {
    dino.draw2();
  }

  // 디노 점프
  jump();

  if (timer % 20 == 0) {
    anime += 1;
  }

  // 장애물 생성
  if (enemy_timer % 80 == 0) {
    var type = Math.floor(Math.random() * 6) + 1;

    if (type == 1) {
      var heart = new Heart();
      arr_enemy.push(heart);
    } else if (type == 2) {
      var medicine = new Medicine();
      arr_enemy.push(medicine);
    } else if (type == 3) {
      var thread = new Thread();
      arr_enemy.push(thread);
    } else if (type == 4) {
      var hall = new Hall();
      arr_enemy.push(hall);
    } else if (type == 5) {
      var box = new Box();
      arr_enemy.push(box);
    } else if (type == 6) {
      var card = new Card();
      arr_enemy.push(card);
    }
  }

  // Enemy
  arr_enemy.forEach((a) => {
    a.x -= 10;
    a.draw(anime);
    collide(dino, a, restartImg);
    if (a.x < -1000) {
      arr_enemy.shift(0);
      score += 10;
      updateScore(score);
    }
  });

  // 구름 생성
  if (timer % 45 == 0) {
    cloud_height = (Math.floor(Math.random() * 6) + 1)*10;
    var cloud = new Cloud(cloud_height);
    arr_cloud.push(cloud);
  }

  // 구름 이동하기
  arr_cloud.forEach((a) => {
    a.x -= 10;
    a.draw();
    if (a.x < -1000) {
      arr_cloud.shift();
    }
  });
}

// 게임 루프 시작
gameLoop();
