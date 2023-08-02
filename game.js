// 게임 루프 및 기타 함수들을 따로 분리한 파일

var background = new Image();
background.src = "src/background.png";

var restartImg = new Image();
restartImg.src = "src/restart.png";

var gameOverImg = new Image();
gameOverImg.src = "src/gameover.png";
var before_pip;

let lastTimestamp = 0;
const millisecondsPerUpdate = 1000 / 8; // 60 FPS (1초에 60 프레임)

tmp = 10;
for (let index = 0; index < 10; index++) {
  var before_pipe = new Pipe(tmp);
  tmp += 100;
  arr_pipe.push(before_pipe);
}

function formatScore(score) {
  const scoreString = score.toString();
  const leadingZeros = "00000";
  const formattedScore =
    leadingZeros.substring(0, leadingZeros.length - scoreString.length) +
    scoreString;
  return formattedScore;
}

// 점수 업데이트 함수
function updateScore(newScore) {
  score = newScore;
  const formattedScore = formatScore(score);
  document.getElementById("score").innerText = formattedScore;
}

function updateHighScore(newScore) {
  if (newScore > high_score) {
    high_score = newScore;
  }
  const formattedScore = formatScore(high_score);
  document.getElementById("high_score").innerText = formattedScore;
}

function updateLevel(newLevel) {
  document.getElementById("level").innerText = "lv" + newLevel;
}

// 점프 처리 함수
function jump() {
  if (dino.isJumping) {
    // 점프 중이면 위로 이동
    dino.jumpCount++;
    dino.y -= dino.jumpSpeed;

    if (dino.jumpCount === dino.jumpMaxHeight / 2) {
      dino.jumpSpeed = dino.jumpSpeed / 2;
    }

    if (dino.jumpCount === dino.jumpMaxHeight) {
      // 최대 높이에 도달하면 다시 내려오도록 설정
      dino.isJumping = false;
    }
  } else {
    if (dino.y < groundY - dino.height) {
      // 땅보다 높이에 있으면 계속 내려옴
      dino.y += dino.jumpSpeed;

      if (dino.jumpingEnd) {
        dino.jumpSpeed = dino.jumpSpeed * 2;
        dino.jumpingEnd = false;
      }
    } else {
      dino.jumpingEnd = true;
      // 땅에 닿으면 점프 카운트 초기화
      dino.jumpCount = 0;
      dino.jumpSpeed = originalJumpSpeed;
    }
  }
}

// 충돌 확인하기
function collide(dino, enemy, medicine) {
  var x_ = enemy.x - (dino.x + dino.width);
  var y_ = enemy.y - (dino.y + dino.height);

  if (medicine == canvas.height - 150) {
    if (50 < enemy.x && enemy.x < 100 && y_ < 0 && y_ > -50) {
      console.log("collide!!");
      deadSound.play();
      dino.draw3();
      ctx.drawImage(
        restartImg,
        canvas.width / 2 - 40,
        canvas.height / 2 + 30,
        80,
        40
      );
      ctx.drawImage(
        gameOverImg,
        canvas.width / 2 - 225,
        canvas.height / 2 - 20,
        450,
        42.5
      );
      cancelAnimationFrame(game);
      restart_flag = true;
    }
  } else {
    if (50 < enemy.x && enemy.x < 100 && y_ < 0) {
      console.log("collide!!");
      deadSound.play();
      dino.draw3();
      ctx.drawImage(
        restartImg,
        canvas.width / 2 - 40,
        canvas.height / 2 + 30,
        80,
        40
      );
      ctx.drawImage(
        gameOverImg,
        canvas.width / 2 - 225,
        canvas.height / 2 - 20,
        450,
        42.5
      );
      cancelAnimationFrame(game);
      restart_flag = true;
    }
  }
}

// 게임 상태 업데이트 함수
function updateGame(timestamp) {
  const elapsed = timestamp - lastTimestamp;
  timer += 1

  if (elapsed >= millisecondsPerUpdate) {
    lastTimestamp = timestamp;

    score += 1;
    updateScore(score);
    updateHighScore(score);

    if (score % 100 == 0) {
      level += 1;
      updateLevel(level);
      victorySound.play();
      speed += 1;
    }

    var pipe = new Pipe(0);
    arr_pipe.push(pipe);

    // 구름 생성
    tmp += 1 
  if (tmp % 5 == 0) {
    cloud_height = (Math.floor(Math.random() * 6) + 1) * 10;
    var cloud = new Cloud(cloud_height);
    arr_cloud.push(cloud);
  }

    // 게임 캔버스에 그리기
    drawGame();
  }
}

// 게임 캔버스에 그리기 함수
function drawGame() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

  arr_pipe.forEach((a) => {
    a.x -= 10;
    a.draw();
    if (a.x < -1000) {
      arr_pipe.shift(0);
    }
  });

  

  // 구름 이동하기
  arr_cloud.forEach((a) => {
    a.x -= 1;
    a.draw();
    if (a.x < -1000) {
      arr_cloud.shift();
    }
  });

  const randomNumber = Math.floor(Math.random() * 3) + 1;
  enemy_timer += randomNumber;
  wait_timer += 1;

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
  if (enemy_timer % 80 == 0 && wait_timer > 80) {
    wait_timer = 0;
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
  arr_enemy.forEach((a, index) => {
    if (a.speedC == false) {
      a.x -= 10;
    } else {
      a.x -= speed;
    }
    a.draw(anime);
    collide(dino, a, a.y);
    if (a.x < -500) {
      arr_enemy.splice(index, 1);
      score += 10;
    }
  });
}

// 게임 루프 함수
function gameLoop(timestamp) {
  game = requestAnimationFrame(gameLoop);
  updateGame(timestamp);
  drawGame();
}

// 게임 루프 시작
gameLoop();
