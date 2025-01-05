// Função para navegar entre menus
export function menuNavigator(close, open) {
    close.style.display = "none";
    open.style.display = "block";
}

// Função para reproduzir som de clique
export function clickSound() {
    const audio = new Audio('./assets/sounds/clickSound.mp3');
    const randomPitch = Math.random() + 0.5;
    audio.playbackRate = randomPitch;
    audio.play();
}

// Função para gerar números aleatórios
export function randomNumber(max) {
    return Math.floor(Math.random() * max);
}

// Função para verificar se o nome foi inserido
export function checkName(name) {
    if (name === "") {
        return false;
    }
    return true;
}