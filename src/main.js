import { createApp } from 'vue'
import App from './App.vue'
import App1 from './App1.vue'

import './index.css'

function loadCamera(){
    let landPage = document.getElementById("landPage");
    landPage.style = "display: none;";
    createApp(App).mount('#app')
}
function loadImage(){
    let landPage = document.getElementById("landPage");
    landPage.style = "display: none;";
    createApp(App1).mount('#app')
}

let btn = document.getElementById("cameraButton");
btn.addEventListener("click", loadCamera);

btn = document.getElementById("imageButton");
btn.addEventListener("click", loadImage);
