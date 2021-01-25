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
        
        if(afstand < 250){
          att.value = "property: position; dur: " + speed + "; easing: linear; to: " + this.getAttribute('position').x + " 5 " + this.getAttribute('position').z;
          console.log(att.value);
          camera.setAttribute('animation', att.value);
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
          cylinder.setAttribute("position", {x: "-2", y: "1", z: "315"});
          //scene.appendChild(cylinder);
          //scene.innerHTML += '<a-cylinder class="js--place js--interact" color="red" height="1" radius="1.2" position="-2 1 293"></a-cylinder>';
          camera.innerHTML += '<a-obj-model scr="./models/Robot.obj" mtl="./models/Robot.mtl" position="2 -1 -2"></a-box>';


    }, 30000);
  }

opGroen();
};


function zebrapad(){
  remmen = document.getElementsByClassName("js--remmen");
  remmen.removeAttribute("animation__rijden");
  setTimeout(function(){
    remmen.setAttribute("animation__rijden", "dur: 15000; easing: linear; from:10 1 -320; to: 10 1 550; loop:-1; property:position");
  }, 50000);
}
  
  