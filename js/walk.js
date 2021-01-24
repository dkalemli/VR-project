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
  
        const snelheid = 250 * afstand;
        let speed = snelheid;
        
        if(afstand < 250){
          att.value = "property: position; dur: " + speed + "; easing: linear; to: " + this.getAttribute('position').x + " 5 " + this.getAttribute('position').z;
          console.log(att.value);
          camera.setAttribute('animation', att.value);
        }
  
        // console.log(this.getAttribute('position').x, this.getAttribute('position').z, camera.getAttribute("position").x, camera.getAttribute("position").z);
      });
    }
  };
  
  