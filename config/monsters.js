//monsters.js

// Definição do nível inicial dos monstros
let monsterLevels = 1;

// Array de inimigos
let enemiesEasy = [
    {
        type: "Orc Zombie",
        attack: 12,
        img: "../assets/img/monsters/zombie_orc.png",
        level: monsterLevels,
        l3ife: 20
    },
    {
        type: "Fire Demon",
        attack: 9,
        img: "../assets/img/monsters/zombie_orc.png",
        level: monsterLevels,
        life: 15
    },
    {
        type: "Imperial Thief",
        attack: 5,
        img: "../assets/img/monsters/assassin.png",
        level: monsterLevels,
        life: 13
    },
    {
        type: "Shadow Assassin",
        attack: 11,
        img: "../assets/img/monsters/shadow_assassin.png",
        level: monsterLevels,
        life: 14
    }
];

// Função para atualizar os monstros com base no nível
function updateMonsters(level) {
    if (level >= 5) {
        for (let i = 0; i < enemiesEasy.length; i++) {
            enemiesEasy[i].attack += 3;
        }
    }
}

// Chamada inicial para atualizar os monstros com base no nível inicial
updateMonsters(monsterLevels);


console.log(enemiesEasy[0]);