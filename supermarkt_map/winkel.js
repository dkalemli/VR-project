window.onload = () =>{
  const places = document.getElementsByClassName('js--place');
  const camera = document.getElementById('js--camera');

  let pickups = document.getElementsByClassName('js--pickup');
  let hold = null;

  let placeholders = document.getElementsByClassName('js--placeholder');
  let scene = document.getElementById('js--scene');



// ======================================== al die kleine groene boxes oppakken =================================
  function addListeners() {
    for (let i = 0; i < pickups.length; i++) {
      pickups[i].addEventListener('click', function(evt){
        if (hold == null) {
          camera.innerHTML += '<a-box width="0.3" height="0.3" depth="0.3" class="js--pickup js--interact" color="green" position="0.7 -0.4 -1"></a-box>';
          hold = 1;
          this.remove();
        }
        else if (hold == 1) {
          camera.innerHTML += '<a-box width="0.3" height="0.3" depth="0.3" class="js--pickup js--interact" color="green" position="0.2 -0.4 -1"></a-box>';
          hold = 2;
          this.remove();
        }
        else if (hold == 2) {
          camera.innerHTML += '<a-box width="0.3" height="0.3" depth="0.3" class="js--pickup js--interact" color="green" position="-0.2 -0.4 -1"></a-box>';
          hold = 3;
          this.remove();
        }
        else if (hold == 3) {
          camera.innerHTML += '<a-box width="0.3" height="0.3" depth="0.3" class="js--pickup js--interact" color="green" position="-0.7 -0.4 -1"></a-box>';
          hold = 4;
          this.remove();
        }
      });
    }
  }

  addListeners();


// ======================================== die tafel op de boxes op te zetten =================================
  for (let i = 0; i < placeholders.length; i++) {
    placeholders[i].addEventListener('click', function(evt){
      if (hold == 4){
        this.innerHTML += '<a-box class="js--pickup js--interact" width="0.3" height="0.3" depth="0.3" color="green" position="0.3 0.65 0.3"></a-box>';
        this.innerHTML += '<a-box class="js--pickup js--interact" width="0.3" height="0.3" depth="0.3" color="green" position="0.3 0.65 -0.3"></a-box>';
        this.innerHTML += '<a-box class="js--pickup js--interact" width="0.3" height="0.3" depth="0.3" color="green" position="-0.3 0.65 0.3"></a-box>';
        this.innerHTML += '<a-box class="js--pickup js--interact" width="0.3" height="0.3" depth="0.3" color="green" position="-0.3 0.65 -0.3"></a-box>';
        camera.innerHTML = '<a-box position=" 0 -0.6 -1" height="0.1" width="2" depth="0.5" color="lightblue"></a-box>';
        hold = null;
      }
    });
  }




// ======================================== moevement speed =================================
  for (let i = 0; i < places.length; i++) {
    places[i].addEventListener('click', function(evt){
      let att = document.createAttribute("animation");

      var afstand = Math.sqrt(Math.pow((this.getAttribute('position').x - camera.getAttribute("position").x), 2) + Math.pow((this.getAttribute('position').z - camera.getAttribute("position").z), 2));
      // console.log(afstand);
      var snelheid = 333 * afstand;
      var speed = snelheid;
      // var speed = 1000;

      att.value = "property: position; dur: " + speed + "; easing: linear; to: " + this.getAttribute('position').x + " 1.6 " + this.getAttribute('position').z;
      camera.setAttribute('animation', att.value);

      // console.log(this.getAttribute('position').x, this.getAttribute('position').z, camera.getAttribute("position").x, camera.getAttribute("position").z);
    });
  }
};
