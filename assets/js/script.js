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

function light() {
    // document.getElementById("disco-tile").style.backgroundColor = "white";
    // document.getElementById("disco-buttons").style.backgroundColor = "white";
    // document.getElementById("disco-title").style.color = "black";
    document.documentElement.style.setProperty('--disco-black', 'rgb(17, 17, 17)');
    document.documentElement.style.setProperty('--disco-gray', 'rgb(100, 100, 100)');
    document.documentElement.style.setProperty('--disco-silver', 'rgb(200, 200, 200)');
    document.documentElement.style.setProperty('--disco-white', 'rgb(250, 250, 250)');
}

function dark () {
    // document.getElementById("disco-tile").style.backgroundColor = "black";
    // document.getElementById("light-btn").style.backgroundColor = "black";
    // document.getElementById("dark-btn").style.backgroundColor = "black";
    // document.getElementById("disco-btn").style.backgroundColor = "black";
    // document.getElementById("disco-title").style.color = "white";
    document.documentElement.style.setProperty('--disco-black', 'rgb(250, 250, 250)');
    document.documentElement.style.setProperty('--disco-gray', 'rgb(200, 200, 200)');
    document.documentElement.style.setProperty('--disco-silver', 'rgb(100, 100, 100)');
    document.documentElement.style.setProperty('--disco-white', 'rgb(17, 17, 17)');
}

function disco () {

}

lightBtn.addEventListener("click", light);
darkBtn.addEventListener("click", dark);