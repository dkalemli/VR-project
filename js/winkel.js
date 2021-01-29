const scene = document.getElementById('js--scene');
const camera = document.getElementById('js--camera');
const loopband = document.getElementById('js--pin-kassa');
const cassiere = document.getElementById("js--cassiere");
let bijKassa = document.getElementById("js--contant-kassa");
const uitgang = document.getElementById("js--uitgang");


let places = document.getElementsByClassName("js--place");
let process = 0;
const mandje = document.getElementsByClassName('js--mandje')
let mandje_hold = null;

let schapitems = document.getElementsByClassName("js--schapitem");

let item_hold = null;

let totaalbedrag = 0;
let saldo = 5.00;

let producten = document.getElementsByClassName("js--producten");


let banaan = document.getElementById("js--banaan");
let appel = document.getElementById("js--appel");
let sinaasappel = document.getElementById("js--sinaasappel");
let peer = document.getElementById("js--peer");
let aardbei = document.getElementById("js--aardbei");
let citroen = document.getElementById("js--citroen");
let melk = document.getElementById("js--melk");
let bloem_500g = document.getElementById("js--bloem_500g");
let bloem_1kg = document.getElementById("js--bloem_1kg");
let bloem_2kg = document.getElementById("js--bloem_2kg");
let cola_500mL = document.getElementById("js--cola_500mL");
let cola_1L = document.getElementById("js--cola_1L");
let cola_2L = document.getElementById("js--cola_2L");

var items_array = [
  [banaan, '<a-obj-model src="#banaan-obj" mtl="#banaan-mtl" rotation="0 -90 0"', 0.80, "banaan"],
  [appel, '<a-obj-model src="#appel-obj" mtl="#appel-mtl" rotation="0 0 0"', 0.65, "appel"],
  [sinaasappel, '<a-obj-model src="#sinaasappel-obj" mtl="#sinaasappel-mtl" rotation="0 0 0"', 1.10, "sinaasappel"],
  [peer, '<a-obj-model src="#peer-obj" mtl="#peer-mtl" rotation="0 0 0"', 1.00, "peer"],
  [aardbei, '<a-obj-model src="#aardbei-obj" mtl="#aardbei-mtl" rotation="0 0 0"', 0.30, "aardbei"],
  [citroen, '<a-obj-model src="#citroen-obj" mtl="#citroen-mtl" rotation="0 180 0"', 0.75, "citroen"],
  [bloem_500g, '<a-obj-model src="#bloem_500g-obj" mtl="#bloem_500g-mtl" rotation="0 0 0"', 0.50, "bloem_500g"],
  [bloem_1kg, '<a-obj-model src="#bloem_1kg-obj" mtl="#bloem_1kg-mtl" rotation="0 0 0"', 0.90, "bloem_1kg"],
  [bloem_2kg, '<a-obj-model src="#bloem_2kg-obj" mtl="#bloem_2kg-mtl" rotation="0 0 0"', 1.10, "bloem_2kg"],
  [cola_500mL, '<a-obj-model src="#cola_500mL-obj" mtl="#cola_500mL-mtl" rotation="0 0 0"', 0.75, "cola_500mL"],
  [cola_1L, '<a-obj-model src="#cola_1L-obj" mtl="#cola_1L-mtl" rotation="0 0 0"', 1.00, "cola_1L"],
  [cola_2L, '<a-obj-model src="#cola_2L-obj" mtl="#cola_2L-mtl" rotation="0 0 0"', 1.25, "cola_2L"]
];

var inMandArr = [];
var prijs_alle_items = [];

document.querySelector('a-scene').enterVR();


// ======================================= Uitleg ====================================
function Uitleg(){
  setTimeout(function(){
    const robotPraatWinkeluitleg1 = document.getElementById("js--voice-smUitleg1");
    robotPraatWinkeluitleg1.components.sound.playSound();
  }, 1000);
};




// ======================================== mandje pakken =================================
function pak_mandje() {
  for (let i = 0; i < mandje.length; i++) {
    mandje[i].addEventListener('click', function(evt){
      if (mandje_hold == null) {
        // camera.innerHTML += '<a-obj-model class="js--interact js--mandje" src="#mandje-obj" mtl="#mandje-mtl" position="0.5 -1 -1" scale="0.4 0.4 0.4" rotation="0 110 10"></a-obj-model>';
        camera = "";
        camera.innerHTML += '<a-cursor animation__click="property: scale; startEvents: click; easing: easeInCubic; dur: 150; from: 0.1 0.1 0.1; to: 1 1 1" animation__fusing="property: scale; startEvents: fusing; easing: easeInCubic; dur: 2000; from: 1 1 1; to: 0.1 0.1 0.1" animation="property: scale; startEvents: mouseleave; easing: easeInCubic; dur: 500; to: 1 1 1" cursor = "fuse: true; fuseTimeout: 2000" material = "color: black; shader: flat" geometry = "primitive: ring; radiusInner: 0.015; radiusOuter: 0.025" raycaster = "objects: .js--interact"> </a-cursor><a-text id="js--bedrag" width="1" height="1" color="black" opacity="1.0" font="https://cdn.aframe.io/fonts/Exo2SemiBold.fnt" position="0.5 0.35 -0.5" value="Bedrag: €5,-"></a-text><a-text id="js--productTitel" width="1" height="1" color="black" opacity="1.0" font="https://cdn.aframe.io/fonts/Exo2SemiBold.fnt" position="0.5 0.30 -0.5" value="Producten:"></a-text><a-text class="js--producten" width="1" height="1" color="black" opacity="1.0" font="https://cdn.aframe.io/fonts/Exo2SemiBold.fnt" position="0.5 0.25 -0.5"></a-text> <a-text class="js--producten" width="1" height="1" color="black" opacity="1.0" font="https://cdn.aframe.io/fonts/Exo2SemiBold.fnt" position="0.5 0.20 -0.5"> </a-text> <a-text class="js--producten" width="1" height="1" color="black" opacity="1.0" font="https://cdn.aframe.io/fonts/Exo2SemiBold.fnt" position="0.5 0.15 -0.5"></a-text> <a-text class="js--producten" width="1" height="1" color="black" opacity="1.0" font="https://cdn.aframe.io/fonts/Exo2SemiBold.fnt" position="0.5 0.10 -0.5"></a-text> <a-obj-model class="js--interact js--mandje" src="#mandje-obj" mtl="#mandje-mtl" position="0.15 -0.24 -0.2" scale="0.1 0.1 0.1" rotation="0 108 5"></a-obj-model>';
        setTimeout(function(){
          const robotPraatWinkeluitleg2 = document.getElementById("js--voice-smUitleg2");
          robotPraatWinkeluitleg2.components.sound.playSound();
        }, 1500);

        mandje_hold = 1;
        // banaan.classList.add("js--interact");
      }

      for (var i = 0; i < places.length; i++) {
        places[i].setAttribute('position', places[i].getAttribute('position').x + " -0.03 " + places[i].getAttribute('position').z);
      }


      productlijst = localStorage.getItem("productlijst");
      console.log(productlijst);
      convert_productlijst();
      add_js_interact();

      this.remove();
    });
  }
}
pak_mandje();



// ======================================== js--interact toevoegen aan items =================================
  function convert_productlijst() {
    productlijst = productlijst.split(",");
    console.log(productlijst);
  }

  function add_js_interact() {
    for (var i = 0; i < productlijst.length; i++) {

      for (var j = 0; j < items_array.length; j++) {
        if (items_array[j][3] == productlijst[i]) {
          items_array[j][0].classList.add("js--interact");
          console.log(items_array[j][0]);
          producten[i].setAttribute("value", items_array[j][3]);
        }
      }
    }
  }





// ======================================== schapitems in mandje zetten =================================
function geef_mini_item(schapitem) {
  for (var i = 0; i < items_array.length; i++) {
  if (items_array[i][0] == schapitem) {
    return items_array[i][1];
  }
}
}


  function geef_prijs_mee(schapitem) {
    for (var i = 0; i < items_array.length; i++) {
    if (items_array[i][0] == schapitem) {
      return items_array[i][2];
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
            let prijs = geef_prijs_mee(schapitems[i]);
            camera.innerHTML += hele_string;
            inMandArr[0] = halve_string + ' scale="0.9 0.9 0.9" position="2 2.45 0"></a-obj-model>';
            prijs_alle_items[0] = prijs;
            console.log(inMandArr);
            item_hold = 1;
            schapitems[i].setAttribute('position', "0 0 100");
            }

          else if (item_hold == 1){
            let halve_string = geef_mini_item(schapitems[i]);
            let hele_string = halve_string + ' scale="0.065 0.065 0.065" position="0.1 -0.15 -0.18"></a-obj-model>';
            let prijs = geef_prijs_mee(schapitems[i]);
            camera.innerHTML += hele_string;
            inMandArr[1] = halve_string + ' scale="0.9 0.9 0.9" position="1 2.45 0"></a-obj-model>';
            prijs_alle_items[1] = prijs;
            console.log(inMandArr);
            item_hold = 2;
            schapitems[i].setAttribute('position', "0 0 100");
            }

          else if (item_hold == 2){
            let halve_string = geef_mini_item(schapitems[i]);
            let hele_string = halve_string + ' scale="0.065 0.065 0.065" position="0.1 -0.11 -0.20"></a-obj-model>';
            camera.innerHTML += hele_string;
            let prijs = geef_prijs_mee(schapitems[i]);
            inMandArr[2] = halve_string + ' scale="0.9 0.9 0.9" position="0 2.45 0"></a-obj-model>';
            prijs_alle_items[2] = prijs;
            console.log(inMandArr);
            item_hold = 3;
            schapitems[i].setAttribute('position', "0 0 100");
            }

          else if (item_hold == 3){
            let halve_string = geef_mini_item(schapitems[i]);
            let hele_string = halve_string + ' scale="0.065 0.065 0.065" position="0.11 -0.12 -0.17"></a-obj-model>';
            camera.innerHTML += hele_string;
            let prijs = geef_prijs_mee(schapitems[i]);
            inMandArr[3] = halve_string + ' scale="0.9 0.9 0.9" position="-1 2.45 0"></a-obj-model>';
            prijs_alle_items[3] = prijs;
            console.log(inMandArr);
            item_hold = 4;
            schapitems[i].setAttribute('position', "0 0 100");
            }


            // schapitems[i].setAttribute('position', "0 0 100"); //niet remove maar wegteleporteren, omdat removen de volgorde van de array kapot maakt
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


// ======================================== AFREKENEN =================================
function totaalBerekenen(){
  for (var i = 0; i < inMandArr.length; i++) {
    totaalbedrag += prijs_alle_items[i];
  }
  totaalbedrag = totaalbedrag.toFixed(2);
  //totaalbedrag = Math.round(totaalbedrag);
  console.log("Dat wordt dan " + totaalbedrag + " euro");
  cassiere.innerHTML = '<a-text class="js--menu" width="2" height="2" color="black" opacity="1.0" font="https://cdn.aframe.io/fonts/Exo2SemiBold.fnt" position="1 2 0" rotation="0 110 0" value="Goedemiddag, dat wordt dan ' + totaalbedrag + ' euro alstublieft."></a-text>';
  setTimeout(function(){
    cassiere.innerHTML = "";
    cassiere.innerHTML += '<a-text class="js--menu" width="2" height="2" color="black" opacity="1.0" font="https://cdn.aframe.io/fonts/Exo2SemiBold.fnt" position="1 2 0" rotation="0 110 0" value="door een paar seconden naar mij te kijken kun je het geld aan mij geven."></a-text>';
  }, 3000);
  cassiere.addEventListener('click', function(evt){
    if(totaalbedrag <= saldo){
      console.log("Je hebt betaald. Dankjewel en tot ziens!");
      cassiere.innerHTML = "";
      cassiere.innerHTML += '<a-text class="js--menu" width="2" height="2" color="black" opacity="1.0" font="https://cdn.aframe.io/fonts/Exo2SemiBold.fnt" position="1 2 0" rotation="0 110 0" value="Je hebt betaald! Dankjewel en graag tot ziens."></a-text>';
      saldo = saldo - totaalbedrag;
      console.log("Saldo = " + saldo.toFixed(2));
      setTimeout(function(){
        bijKassa.innerHTML = "";
        cassiere.innerHTML = "";
        const robotPraatbetaald = document.getElementById("js--voice-naarUitgang");
        robotPraatbetaald.components.sound.playSound();
      }, 2500);

      uitgang.addEventListener('click', function(evt){
        setTimeout(function(){
          const robotPraatAfsluiting = document.getElementById("js--voice-afsluiting");
          robotPraatAfsluiting.components.sound.playSound();
        },3000);
      });

    }
    else if(totaalbedrag > saldo){
      console.log("Je hebt niet genoeg geld bij je");
    }
  });
}


function opLoopBand(){
  bijKassa.addEventListener('click', function(evt){
    camera.innerHTML = "";
    camera.innerHTML += '<a-entity animation__click="property: scale; startEvents: click; easing: easeInCubic; dur: 150; from: 0.1 0.1 0.1; to: 1 1 1" animation__fusing="property: scale; startEvents: fusing; easing: easeInCubic; dur: 2000; from: 1 1 1; to: 0.1 0.1 0.1" animation="property: scale; startEvents: mouseleave; easing: easeInCubic; dur: 500; to: 1 1 1" cursor = "fuse: true; fuseTimeout: 2000" material = "color: black; shader: flat" geometry = "primitive: ring; radiusInner: 0.007; radiusOuter: 0.01" position = "0 0 -0.5" raycaster = "objects: .js--interact; far: 30"></a-entity> '; //
    //camera.innerHTML += '<a-entity static gltf-model = "./blender/5euro.gltf"></a-entity> ';
    //camera.innerHTML += '<a-box color="red" position="0 -0.1 0"></a-box>  position="0 -0.1 0"></a-entity> ';
    console.log(camera.innerHTML);
    if (process == 0){
      for(let i = 0; i < inMandArr.length; i++){
        bijKassa.innerHTML += inMandArr[i];
      }
      setTimeout(function(){
        totaalBerekenen();
      }, 3000);
      process = 1;
    }
    else{
      console.log("Je hebt al betaald.")
    }
  });
}

function herhaalUitleg(){
  herhaalButton = document.getElementById("js--herhaalButton");
  herhaalButton.addEventListener('click', function(evt){
    const robotPraatAfsluiting = document.getElementById("js--voice-smUitleg2");
    robotPraatAfsluiting.components.sound.playSound();
  });
}
herhaalUitleg();
opLoopBand();
