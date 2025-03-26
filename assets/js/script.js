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