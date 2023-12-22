function getEnemyLevel(xp) {
  if (xp < 10) return 'level_1';
  if (xp < 100) return 'level_2';
  if (xp < 500) return 'level_3';
  if (xp < 1000) return 'level_4';
  if (xp < 10000) return 'level_5';
  if (xp > 10000) return 'level_boss';
  return 'level_1';
}

function createEnemy(enemyType, identifier) {
  let enemyPlayer = document.createElement('img');
  enemyPlayer.enemyType = enemyType;
  enemyPlayer.ident = identifier;
  enemyPlayer.health = main.enemy[enemyType].hp;
  enemyPlayer.classList.add('enemy');
  enemyPlayer.src = main.enemy[enemyType].image;
  enemyPlayer.style.top = '20vh';
  enemyPlayer.style.left = Math.random() * 100 + 'vw';
  enemyPlayer.position = enemyPlayer.style.left;

  document.body.insertBefore(enemyPlayer, document.getElementById('player'));
  setInterval(generateEnemyBullets, 777);
  return enemyPlayer;
}

function loadEnemy() {
  let level = getEnemyLevel(main.player.xp);
  for (let i = 0; i < 5; i++) {
    let enemyType =
      main.levels[level].enemies[
        Math.floor(Math.random() * main.levels[level].enemies.length)
      ];
    createEnemy(enemyType, i);
  }
}

function generateEnemy(identifier) {
  let level = getEnemyLevel(main.player.xp);
  let enemyType =
    main.levels[level].enemies[
      Math.floor(Math.random() * main.levels[level].enemies.length)
    ];
  createEnemy(enemyType, identifier);
}

function generateEnemyBullets(enemy_id) {
  const enemies = document.getElementsByClassName('enemy');

  for (const enemy of enemies) {
    let enemyBullet = document.createElement('img');
    enemyBullet.classList.add('enemy_bullet');
    enemyBullet.style.bottom = '75vh';
    enemyBullet.style.left = enemy.position;
    enemyBullet.src = main.ballz[main.enemy[enemy.enemyType].bullets].enemy;

    document.body.insertBefore(enemyBullet, document.getElementById('player'));

    setTimeout(() => {
      enemyBullet.style.transform = 'translateY(60vh)';
    }, 50);

    enemyBullet.addEventListener('transitionend', () =>
      enemyShoot(enemyBullet)
    );
  }
}

function enemyShoot(enemyBullet) {
  if (
    enemyBullet.getBoundingClientRect().x ===
    (100 * player.value) / window.innerWidth
  ) {
    main.player.health -= main.ballz[enemyBullet.bulletType].dec_hp;
    updateHealthDisplay();
    checkGameOver();
  }

  document.body.removeChild(enemyBullet);
}

function updateHealthDisplay() {
  document.getElementById('health').innerHTML = main.player.health;
}

function checkGameOver() {
  if (main.player.health <= 0) {
    main.player.health = 0;
    updateHealthDisplay();

    if (!document.getElementById('hearts').innerText) {
      if (confirm('GAME OVER!!!')) {
        location.reload();
      }
    }
  }
}

function playerShoot() {
  const enemies = document.getElementsByClassName('enemy');

  for (const enemy of enemies) {
    if (isBulletHitPlayerBullet(enemy)) {
      processEnemyHit(enemy);
      break;
    }
  }

  for (const bullet of document.getElementsByClassName('player_bullet')) {
    document.body.removeChild(bullet);
  }
}

function isBulletHitPlayerBullet(enemy) {
  return (
    playerBullet.getBoundingClientRect().x === enemy.getBoundingClientRect().x
  );
}

function processEnemyHit(enemy) {
  enemy.health -= main.ballz[playerBullet.bulletType].dec_hp;

  if (enemy.health <= 0) {
    main.player.xp += main.enemy[enemy.enemyType].inc_xp;
    document.body.removeChild(enemy);
    generateEnemy(enemy.ident);
  }
}

function interact(pos) {
  let level = getEnemyLevel(main.player.xp);
  updatePlayerAppearance(level, pos);
  updatePlayerStats();
}

function updatePlayerAppearance(level, pos) {
  let player = document.getElementById('player');
  player.style.setProperty('--image', 'url(' + main.levels[level].skin + ')');
  document
    .querySelector('*')
    .style.setProperty('--image2', 'url(' + main.levels[level].skin + ')');

  createPlayerBullet(pos);
}

function updatePlayerStats() {
  document.getElementById('exp').innerHTML = main.player.xp;
  document.getElementById('health').innerHTML = main.player.health;
}

function createPlayerBullet(pos) {
  let playerBullet = document.createElement('img');
  playerBullet.classList.add('player_bullet');
  playerBullet.style.left = pos + 'vw';
  playerBullet.style.bottom = '25vh';
  playerBullet.src = main.ballz[main.player.bullets].player;
  playerBullet.bulletType = main.player.bullets;

  document.body.insertBefore(playerBullet, document.getElementById('player'));

  setTimeout(() => {
    playerBullet.style.transform = 'translateY(-55vh)';
  }, 50);

  playerBullet.addEventListener('transitionend', playerShoot);
}
