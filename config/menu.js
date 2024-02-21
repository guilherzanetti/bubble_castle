//menu.js

// Elementos do menu
const btnPlay = document.querySelector('#play');
const btnGitHub = document.querySelector('#github');
const btnExit = document.querySelector('#exit');
const divMenu = document.querySelector('.firstMenu');
const divBoxName = document.querySelector('.nameBox');

// Elementos do menu de escolha de jogador
const divChoosePlayer = document.querySelector('.choosePlayer');
const wairrorBtn = document.querySelector('#wairrorBtn');
const archerBtn = document.querySelector('#archerBtn');
const fireMageBtn = document.querySelector('#fireMageBtn');

// Elementos do menu de escolha de nome
const nameBox = document.querySelector('.nameBox');
const playerName = document.querySelector('.textName');
const nameBtn = document.querySelector('.nameSend');

//Elementos do userUI

const userUI = document.querySelector('.IUuser');
const battleIU = document.querySelector('.battleIU');

// Elementos do Battle



//Som do menu
const btnSoundMenu = document.querySelectorAll('.soundMenu1');

btnSoundMenu.forEach(btn => {
    btn.addEventListener('click', () => {
        clickSound();

    })
});
// Evento de clique no botão "Play" para mostrar o menu de escolha de jogador
btnPlay.addEventListener('click', () => {
    menuNavigator(divMenu, divChoosePlayer);
});

// Seleção de personagens

document.addEventListener('DOMContentLoaded', function () {
    const wairrorBtn = document.querySelector('#wairrorBtn');
    const archerBtn = document.querySelector('#archerBtn');
    const fireMageBtn = document.querySelector('#fireMageBtn');

    wairrorBtn.addEventListener('click', function () {
        // Defina a classe do personagem como "Warrior"
        player.class = playerClass[1];
        player.weapon = weapon[1];
        console.log("Você escolheu o: " + player.class.classtype);
        console.log(player);
        divBoxName.style.display = "block";
        divChoosePlayer.style.display = "none";
        menuNavigator(divChoosePlayer, divBoxName);
    });

    archerBtn.addEventListener('click', function () {
        // Defina a classe do personagem como "Archer"
        player.class = playerClass[2];
        player.weapon = weapon[2];
        console.log("Você escolheu o: " + player.class.classtype);
        console.log(player);
        menuNavigator(divChoosePlayer, divBoxName);
    });

    fireMageBtn.addEventListener('click', function () {
        // Defina a classe do personagem como "Fire Mage"
        player.class = playerClass[0];
        player.weapon = weapon[0];
        console.log("Você escolheu o: " + player.class.classtype);
        console.log(player);
        menuNavigator(divChoosePlayer, divBoxName);
    });
});

// Evento de clique no botão de envio de nome
nameBtn.addEventListener('click', () => {
    const name = playerName.value;
    if (checkName(name)) {
        player.name = name;
        console.log(player.name);
        console.log(player);
        menuNavigator(nameBox, userUI);
    }
    letPlayer();
});

//Navegação para UserUI


// Função para verificar se o nome foi inserido
function checkName(name) {
    if (name === "") {
        alert('Please enter your name.');
        return false;
    }
    return true;
}

// Reproduzir som de clique
function clickSound() {
    const audio = new Audio('./assets/sounds/clickSound.mp3');
    const randomPitch = Math.random() + 0.5;
    audio.playbackRate = randomPitch;
    audio.play();

}

//menu navigator

function menuNavigator(close, open) {
    close.style.display = "none";
    open.style.display = "block";
}

