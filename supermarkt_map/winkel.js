window.onload = () =>{
  const scene = document.getElementById('js--scene');
  const camera = document.getElementById('js--camera');
  const loopband = document.getElementById('js--pin-kassa');
  let places = document.getElementsByClassName("js--place");
  let process = 0;
  const mandje = document.getElementsByClassName('js--mandje')
  let mandje_hold = null;

  let schapitems = document.getElementsByClassName("js--schapitem");

  let item_hold = null;

  let totaalbedrag = 0.00;
  let saldo = 5.00;


  let banaan = document.getElementById("js--banaan");
  let appel = document.getElementById("js--appel");
  let sinaasappel = document.getElementById("js--sinaasappel");
  let peer = document.getElementById("js--peer");
  let melk = document.getElementById("js--melk");

  var items_array = [
    [banaan, '<a-obj-model src="#banaan-obj" mtl="#banaan-mtl" rotation="0 90 0"', 0.80, "banaan"],
    [appel, '<a-obj-model src="#appel-obj" mtl="#appel-mtl" rotation="0 0 0"', 0.65, "appel"],
    [sinaasappel, '<a-obj-model src="#sinaasappel-obj" mtl="#sinaasappel-mtl" rotation="0 0 0"', 1.10, "sinaasappel"],
    [peer, '<a-obj-model src="#peer-obj" mtl="#peer-mtl" rotation="0 0 0"', 1.00, "peer"],
    [melk, '<a-box color="blue" width="1" height="1"', 1.50, "melk"]
  ];



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
  function geef_mini_item(schapitem) {
    for (var i = 0; i < items_array.length; i++) {
    if (items_array[i][0] == schapitem) {
      return items_array[i][1];
    }
  }
}


function zet_in_mandje() {
    for (let i = 0; i < schapitems.length; i++) {
      schapitems[i].addEventListener('click', function(evt){
          if (mandje_hold == 1) {

            if (item_hold == null){
              let halve_string = geef_mini_item(schapitems[i]);
              let hele_string = halve_string + ' scale="0.065 0.065 0.065" position="0.1 -0.15 -0.22"></a-obj-model>';
              camera.innerHTML += hele_string;
              item_hold = 1;
              }

            else if (item_hold == 1){
              let halve_string = geef_mini_item(schapitems[i]);
              let hele_string = halve_string + ' scale="0.065 0.065 0.065" position="0.1 -0.15 -0.18"></a-obj-model>';
              camera.innerHTML += hele_string;
              item_hold = 2;
              }

            else if (item_hold == 2){
              let halve_string = geef_mini_item(schapitems[i]);
              let hele_string = halve_string + ' scale="0.065 0.065 0.065" position="0.1 -0.11 -0.20"></a-obj-model>';
              camera.innerHTML += hele_string;
              item_hold = 3;
              }

            else if (item_hold == 3){
              let halve_string = geef_mini_item(schapitems[i]);
              let hele_string = halve_string + ' scale="0.065 0.065 0.065" position="0.11 -0.11 -0.16"></a-obj-model>';
              camera.innerHTML += hele_string;
              item_hold = 4;
              }


              schapitems[i].setAttribute('position', "0 0 100"); //niet remove maar wegteleporteren, omdat removen de volgorde van de array kapot maakt
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

  // ======================================== API =================================


  // ======================================== AFREKENEN =================================
  function opLoopBand(){
    const bijKassa = document.getElementById("js--contant-kassa");
    bijKassa.addEventListener('click', function(evt){
      console.log("Je bent bij de kassa aangekomen");
      //schapitems[i].setAttribute('position', "-2 1 12");

      if (process == 0){
        let nummer = 3;
        for(let i = 0; i < items_array.length; i++){
          halve_string = geef_mini_item(schapitems[i]);
          hele_string = halve_string + ' position="'+nummer+' 2.45 0" scale="0.9" ></a-obj-model>';
          // camera.innerHTML += "'"+hele_string+"'";
          bijKassa.innerHTML += hele_string; //<a-box color="red" width="0.8" position="'+ nummer+ ' 2 0"></a-box>';
          nummer -= 1;
          totaalbedrag = totaalbedrag + items_array[i][2];
          console.log(items_array[i][3] + ": " + items_array[i][2]);
          console.log(hele_string);
        }
      }
      else{
        console.log("Je hebt al betaald.")
      }
      process = 1;
      console.log("Dat wordt dan " + totaalbedrag + " euro");
      if(totaalbedrag <= saldo){
        console.log("Betaling akkoord");
        saldo = saldo - totaalbedrag;
        console.log("Saldo = " + saldo.toFixed(2));
      }
      else if(totaalbedrag > saldo){
        console.log("Je hebt niet genoeg saldo");
      }

    });
  }
  opLoopBand();
};
