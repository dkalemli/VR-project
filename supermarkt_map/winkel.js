window.onload = () =>{
  const scene = document.getElementById('js--scene');
  const camera = document.getElementById('js--camera');
  let places = document.getElementsByClassName("js--place");

  const mandje = document.getElementsByClassName('js--mandje')
  let mandje_hold = null;

  const schapitems = document.getElementsByClassName("js--schapitem");

  let item_hold = null;




// ======================================== mandje pakken =================================
  function pak_mandje() {
    for (let i = 0; i < mandje.length; i++) {
      mandje[i].addEventListener('click', function(evt){
        if (mandje_hold == null) {
          // camera.innerHTML += '<a-obj-model class="js--interact js--mandje" src="#mandje-obj" mtl="#mandje-mtl" position="0.5 -1 -1" scale="0.4 0.4 0.4" rotation="0 110 10"></a-obj-model>';
          camera.innerHTML += '<a-obj-model class="js--interact js--mandje" src="#mandje-obj" mtl="#mandje-mtl" position="0.15 -0.24 -0.2" scale="0.1 0.1 0.1" rotation="0 108 5"></a-obj-model>';
          mandje_hold = 1;
        }

        for (var i = 0; i < places.length; i++) {
          places[i].setAttribute('position', places[i].getAttribute('position').x + " -0.03 " + places[i].getAttribute('position').z);
        }

        this.remove();
      });
    }
  }

pak_mandje();




// ======================================== schapitems in mandje zetten =================================
function zet_in_mandje() {
    for (let i = 0; i < schapitems.length; i++) {
      schapitems[i].addEventListener('click', function(evt){
          if (mandje_hold == 1) {


            schapitems[i].setAttribute('position', "0 -0.2 -2");
            console.log(schapitems[i]);
            // camera.innerHTML += schapitems[i];


            // this.remove();

        }
      });
    }
}

zet_in_mandje();




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




// ======================================== API =================================
