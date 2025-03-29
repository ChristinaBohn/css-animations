// 4. Floating Clouds
document.addEventListener("DOMContentLoaded", () => {
    const sky = document.getElementById("sky");
    const cloudNum = 40;

    function createClouds(){
        const cloud = document.createElement("img");
        const randomSize = Math.random() * 400 + 400;
        cloud.style.width = randomSize + "px";
        cloud.src = "/assets/images/cloud.png";
        sky.appendChild(cloud);
        cloud.classList.add("cloud");
    }
    for (let i = 0; i < cloudNum; i++) {
        createClouds();
    }
})

// 5. Disco Mode
const lightBtn = document.getElementById("light-btn");
const darkBtn = document.getElementById("dark-btn");
const discoBtn = document.getElementById("disco-btn");
const discoTile = document.getElementById("disco-tile");

function light() {
    discoTile.classList.remove("animate-disco");
    document.documentElement.style.setProperty('--disco-black', 'rgb(17, 17, 17)');
    document.documentElement.style.setProperty('--disco-gray', 'rgb(100, 100, 100)');
    document.documentElement.style.setProperty('--disco-silver', 'rgb(200, 200, 200)');
    document.documentElement.style.setProperty('--disco-white', 'rgb(250, 250, 250)');
}

function dark () {
    discoTile.classList.remove("animate-disco");
    document.documentElement.style.setProperty('--disco-black', 'rgb(250, 250, 250)');
    document.documentElement.style.setProperty('--disco-gray', 'rgb(200, 200, 200)');
    document.documentElement.style.setProperty('--disco-silver', 'rgb(100, 100, 100)');
    document.documentElement.style.setProperty('--disco-white', 'rgb(17, 17, 17)');
}

function disco () {
    discoTile.classList.add("animate-disco");
}

lightBtn.addEventListener("click", light);
darkBtn.addEventListener("click", dark);
discoBtn.addEventListener("click", disco);