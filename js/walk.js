window.onload = () =>{
    const places = document.getElementsByClassName('js--place');
    const camera = document.getElementById('js--camera');
  
    let pickups = document.getElementsByClassName('js--pickup');
    let hold = null;
  
    const placeholders = document.getElementsByClassName('js--placeholder');
    let scene = document.getElementById('js--scene');
  
    function addListeners() {
      for (let i = 0; i < pickups.length; i++) {
        pickups[i].addEventListener('click', function(evt){
          if (hold == null) {
            camera.innerHTML += '<a-box id="js--hold" class="js--pickup js--interact" color="green" position="1 -1 -1"></a-box>';
            hold = "box";

            this.remove();
          }
        });
      }
    }
  
    addListeners();
  
    for (let i = 0; i < placeholders.length; i++) {
      placeholders[i].addEventListener('click', function(evt){
        if (hold == "box"){
          let box = document.createElement('a-box');
          box.setAttribute("class", "js--pickup js--interact");
          box.setAttribute("color", "green");
          box.setAttribute("position", {x: this.getAttribute('position').x, y:"6", z: this.getAttribute('position').z});

          scene.appendChild(box);
          document.getElementById("js--hold").remove();
          addListeners();
          hold = null;
        }
      });
    }
  
    // for (let i = 0; i < places.length; i++) {
    //   places[i].addEventListener('click', function(evt){
    //     let att = document.createAttribute("animation");
    //     att.value = "property: position; easing: linear; dur: 2000; to: " + this.getAttribute('position').x + " 1.6 " + this.getAttribute('position').z;
    //     camera.setAttribute('animation', att.value);
    //   });
    // }

    for (let i = 0; i < places.length; i++) {
      places[i].addEventListener('click', function(evt){
        let att = document.createAttribute("animation");
  
        var afstand = Math.sqrt(Math.pow((this.getAttribute('position').x - camera.getAttribute("position").x), 2) + Math.pow((this.getAttribute('position').z - camera.getAttribute("position").z), 2));
        console.log(afstand);
  
        const snelheid = 300 * afstand;
        let speed = snelheid;
        
        if(afstand < 30){
          att.value = "property: position; dur: " + speed + "; easing: linear; to: " + this.getAttribute('position').x + " 5 " + this.getAttribute('position').z;
          console.log(att.value);
          camera.setAttribute('animation', att.value);
          console.log(places[5]);
        }

        if(i == 16){
          console.log("ik ben bij het stoplicht.");
          opGroen();
        }

        if(i == 26){
          console.log("ik ga nu oversteken.");
          zebrapad();
          zebrapadB();
          zebrapadC();
          zebrapadD();
        }
  
        // console.log(this.getAttribute('position').x, this.getAttribute('position').z, camera.getAttribute("position").x, camera.getAttribute("position").z);
      });
    }
  

  //let stoplicht = document.getElementById("js--stoplicht");
  let rood = document.getElementById("js--stoplicht_rood");
  let groen = document.getElementById("js--stoplicht_groen");
  console.log(rood);
  //let scene = document.getElementById('js--scene');


  function opGroen(){
      setTimeout(function(){
          rood.setAttribute('color', "black");
          groen.setAttribute('color', "green");  
          //Robot verschijnt aan overkant
          let cylinder = document.getElementById("Cylinder");
          //cylinder.setAttribute("class", "js--place js--interact");
          //cylinder.setAttribute("color", "red");
          //cylinder.setAttribute("radius", "1.2");
          //cylinder.setAttribute("height", "1");
          cylinder.setAttribute("position", {x: "-2", y: "1.4", z: "315"});
          cylinder.setAttribute("rotation", {x: "-20", y: "0", z: "0"});

          //scene.appendChild(cylinder);
          //scene.innerHTML += '<a-cylinder class="js--place js--interact" color="red" height="1" radius="1.2" position="-2 1 293"></a-cylinder>';
          camera.innerHTML += '<a-obj-model scr="./models/Robot.obj" mtl="./models/Robot.mtl" position="2 -1 -2"></a-box>';


    }, 10000);
  }




  // AFRAME.registercomponent('auto', {
  //   init: function(){
  //     console.log("auto's rijden");
  //   },
  //   update: function(){
  //     auto.setAttribute("animation__rijden", "none");
  //     console.log("auto's zijn gestopt");
  //   }
  // })

  function zebrapad(){
  let remmen = document.getElementById("js--remmen");
  console.log(remmen);
  remmen.setAttribute("animation__stoppen", "dur: 100000; easing: linear; from:10 1 -320; to: 10 1 550; loop:-1; property:position");
  console.log(remmen);
    setTimeout(function(){
      remmen.setAttribute("animation__rijden", "dur: 15000; easing: linear; from:10 1 -320; to: 10 1 550; loop:-1; property:position");
    }, 10000);
  }

  function zebrapadB(){
    let remmenB = document.getElementById("js--remmenB");
    console.log(remmenB);
    remmenB.setAttribute("animation__stoppen", "dur: 100000; easing: linear; from:10 1 -320; to: 10 1 550; loop:-1; property:position");
    console.log(remmenB);
      setTimeout(function(){
        remmenB.setAttribute("animation__rijden", "dur: 20000; easing: linear; from:18 1 650; to: 18 1 -340; loop:-1; property:position");
      }, 10000);
  }

  function zebrapadC(){
  let remmenC = document.getElementById("js--remmenC");
  console.log(remmenC);
  remmenC.setAttribute("animation__stoppen", "dur: 100000; easing: linear; from:10 1 -320; to: 10 1 550; loop:-1; property:position");
  console.log(remmenC);
    setTimeout(function(){
      remmenC.setAttribute("animation__rijden", "dur: 20000; easing: linear; from:10 1 -340; to: 10 1 650; loop:-1; property:position");
    }, 10000);
  }

  function zebrapadD(){
  let remmenD = document.getElementById("js--remmenD");
  console.log(remmenD);
  remmenD.setAttribute("animation__stoppen", "dur: 100000; easing: linear; from:10 1 -320; to: 10 1 550; loop:-1; property:position");
  console.log(remmenD);
    setTimeout(function(){
      remmenD.setAttribute("animation__rijden", "dur: 15000; easing: linear; from:18 1 550; to: 18 1 -320; loop:-1; property:position");
    }, 10000);
  }



  const bijStoplicht = document.getElementsByClassName("opRood");

  // for (let i = 0; i < bijStoplicht.length; i++){
  //   bijStoplicht[i].addEventListener('click', function(evt){
  //     console.log("je bent bij het stoplicht aangekomen");
  //     opGroen();
//   });

const start = document.getElementById("js--menuStart");
function clickedStart(){
  start.addEventListener('click', function(evt){
    verwijderMenu();
  });
}

let menu = document.getElementsByClassName("js--menu");
function verwijderMenu(){
  console.log(menu);
  setTimeout(function(){
    for(let i = 0; i < menu.length; i++){
      console.log(menu[i]);
      menu[i].setAttribute("animation", "dur: 3000; easing: linear; to: -70 -50 -12.5; loop:0 ; property:position");
    }
    //menu.setAttribute("position", {x:0, y:-50, z:0});//Dit werkt
  }, 1000);
}
clickedStart();
};  