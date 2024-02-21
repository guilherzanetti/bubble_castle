// Prayer variavéis
let userLife = 100;
let level = 1;
let weaponId = 0;
let classChange;

// weapon object
let weapon = [
    {
        type: "Staff of Fire",
        img: '',
        damage: 10,
    },
    {
        type: "Metal Sword",
        img: '',
        damage: 10,
    },
    {
        type: "Expert's Bow",
        img: '',
        damage: 15,
    }
];

// class object
let playerClass = [
    {
        classtype: "Fire Mage",
        race: "Human",
        attack: 12,
        mana: 15,
        weapon: weapon[0],
        img: '../assets/img/playerImg/fireMage.png',
    },
    {
        classtype: "Warrior",
        race: "Human",
        attack: 13,
        mana: 5,
        weapon: weapon[1],
        img: '../assets/img/playerImg/wairror.png',
    },
    {
        classtype: "Archer",
        race: "Human",
        attack: 11,
        mana: 10,
        weapon: weapon[2],
        img: '../assets/img/playerImg/archer.png',
    }
];

// Limites dos arrays
if (classChange === undefined || classChange < 0 || classChange >= playerClass.length) {
    classChange = 0;
}
if (weaponId < 0 || weaponId >= weapon.length) {
    weaponId = 0;
}
if (level < 0) {
    level = 0;
}

// player object

let player = {
    life: userLife,
    name: "",
    level: level,
    weapon: weapon[classChange],
    class: playerClass[classChange],
};

// inventory object

let inventory = []


console.log(player);