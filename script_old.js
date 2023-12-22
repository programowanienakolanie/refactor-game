function loadEnemy() {
  that = main.player.xp;
  switch (true) {
    case that < 10:
      level = 'level_1';
      break;
    case that < 100:
      level = 'level_2';
      break;
    case that < 500:
      level = 'level_3';
      break;
    case that < 1000:
      level = 'level_4';
      break;
    case that < 10000:
      level = 'level_5';
      break;
    case that > 10000:
      level = 'level_boss';
      break;
    default:
      level = 'level_1';
  }
  for (var i = 0; i < 5; i++) {
    enemy_type =
      main.levels[level].enemies[
        Math.floor(Math.random() * main.levels[level].enemies.length)
      ];
    enemyPlayer = document.createElement('img');
    enemyPlayer.enemyType = enemy_type;
    enemyPlayer.health = main.enemy[enemy_type].hp;
    enemyPlayer.ident = i;
    document.body.insertBefore(enemyPlayer, document.getElementById('player'));
    enemyPlayer.classList.add('enemy');
    enemyPlayer.src = main.enemy[enemy_type].image;
    enemyPlayer.style.top = '20vh';
    enemyPlayer.style.left = Math.random() * 100 + 'vw';
    enemyPlayer.position = enemyPlayer.style.left;
    setInterval(generateEnemyBullets, 777);
  }
}
function generateEnemy(identify) {
  that = main.player.xp;
  switch (true) {
    case that < 10:
      level = 'level_1';
      break;
    case that < 100:
      level = 'level_2';
      break;
    case that < 500:
      level = 'level_3';
      break;
    case that < 1000:
      level = 'level_4';
      break;
    case that < 10000:
      level = 'level_5';
      break;
    case that > 10000:
      level = 'level_boss';
      break;
    default:
      level = 'level_1';
  }
  enemy_type =
    main.levels[level].enemies[
      Math.floor(Math.random() * main.levels[level].enemies.length)
    ];
  enemyPlayer = document.createElement('img');
  enemyPlayer.enemyType = enemy_type;
  enemyPlayer.ident = identify;
  enemyPlayer.health = main.enemy[enemy_type].hp;
  document.body.insertBefore(enemyPlayer, document.getElementById('player'));
  enemyPlayer.classList.add('enemy');
  enemyPlayer.src = main.enemy[enemy_type].image;
  enemyPlayer.style.top = '20vh';
  enemyPlayer.style.left = Math.random() * 100 + 'vw';
  enemyPlayer.position = enemyPlayer.style.left;
  setInterval(generateEnemyBullets, 777);
}
function generateEnemyBullets(enemy_id) {
  for (enemy of document.getElementsByClassName('enemy')) {
    that = main.player.xp;
    switch (true) {
      case that < 10:
        level = 'level_1';
        break;
      case that < 100:
        level = 'level_2';
        break;
      case that < 500:
        level = 'level_3';
        break;
      case that < 1000:
        level = 'level_4';
        break;
      case that < 10000:
        level = 'level_5';
        break;
      case that > 10000:
        level = 'level_boss';
        break;
      default:
        level = 'level_1';
    }
    enemyBullet = document.createElement('img');
    document.body.insertBefore(enemyBullet, document.getElementById('player'));
    bullet_type = main.enemy[enemy.enemyType].bullets;
    enemyBullet.src = main.ballz[bullet_type].enemy;
    enemyBullet.classList.add('enemy_bullet');
    enemyBullet.style.bottom = '75vh';
    enemyBullet.style.left = enemy.position;
    setTimeout(() => {
      enemyBullet.style.transform = 'translateY(60vh)';
    }, 50);
    enemyBullet.addEventListener('transitionend', enemyShoot);
  }
}
function enemyShoot() {
  if (
    enemyBullet.getBoundingClientRect().x ==
    (100 * player.value) / window.innerWidth
  ) {
    if (main.player.health > 0) {
      main.player.health -= main.ballz[playerBullet.bulletType].dec_hp;
    } else {
      if (document.getElementById('hearts').innerText) {
        document.getElementById('hearts').innerHTML = document
          .getElementById('hearts')
          .innerHTML.slice(0, -1)
          .slice(0, -1);
        main.player.health = 100;
      } else {
        if ((popup = confirm('GAME OVER!!!'))) {
          location.reload();
        }
      }
    }
  } else {
  }
  for (bullet of document.getElementsByClassName('enemy_bullet')) {
    document.body.removeChild(bullet);
  }
}
function playerShoot() {
  for (enemy of document.getElementsByClassName('enemy')) {
    if (
      playerBullet.getBoundingClientRect().x ==
      enemyPlayer.getBoundingClientRect().x
    ) {
      if (enemy.health > 0) {
        main.player.xp += main.enemy[enemy.enemyType].inc_xp;
        enemy.health -= main.ballz[playerBullet.bulletType].dec_hp;
        break;
      } else {
        main.player.xp += main.enemy[enemy.enemyType].inc_xp;
        document.body.removeChild(enemy);
        generateEnemy(enemy.ident);
        break;
      }
    } else {
      continue;
    }
  }
  for (bullet of document.getElementsByClassName('player_bullet')) {
    document.body.removeChild(bullet);
  }
}
function interact(pos) {
  that = main.player.xp;
  switch (true) {
    case that < 10:
      level = 'level_1';
      break;
    case that < 100:
      level = 'level_2';
      break;
    case that < 500:
      level = 'level_3';
      break;
    case that < 1000:
      level = 'level_4';
      break;
    case that < 10000:
      level = 'level_5';
      break;
    case that > 10000:
      level = 'level_boss';
      break;
    default:
      level = 'level_1';
  }
  player = document.getElementById('player');
  player.style.setProperty('--image', 'url(' + main.levels[level].skin + ')');
  document
    .querySelector('*')
    .style.setProperty('--image2', 'url(' + main.levels[level].skin + ')');
  document.getElementById('exp').innerHTML = main.player.xp;
  document.getElementById('health').innerHTML = main.player.health;
  bullet_type = main.player.bullets;
  playerBullet = document.createElement('img');
  document.body.insertBefore(playerBullet, document.getElementById('player'));
  playerBullet.src = main.ballz[bullet_type].player;
  playerBullet.bulletType = bullet_type;
  playerBullet.classList.add('player_bullet');
  playerBullet.style.left = pos + 'vw';
  playerBullet.style.left = playerBullet.style.left - 16;
  playerBullet.style.bottom = '25vh';
  setTimeout(() => {
    playerBullet.style.transform = 'translateY(-55vh)';
  }, 50);
  playerBullet.addEventListener('transitionend', playerShoot);
}
