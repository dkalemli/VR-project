// console.log("running");
// const places = document.getElementsByClassName('js--place');
// const camera = document.getElementById('js--camera');

// let pickups = document.getElementsByClassName('js--pickup');
// let hold = null;

// let placeholders = document.getElementsByClassName('js--placeholder');
// let scene = document.getElementById('js--scene');

// let afstand = Math.sqrt((this.getAttribute('position').x - camera.x)*2 + (this.getAttribute('position').z - camera.z)*2)

// function addListeners(){
//     for (let i = 0; i < pickups.length; i++){
//         pickups[i].addEventListener('click', function(evt){
//             if (hold == null) {
//                 camera.innerHTML += '<a-box id="js--hold" class="js--pickup js--interact" color="green" position="1 -1 -1"></a-box>';
//                 hold = "box";
//                 this.remove();
//             }
//         });
//     }
// }

// addListeners();

// // for (let i = 0; i < pickups.length; i++){
// //     pickups[i].addEventListener('click', function(evt){
// //         if (hold == null) {
// //             camera.innerHTML += '<a-box id="js--hold" class="js--pickup js--interact" color="green" position="1 -1 -1"></a-box>';
// //             hold = "box";
// //             this.remove();
// //         }
// //     });
// // }

// let speedtime = 2000;

//     for (let i = 0; i < places.length; i++){
//     places[i].addEventListener('click', function(evt){
//         // camera.setAttribute('position', this.getAttribute('position').x + " 1.6 " + this.getAttribute('position').z);
//         let att = document.createAttribute("animation");
//         att.value = "property: position; easing: linear; dur: speedtime; to: " + this.getAttribute('position').x + " 1.6 " + this.getAttribute('position').z;
//         camera.setAt
//         tribute('animation', att.value);
//     });

// }


// for (let i = 0; i < placeholders.length; i++){
//     placeholders[i].addEventListener('click', function(evt){
//         if (hold == "box") {
//             let box = document.createElement('a-box');
//             box.setAttribute("class", "js--pickup js--interact");
//             box.setAttribute("color", "green");
//             box.setAttribute("position", {x: this.getAttribute('position').x, y:"0.5", z:this.getAttribute('position').z});
//             // let speed = this.getAttribute('position').x * this.getAttribute('position').x * this.getAttribute('position').z * this.getAttribute('position').z;
//             scene.appendChild(box);
//             document.getElementById("js--hold").remove();
//             addListeners();
//             hold = null;
//         }
//     });
// }
let auto = document.getElementsByClassName("rijden");
function RijdendeAutos(){
    auto.setAttribute("position", "8 1 0");
    setTimeout(function(){
        auto.setAttribute("position", "8 1 5");
    }, 200);
    setTimeout(function(){
        auto.setAttribute("position", "8 1 10");
    }, 200);
    setTimeout(function(){
        auto.setAttribute("position", "8 1 15");
    }, 200);
    setTimeout(function(){
        auto.setAttribute("position", "8 1 20");
    }, 200);
    setTimeout(function(){
        auto.setAttribute("position", "8 1 25");
    }, 200);

}
RijdendeAutos();
