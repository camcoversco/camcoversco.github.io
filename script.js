const LOADER = document.getElementById('js-loader');

const TRAY = document.getElementById('js-tray-slide');
const DRAG_NOTICE = document.getElementById('js-drag-notice');


const colors = [
  {
    shininess: 100, color: 'ba1111' //red
  },
  {
    shininess: 100, color: '1141ba' //blue
  },
  {
    shininess: 100, color: '090909' //black
  },
  {
    shininess: 100, color: 'eeeeee' //white
  },
  {
    shininess: 100, color: 'C0C0C0' //silver
  },
  {
    shininess: 100, color: '242526' //dark grey
  },
  {
    shininess: 100, color: '341948' //purple
  },
  {
    shininess: 100, color: 'FFD700' //yellow
  },
  {
    shininess: 100, color: 'fD7F20' //bronze
  },
  {
    shininess: 100, color: 'ADD8E6' //light bluew
  },
  {
    shininess: 100,
    color: '131417'
  },

  {
    shininess: 100,
    color: '374047'
  },

  {
    shininess: 100,
    color: '5f6e78'
  },

  {
    shininess: 100,
    color: '7f8a93'
  },

  {
    shininess: 100,
    color: '97a1a7'
  },

  {
    shininess: 100,
    color: 'acb4b9'
  },

  {
    shininess: 100,
    color: 'DF9998'
  },

  {
    shininess: 100,
    color: '7C6862'
  },

  {
    shininess: 100,
    color: 'A3AB84'
  },

  {
    shininess: 100,
    color: 'D6CCB1'
  },

  {
    shininess: 100,
    color: 'F8D5C4'
  },

  {
    shininess: 100,
    color: 'A3AE99'
  },

  {
    shininess: 100,
    color: 'EFF2F2'
  },

  {
    shininess: 100,
    color: 'B0C5C1'
  },

  {
    shininess: 100,
    color: '8B8C8C'
  },

  {
    shininess: 100,
    color: '565F59'
  },

  {
    shininess: 100,
    color: 'CB304A'
  },

  {
    shininess: 100,
    color: 'FED7C8'
  },

  {
    shininess: 100,
    color: 'C7BDBD'
  },

  {
    shininess: 100,
    color: '3DCBBE'
  },

  {
    shininess: 100,
    color: '264B4F'
  },

  {
    shininess: 100,
    color: '389389'
  },

  {
    shininess: 100,
    color: '85BEAE'
  },

  {
    shininess: 100,
    color: 'F2DABA'
  },

  {
    shininess: 100,
    color: 'F2A97F'
  },

  {
    shininess: 100,
    color: 'D85F52'
  },

  {
    shininess: 100,
    color: 'D92E37'
  },

  {
    shininess: 100,
    color: 'FC9736'
  },

  {
    shininess: 100,
    color: 'F7BD69'
  },

  {
    shininess: 100,
    color: 'A4D09C'
  },

  {
    shininess: 100,
    color: '4C8A67'
  },

  {
    shininess: 100,
    color: '25608A'
  },

  {
    shininess: 100,
    color: '75C8C6'
  },

  {
    shininess: 100,
    color: 'F5E4B7'
  },

  {
    shininess: 100,
    color: 'E69041'
  },

  {
    shininess: 100,
    color: 'E56013'
  },

  {
    shininess: 100,
    color: '11101D'
  },

  {
    shininess: 100,
    color: '630609'
  },

  {
    shininess: 100,
    color: 'C9240E'
  },

  {
    shininess: 100,
    color: 'EC4B17'
  },

  {
    shininess: 100,
    color: '281A1C'
  },

  {
    shininess: 100,
    color: '4F556F'
  },

  {
    shininess: 100,
    color: '64739B'
  },

  {
    shininess: 100,
    color: 'CDBAC7'
  },

  {
    shininess: 100,
    color: '946F43'
  },

  {
    shininess: 100,
    color: '66533C'
  },

  {
    shininess: 100,
    color: '173A2F'
  },

  {
    shininess: 100,
    color: '153944'
  },

  {
    shininess: 100,
    color: '27548D'
  },

  {
    shininess: 100,
    color: '438AAC'
  }
];

var theModel;

function openinsta() {
  window.open("https://www.instagram.com/camcovers.co/?hl=en");
}

const urlParams = new URLSearchParams(window.location.search);
const myParam = urlParams.get('car');

let MODEL_PATH = "";
let INITIAL_MAP = {};

// Initial material
const INITIAL_MTL = new THREE.MeshPhongMaterial({ color: 0x090909, shininess: 50 });
const INITIAL_ML = new THREE.MeshPhongMaterial({ color: 000000, shininess: 50 });

const PLASTIC = new THREE.MeshPhongMaterial({ color: 000000, shininess: 5 });
const TEXT = new THREE.MeshPhongMaterial({ color: 0xFFFFFF, shininess: 50 });

function selectOnChange() {
  var x = document.getElementById("engines").value;
  window.location.href = `https://camcoversco.github.io?car=${x}`
}

let scale = 1;

switch (myParam) {
  case "mx5":
    $(".amazon-links > ul").append(`<li><a href="https://geni.us/DressUpBolts">Dress Up Kit (Amazon)</a></li>`)
    $(".amazon-links > ul").append(`<li><a href="https://geni.us/EnginePaint">Engine Paint (Amazon)</a></li>`)
    $(".amazon-links > ul").append(`<li><a href="https://geni.us/qEpj">Oil Cap (Amazon)</a></li>`)
    $(".amazon-links > ul").append(`<li><a href="https://geni.us/BXgAo">Hoses (Amazon)</a></li>`)

    MODEL_PATH = "https://camcoversco.github.io/mx5.glb";

    let randomColour = colors[Math.floor(Math.random() * colors.length)];
    randomColour.color =  parseInt("0x" + randomColour.color);
    INITIAL_MAP = [
      { childID: "engine", mtl: new THREE.MeshPhongMaterial(randomColour) },
      { childID: "oilcap", mtl: TEXT },
      { childID: "oilcapblack", mtl: PLASTIC },
      { childID: "text", mtl: TEXT }
    ]
    scale = 1.5
    break;
  case "hondab":
    $(".amazon-links > ul").append(`<li><a href="https://geni.us/TowHook">Tow Hook (Amazon)</a></li>`)
    MODEL_PATH = "https://camcoversco.github.io/hondab.glb";
    INITIAL_MAP = [
      { childID: "engine", mtl: INITIAL_MTL },
      { childID: "text", mtl: TEXT }
    ]
    scale = 0.02;
    document.getElementById("oilcap").style.display = 'none';
    break;
  case "cosworth":
    MODEL_PATH = "https://camcoversco.github.io/cos.glb";
    INITIAL_MAP = [
      { childID: "engine", mtl: INITIAL_MTL },
      { childID: "text", mtl: TEXT }
    ]
    scale = 0.04;
    document.getElementById("oilcap").style.display = 'none';

    break;
  default:
    $(".amazon-links > ul").append(`<li><a href="https://geni.us/DressUpBolts">Dress Up Kit (Amazon)</a></li>`)
    $(".amazon-links > ul").append(`<li><a href="https://geni.us/EnginePaint">Engine Paint (Amazon)</a></li>`)
    $(".amazon-links > ul").append(`<li><a href="https://geni.us/qEpj">Oil Cap (Amazon)</a></li>`)
    $(".amazon-links > ul").append(`<li><a href="https://geni.us/BXgAo">Hoses (Amazon)</a></li>`)


    MODEL_PATH = "https://camcoversco.github.io/mx5.glb";
    let randomColour1 = colors[Math.floor(Math.random() * colors.length)];
    randomColour1.color =  parseInt("0x" + randomColour1.color);
    INITIAL_MAP = [
      { childID: "engine", mtl: new THREE.MeshPhongMaterial(randomColour1) },
      { childID: "oilcap", mtl: TEXT },
      { childID: "oilcapblack", mtl: PLASTIC },
      { childID: "text", mtl: TEXT }
    ]
    scale = 1.5;

}

console.log(myParam);



var activeOption = 'engine';
var loaded = false;





const BACKGROUND_COLOR = 0xf1f1f1;
// Init the scene
const scene = new THREE.Scene();
// Set background
scene.background = new THREE.Color(BACKGROUND_COLOR);
scene.fog = new THREE.Fog(BACKGROUND_COLOR, 20, 100);

const canvas = document.querySelector('#c');

// Init the renderer
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
renderer.gammaInput = true;
renderer.gammaOutput = true;
renderer.shadowMap.enabled = true;



renderer.setPixelRatio(window.devicePixelRatio);

var cameraFar = 5;

document.body.appendChild(renderer.domElement);

// Add a camerra
var camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = cameraFar;
camera.position.x = 0;
camera.position.y = camera.position.y + 3;




// Init the object loader
var loader = new THREE.GLTFLoader();

loader.load(MODEL_PATH, function (gltf) {
  theModel = gltf.scene;

  theModel.traverse(o => {
    if (o.isMesh) {
      o.castShadow = true;
      o.receiveShadow = true;
    }
  });

  // Set the models initial scale   
  theModel.scale.set(scale, scale, scale);
  theModel.rotation.y = Math.PI;

  // Offset the y position a bit
  theModel.position.y = -1;

  // Set initial textures
  for (let object of INITIAL_MAP) {
    initColor(theModel, object.childID, object.mtl);
  }

  // Add the model to the scene
  scene.add(theModel);

  // Remove the loader
  LOADER.remove();

}, undefined, function (error) {
  console.error(error);
});

// Function - Add the textures to the models
function initColor(parent, type, mtl) {
  parent.traverse(o => {
    if (o.isMesh) {
      if (o.name.includes(type)) {
        o.material = mtl;
        o.nameID = type; // Set a new property to identify this object
      }
    }
  });
}

// Add lights
var hemiLight = new THREE.HemisphereLight(0xffffff, 0xffffff, 0.61);
hemiLight.position.set(0, 50, 0);
// Add hemisphere light to scene   
scene.add(hemiLight);

var dirLight = new THREE.DirectionalLight(0xffffff, 0.54);
dirLight.position.set(-8, 12, 8);
dirLight.castShadow = true;
dirLight.shadow.mapSize = new THREE.Vector2(1024, 1024);
// Add directional Light to scene    
scene.add(dirLight);

// Floor
var floorGeometry = new THREE.PlaneGeometry(5000, 5000, 1, 1);
var floorMaterial = new THREE.MeshPhongMaterial({
  shininess: 90,
  color: 0xeeeeee,
});


var floor = new THREE.Mesh(floorGeometry, floorMaterial);
floor.rotation.x = -0.5 * Math.PI;
floor.receiveShadow = true;
floor.position.y = -1;
scene.add(floor);

// Add controls
var controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.maxPolarAngle = Math.PI / 2;
controls.minPolarAngle = Math.PI / 3;
controls.enableDamping = true;
controls.enablePan = false;
controls.dampingFactor = 0.1;
controls.autoRotate = false; // Toggle this if you'd like the chair to automatically rotate
controls.autoRotateSpeed = 0.2; // 30

function animate() {

  controls.update();
  renderer.render(scene, camera);
  requestAnimationFrame(animate);

  if (resizeRendererToDisplaySize(renderer)) {
    const canvas = renderer.domElement;
    camera.aspect = canvas.clientWidth / canvas.clientHeight;
    camera.updateProjectionMatrix();
  }

  if (theModel != null && loaded == false) {
    initialRotation();
    DRAG_NOTICE.classList.add('start');
  }
}

animate();

// Function - New resizing method
function resizeRendererToDisplaySize(renderer) {
  const canvas = renderer.domElement;
  var width = window.innerWidth;
  var height = window.innerHeight;
  var canvasPixelWidth = canvas.width / window.devicePixelRatio;
  var canvasPixelHeight = canvas.height / window.devicePixelRatio;

  const needResize = canvasPixelWidth !== width || canvasPixelHeight !== height;
  if (needResize) {

    renderer.setSize(width, height, false);
  }
  return needResize;
}

// Function - Build Colors

function buildColors(colors) {
  for (let [i, color] of colors.entries()) {
    let swatch = document.createElement('div');
    swatch.classList.add('tray__swatch');

    if (color.texture) {
      swatch.style.backgroundImage = "url(" + color.texture + ")";
    } else {
      swatch.style.background = "#" + color.color;
    }

    swatch.setAttribute('data-key', i);
    TRAY.append(swatch);
  }
}

buildColors(colors);

// Select Option
const options = document.querySelectorAll(".option");

for (const option of options) {
  option.addEventListener('click', selectOption);
}

function selectOption(e) {
  let option = e.target;
  activeOption = e.target.dataset.option;
  for (const otherOption of options) {
    otherOption.classList.remove('--is-active');
  }
  option.classList.add('--is-active');
}

// Swatches
const swatches = document.querySelectorAll(".tray__swatch");

for (const swatch of swatches) {
  swatch.addEventListener('click', selectSwatch);
}

function selectSwatch(e) {
  let color = colors[parseInt(e.target.dataset.key)];
  let new_mtl;

  if (color.texture) {

    let txt = new THREE.TextureLoader().load(color.texture);

    txt.repeat.set(color.size[0], color.size[1], color.size[2]);
    txt.wrapS = THREE.RepeatWrapping;
    txt.wrapT = THREE.RepeatWrapping;

    new_mtl = new THREE.MeshPhongMaterial({
      map: txt,
      shininess: color.shininess ? color.shininess : 10
    });


  } else {
    new_mtl = new THREE.MeshPhongMaterial({
      color: parseInt('0x' + color.color),
      shininess: color.shininess ? color.shininess : 10
    });



  }

  // var envMap = new THREE.TextureLoader().load('http://localhost/folder/envMap.png');
  // envMap.mapping = THREE.SphericalReflectionMapping;
  // new_mtl.envMap = envMap;
  // console.log(envMap);

  // var roughnessMap = new THREE.TextureLoader().load('http://localhost/folder/roughnessMap.png');
  // roughnessMap.magFilter = THREE.NearestFilter;
  // new_mtl.roughnessMap = roughnessMap;

  new_mtl.needsUpdate = true;

  setMaterial(theModel, activeOption, new_mtl);
}

function setMaterial(parent, type, mtl) {
  parent.traverse(o => {
    if (o.isMesh && o.nameID != null) {
      if (o.nameID == type) {
        o.material = mtl;
      }
    }
  });
}

// Function - Opening rotate
let initRotate = 0;

function initialRotation() {
  initRotate++;
  if (initRotate <= 120) {
    theModel.rotation.y += Math.PI / 60;
  } else {
    loaded = true;
  }
}

var slider = document.getElementById('js-tray'), sliderItems = document.getElementById('js-tray-slide'), difference;

function slide(wrapper, items) {
  var posX1 = 0,
    posX2 = 0,
    posInitial,
    threshold = 20,
    posFinal,
    slides = items.getElementsByClassName('tray__swatch');

  // Mouse events
  items.onmousedown = dragStart;

  // Touch events
  items.addEventListener('touchstart', dragStart);
  items.addEventListener('touchend', dragEnd);
  items.addEventListener('touchmove', dragAction);


  function dragStart(e) {
    e = e || window.event;
    posInitial = items.offsetLeft;
    difference = sliderItems.offsetWidth - slider.offsetWidth;
    difference = difference * -1;

    if (e.type == 'touchstart') {
      posX1 = e.touches[0].clientX;
    } else {
      posX1 = e.clientX;
      document.onmouseup = dragEnd;
      document.onmousemove = dragAction;
    }
  }

  function dragAction(e) {
    e = e || window.event;

    if (e.type == 'touchmove') {
      posX2 = posX1 - e.touches[0].clientX;
      posX1 = e.touches[0].clientX;
    } else {
      posX2 = posX1 - e.clientX;
      posX1 = e.clientX;
    }

    if (items.offsetLeft - posX2 <= 0 && items.offsetLeft - posX2 >= difference) {
      items.style.left = items.offsetLeft - posX2 + "px";
    }
  }

  function dragEnd(e) {
    posFinal = items.offsetLeft;
    if (posFinal - posInitial < -threshold) {

    } else if (posFinal - posInitial > threshold) {

    } else {
      items.style.left = posInitial + "px";
    }

    document.onmouseup = null;
    document.onmousemove = null;
  }

}

slide(slider, sliderItems);

/* Set the width of the side navigation to 270px */
function openNav() {
  document.getElementById("mySidenav").style.width = "270px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}