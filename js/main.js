console.log("running");
// const places = document.getElementsByClassName('js--place');
const camera = document.getElementById('js--camera');

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
let stoplicht = document.getElementById("js--stoplicht");
let rood = document.getElementById("js--stoplicht_rood");
let groen = document.getElementById("js--stoplicht_groen");
console.log(rood);
let scene = document.getElementById('js--scene');


function opGroen(){
    setTimeout(function(){
        rood.setAttribute('color', "black");
        groen.setAttribute('color', "green");  
        //Robot verschijnt aan overkant
        let cylinder = document.createElement('a-cylinder');
        cylinder.setAttribute("class", "js--place js--interact");
        cylinder.setAttribute("color", "red");
        cylinder.setAttribute("radius", "1.2");
        cylinder.setAttribute("height", "1");
        cylinder.setAttribute("position", {x: "-2", y: "1", z: "315"});
        scene.appendChild(cylinder);
        camera.innerHTML += '<a-obj-model scr="models/Robot.obj" mtl="models/Robot.mtl" position="2 -1 -2"></a-box>';


   }, 30000);
}

opGroen();


let tekst = document.getElementById("EersteOpmerking");
let robotPos = document.getElementById("js--robot");
function move(){
        robotPos.setAttribute('position', {x: 0, y: 1, z: 20});
    };

function Praten(){
    tekst.setAttribute("text", "value: hallo, ik ben Rob de robot. Wat leuk om jou als nieuwe vriend te hebben. Ik ga je vandaag helpen tijdens dit avontuur. Je hebt van je moeder een boodschappenlijstje gekregen. Nu is het tijd om naar de winkel te lopen.;");
    // setTimeout(function(){
    //     move();
    // }, 5000);
    
}


move();
Praten();












AFRAME.registerComponent("lopen", {
    init: function() {

        let loopAni = document.getElementById("js--robot");

        this.lopen = function() {
            then(loopAni.setAttribute('postion', {x: 0, y: 1, z: 20}));
        }
        this.el.addEventListener("mouseenter", this.planeet);
    },
    update: function() {
        this.lopen();
    },
    tick: function() {},
    remove: function() {},
    pause: function() {},
    play: function() {}
});

