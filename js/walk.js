    const places = document.getElementsByClassName('js--place');
    const camera = document.getElementById('js--camera');

    let pickups = document.getElementsByClassName('js--pickup');
    let hold = null;

    const placeholders = document.getElementsByClassName('js--placeholder');
    let scene = document.getElementById('js--scene');

    let weer;
    let description;
    const sky = document.getElementById('js--AchtergrSound');


    //const apiURL = api.openweathermap.org/data/2.5/weather?q={Leiden}&appid={f436657e0412a098a9f7906c7dc0b3ff};
    function getWeather(){
      fetch('http://api.openweathermap.org/data/2.5/weather?q=Leiden&appid=f436657e0412a098a9f7906c7dc0b3ff')
        .then(Response => Response.json())
        .then(data => weer = data.weather[0].main);
    }
    function setSky(){
      console.log("Het weer is: " + weer);
      if(weer == "Clouds"){
        sky.setAttribute("src", "#Clouds");
        sky.setAttribute("position", "0 100 0");
      }
      else if(weer == "Thunderstorm"){
        sky.setAttribute("src", "#Clouds");
        sky.setAttribute("position", "0 100 0");
      }
      else if(weer == "Drizzle"){
        sky.setAttribute("src", "#Clouds");
        sky.setAttribute("position", "0 100 0");
      }
      else if(weer == "Rain"){
        sky.setAttribute("src", "#Clouds");
        sky.setAttribute("position", "0 100 0");
      }
      else if(weer == "Clear"){
        sky.setAttribute("src", "#Clear");
        sky.setAttribute("rotation", "0 -180 -90");
        sky.setAttribute("position", "0 0 0");
      }
      else{
        sky.setAttribute("src", "#lucht");
      }
    }
    getWeather();

    setTimeout(function(){
      setSky();
    }, 5000);



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
    //const naar120 = document.getElementsById("js--loopNaar120");

    for (let i = 0; i < places.length; i++) {
      places[i].addEventListener('click', function(evt){
        let att = document.createAttribute("animation");

        var afstand = Math.sqrt(Math.pow((this.getAttribute('position').x - camera.getAttribute("position").x), 2) + Math.pow((this.getAttribute('position').z - camera.getAttribute("position").z), 2));
        console.log(afstand);

        const snelheid = 125 * afstand;
        let speed = snelheid;

        if(afstand < 35){
          att.value = "property: position; dur: " + speed + "; easing: linear; to: " + this.getAttribute('position').x + " 7 " + this.getAttribute('position').z;
          console.log(att.value);
          camera.setAttribute('animation', att.value);
          console.log(places[5]);
        }

        if(i == 1){
          setTimeout(function(){
            robotKennismaking();
            robotPraat = document.getElementById("js--robot");
            robotPraat.components.sound.playSound();
          }, 3000);
        }

        if(i == 2){
          skySound = document.getElementById("js--AchtergrSound");
          skySound.components.sound.playSound();
          robotPraat.components.sound.stopSound();
          setTimeout(function(){
            robotInBeeld();
            voiceBuiten = document.getElementById("js--voice-buiten");
            voiceBuiten.components.sound.playSound();
          }, 2000);
        }

        if(i == 3){
          if(afstand < 35){
            att.valueTegel4 = "property: position; dur: " + 10000 + "; easing: linear; to: -2 5 120";
            console.log(att.valueTegel4);
            camera.setAttribute('animation', att.valueTegel4);
          }
        }

        if(i == 5){
          if(afstand < 35){
            att.valueTegel4 = "property: position; dur: " + 12000 + "; easing: linear; to: -2 5 285";
            console.log(att.valueTegel4);
            camera.setAttribute('animation', att.valueTegel4);
          }
        }

        if(i == 7){
          console.log("ik ben bij het stoplicht.");
          setTimeout(function(){
            voiceStoplicht = document.getElementById("js--voice-stoplicht");
            voiceStoplicht.components.sound.playSound();
          }, 2000);
          opGroen();
        }

        if(i == 9){
          if(afstand < 35){
            att.valueTegel4 = "property: position; dur: " + 14000 + "; easing: linear; to: -2 5 415";
            console.log(att.valueTegel4);
            camera.setAttribute('animation', att.valueTegel4);
          }
        }

        if(i == 11){
          if(afstand < 35){
            att.valueTegel4 = "property: position; dur: " + 8000 + "; easing: linear; to: -2 5 460";
            console.log(att.valueTegel4);
            camera.setAttribute('animation', att.valueTegel4);
          }
        }

        if(i == 12){
          setTimeout(function(){
            voiceOversteken = document.getElementById("js--voice-oversteken");
            console.log("praten");
            voiceOversteken.components.sound.playSound();
          }, 3000);
        }

        if(i == 13){
          console.log("ik ga nu oversteken.");
          zebrapad();
          zebrapadB();
          zebrapadC();
          zebrapadD();
        }

        if(i == 14){
          setTimeout(function(){
            voiceAangekomen = document.getElementById("js--voice-aangekomen");
            voiceAangekomen.components.sound.playSound();
          }, 1000);
        }

        // console.log(this.getAttribute('position').x, this.getAttribute('position').z, camera.getAttribute("position").x, camera.getAttribute("position").z);
      });
    }

  function robotKennismaking(){

  }
  function robotInBeeld(){
    console.log("Robot is ontzichtbaar");
    //camera.innerHTML += '<a-obj-model src="./models/Robot.obj" mtl="./models/Robot.mtl" position="5 -3 -8" rotation="0 270 0"></a-obj-model>';
  }

  function uitlegVoorlezen(){
    voiceUitleg = document.getElementById("js--menuVoorlezen");
    voiceUitleg.addEventListener('click', function(evt){
      let menuSound = document.getElementById("js--menuSound");
      menuSound.components.sound.stopSound();
      voiceUitleg.components.sound.playSound();
    });
  }

  uitlegVoorlezen();


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
          //camera.innerHTML += '<a-obj-model scr="./models/Robot.obj" mtl="./models/Robot.mtl" position="2 -1 -2"></a-obj-model>';
    }, 20000);
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

let tegelEen = document.getElementById("js--appear");
function eersteTegel(){
  tegelEen.setAttribute("position", {x:"-60", y:"1.4", z:"-5"});
}

const start = document.getElementById("js--menuStart");
function clickedStart(){
  start.addEventListener('click', function(evt){
    verwijderMenu();
  });
}

const verken = document.getElementById("js--menuVerken");
function clickedVerken(){
  verken.addEventListener('click', function(evt){
    camera.setAttribute("position", {x:"0", y:"125", z:"175"})
  });
}

const startHoog = document.getElementById("js--StartHoog");
function clickedStartHoog(){
  startHoog.addEventListener('click', function(evt){
    verwijderMenu();
    camera.setAttribute("position", {x:"-70", y:"7", z:"8"})
  });
}


// const verken = document.getElementById("js--menuVerken");
// function clickedStart(){
//   verken.addEventListener('click', function(evt){
//     verwijderMenu();
//     camera.setAttribute("position", "0 100 0");
//     let menuSound = document.getElementById("js--menuSound");
//     menuSound.components.sound.stopSound();
//   });
// }

let menu = document.getElementsByClassName("js--menu");
function verwijderMenu(){
  console.log(menu);
  setTimeout(function(){
    let menuSound = document.getElementById("js--menuSound");
    menuSound.components.sound.stopSound();
    for(let i = 0; i < menu.length; i++){
      console.log(menu[i]);
      menu[i].setAttribute("animation", "dur: 3000; easing: linear; to: -70 -50 -12.5; loop:0 ; property:position");
      eersteTegel();
    }
    //menu.setAttribute("position", {x:0, y:-50, z:0});//Dit werkt
  }, 1000);
}

// Klik op moeder om een boodschappenlijstje te krijgen
const bedrag = document.getElementById('js--bedrag');
const productTitel = document.getElementById('js--productTitel');
let moeder = document.getElementById("js--moeder");
let producten = document.getElementsByClassName("js--producten");
let boodschappenlijst = ["banaan", "appel", "aardbei", "sinaasappel", "citroen", "peer", "bloem_500g", "bloem_1kg", "bloem_2kg", "cola_500mL", "cola_1L", "cola_2L"];

function clickedMoeder(){
  moeder.addEventListener('click', function(evt){
    let nummer = 11;
    let gekozenProducten = [];

    for (i = 0; i < producten.length; i++) {
      let productNummer = Math.floor(Math.random() * nummer) + 1;
      gekozenProducten.push(boodschappenlijst[productNummer]);

      const j = boodschappenlijst.indexOf(boodschappenlijst[productNummer]);
      boodschappenlijst.splice(j, 1);

      nummer -= 1;
    }

    /////////////////////
    geef_lijst_door(gekozenProducten);
    /////////////////////

    for (i = 0; i < producten.length; i++) {
      producten[i].setAttribute("value", gekozenProducten[i]);
    }

    bedrag.setAttribute("position", {x:"3.75", y:"2.25", z:"-3"});
    productTitel.setAttribute("position", {x:"3.75", y:"2", z:"-3"});

  });
}


clickedStart();
clickedVerken();
clickedStartHoog();
clickedMoeder();



function geef_lijst_door(producten) {
  localStorage.setItem('productlijst', producten);
}
