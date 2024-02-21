//battle.js

// SISTEMA DE BATALHA


function randomNumber() {
    return Math.floor(Math.random() * 3);
}
let enemieId = randomNumber(); 

//ENEMIE ATTACK

function enemieAttack() {
    let enemie = enemiesEasy[enemieId];  
    let enemieLife = enemie.life;
    console.log("Você esta lutando contra o: " + enemie.type);
    //    ATTACK
    let enemyDamage = Math.floor(Math.random() *enemie.attack);
    userLife -= enemyDamage; 
    console.log("id do monstro: " + enemieId); 
    console.log("Você recebeu :" + enemyDamage + " de dano!"); 
    console.log("vida atual: " + userLife);
    lifeCheck(userLife,enemieLife);
}

//PLAYER ATTACK

function playerAttack() {
    let playerDamage = Math.floor(Math.random() * player.weapon.damage);
    let enemieId = randomNumber();
    let enemie = enemiesEasy[enemieId];  
    let enemieLife = enemie.life;
    enemieLife -= playerDamage;

    console.log("id do monstro: " + enemieId); 
    console.log("Você deu :" + playerDamage + " de dano!"); 
    console.log("vida atual do monstro: " + enemieLife);
    lifeCheck(userLife, enemieLife);
}

playerAttack();

//NEW BATTLE

function newBattle(newEnemie) {
    
}


//LIFE CHECK

function lifeCheck(userLife, enemyLife){
    if(userLife <= 0){
        console.log("You won!");
    } else if (enemyLife <= 0) {
        console.log("You died!");
    }
}

//Back

const battleBackBtn = document.querySelector('.btnBackBattle');

function backUserIUBattle (){
    menuNavigator(battleIU, userUI);
}

battleBackBtn.addEventListener('click', () => {
    menuNavigator(battleIU, userUI);
})

