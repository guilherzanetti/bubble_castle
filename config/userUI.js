//userUI.js

const viewClass = document.querySelector('.viewClass');


//criar player para demonstrar na tela

function letPlayer() {
    const userImage = document.querySelector('.userIMG');
    const userNameElement = document.querySelector('.IUuser h1');
    let imgPatch = player.class.img;
    let userName = player.name;
    userImage.src = imgPatch;
    userNameElement.textContent = userName;
}

//Navegação menu



document.addEventListener('DOMContentLoaded', function () {
    const btnBattleMenu = document.querySelector('#btnBattle');
    const btnShopMenu = document.querySelector('#btnShop');
    const btnInventoryMenu = document.querySelector('#btnInventory');
    const btnWorkMenu = document.querySelector('#btnWork');

    btnBattleMenu.addEventListener('click', function () {
        console.log('funcionou');
        menuNavigator(userUI, battleIU);
    });

    btnShopMenu.addEventListener('click', function () {
       
        menuNavigator(userUI, battleIU);
    });

    btnInventoryMenu.addEventListener('click', function () {
        
        menuNavigator(userUI, battleIU);
    });

    btnWorkMenu.addEventListener('click', function () {
       
        menuNavigator(userUI, battleIU);
    });
});


