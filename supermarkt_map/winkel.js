window.onload = () =>{
  const scene = document.getElementById('js--scene');
  const camera = document.getElementById('js--camera');
  let places = document.getElementsByClassName("js--place");

  let mandje = document.getElementsByClassName('js--mandje')
  let mandje_hold = null;


// ======================================== mandje pakken =================================
  function pak_mandje() {
    for (let i = 0; i < mandje.length; i++) {
      mandje[i].addEventListener('click', function(evt){
        if (mandje_hold == null) {
          mandje_hold = 1;
          camera.innerHTML += '<a-obj-model class="js--interact js--mandje" src="#mandje-obj" mtl="#mandje-mtl" position="0 -1 -1.3" scale="0.4 0.4 0.4" rotation="-20 180 0"></a-obj-model>';
        }

        console.log("eerst hier");
        for (var i = 0; i < places.length; i++) {
          places[i].setAttribute('position', places[i].getAttribute('position').x + " 0 " + places[i].getAttribute('position').z);
          console.log("hij komt hier langs");
        }
      });
    }
  }

pak_mandje();


// ======================================== al die kleine groene boxes oppakken =================================
  // function addListeners() {
  //   for (let i = 0; i < pickups.length; i++) {
  //     pickups[i].addEventListener('click', function(evt){
  //       if (hold == null) {
  //         camera.innerHTML += '<a-box width="0.3" height="0.3" depth="0.3" class="js--pickup js--interact" color="green" position="0.7 -0.4 -1"></a-box>';
  //         hold = 1;
  //         this.remove();
  //       }
  //       else if (hold == 1) {
  //         camera.innerHTML += '<a-box width="0.3" height="0.3" depth="0.3" class="js--pickup js--interact" color="green" position="0.2 -0.4 -1"></a-box>';
  //         hold = 2;
  //         this.remove();
  //       }
  //       else if (hold == 2) {
  //         camera.innerHTML += '<a-box width="0.3" height="0.3" depth="0.3" class="js--pickup js--interact" color="green" position="-0.2 -0.4 -1"></a-box>';
  //         hold = 3;
  //         this.remove();
  //       }
  //       else if (hold == 3) {
  //         camera.innerHTML += '<a-box width="0.3" height="0.3" depth="0.3" class="js--pickup js--interact" color="green" position="-0.7 -0.4 -1"></a-box>';
  //         hold = 4;
  //         this.remove();
  //       }
  //     });
  //   }
  // }
  //
  // addListeners();


// ======================================== die tafel op de boxes op te zetten =================================
  // for (let i = 0; i < placeholders.length; i++) {
  //   placeholders[i].addEventListener('click', function(evt){
  //     if (hold == 4){
  //       this.innerHTML += '<a-box class="js--pickup js--interact" width="0.3" height="0.3" depth="0.3" color="green" position="0.3 0.65 0.3"></a-box>';
  //       this.innerHTML += '<a-box class="js--pickup js--interact" width="0.3" height="0.3" depth="0.3" color="green" position="0.3 0.65 -0.3"></a-box>';
  //       this.innerHTML += '<a-box class="js--pickup js--interact" width="0.3" height="0.3" depth="0.3" color="green" position="-0.3 0.65 0.3"></a-box>';
  //       this.innerHTML += '<a-box class="js--pickup js--interact" width="0.3" height="0.3" depth="0.3" color="green" position="-0.3 0.65 -0.3"></a-box>';
  //       camera.innerHTML = '<a-box position=" 0 -0.6 -1" height="0.1" width="2" depth="0.5" color="lightblue"></a-box>';
  //       hold = null;
  //     }
  //   });
  // }




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
