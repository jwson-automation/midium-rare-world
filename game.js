// 게임 루프 및 기타 함수들을 따로 분리한 파일

  background = new Image()
  background.src = 'background.png'

  arr_pipe = []


// 점수 업데이트 함수
function updateScore(score) {
    const scoreElement = document.getElementById('score');
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
    function collide(dino, enemy){
      var x_ = enemy.x - (dino.x + dino.width);
      var y_ = enemy.y - (dino.y + dino.height);
      if ( 50 < enemy.x && enemy.x < 100 && y_ < 0){
          console.log("collide!!")
          dino.draw3()
          cancelAnimationFrame(game)
        }
    }
   // 게임 루프 함수
   function gameLoop() {
    game = requestAnimationFrame(gameLoop);

    
    // 캔버스 지우기
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.drawImage(background,0, 0, canvas.width, canvas.height)

    if (timer % 10 == 0){
      var pipe = new Pipe
      arr_pipe.push(pipe)
    }

    arr_pipe.forEach((a) =>{ 
      a.x -= 10;
      a.draw();
      if (a.x < -1000){
        arr_pipe.shift(0)
      }
    })

    console.log(score)

    //timer
    timer++;

    // 디노 그리기
    if (timer % 10 == 0){
      if (flag == false){
        flag = true;
      }else{
        flag = false;
      }
    }

    if (flag){
      dino.draw()
    }else{
      dino.draw2()
    }

    // 디노 점프
    jump()
    
    // 장애물 생성
    if (timer % 50 == 0){
      var enemy = new Enemy
      arr_enemy.push(enemy)
    }
    
    // 장애물 이동하기
    arr_enemy.forEach((a) =>{ 
      a.x -= 10;
      a.draw();
      collide(dino, a)
      if (a.x < -1000){
        arr_enemy.shift(0)
        score += 10;
        updateScore(score)
      }
    })

    // 구름 생성
    if (timer % 60 == 0){
      var cloud = new Cloud
      arr_cloud.push(cloud)
    }
    
    console.log(arr_cloud)
    // 구름 이동하기
    arr_cloud.forEach((a) =>{ 
      a.x -= 10;
      a.draw();
      if (a.x < -1000){
        arr_cloud.shift()
      }
    })

  }

  // 게임 루프 시작
  gameLoop();

  // 키보드 이벤트 처리
  document.addEventListener('keydown', (event) => {
    if (event.key === ' ') {
      // 스페이스바 누르면 점프 시작
      if (!dino.isJumping & dino.jumpingEnd) {
        dino.isJumping = true;
        dino.jumpingEnd = false;
      }
    }
    if (event.key == 'f'){
      isJumping = false;
      jumpCount = 0;
      score = 0 
      updateScore(0)
      dinoY = groundY - dino.height;
      arr_enemy = []
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      requestAnimationFrame(gameLoop);
    }
  });
  