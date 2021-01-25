// --- SCROLL ---
// function scrollHome() {
//   window.scrollTo(0, 0);
// }
// function scrollServices() {
//   window.scrollTo(0, 860);
// }
// function scrollProjects() {
//   window.scrollTo(0, 1800);
// }
// function scrollTechnologies() {
//   window.scrollTo(0, 3700);
// }
// function scrollCourses() {
//   window.scrollTo(0, 3700);
// }

// --- CUSTOM CURSOR ---
const cursor = document.querySelector('.cursor');
    
document.addEventListener('mousemove', e => {
cursor.setAttribute("style", "top: "+(e.pageY - -8.5)+"px; left: "+(e.pageX - -2)+"px;")
});


// function letUsBegin() {
//   document.body.scrollBottom = 100;
//   document.documentElement.scrollBottom = 100;
// };

// --- TYPING TEXT ---
const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["Front-End developer  "];
const typingDelay = 100;
const erasingDelay = 100;
const newTextDelay = 900;
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
  	setTimeout(erase, newTextDelay);
  }
}

function erase() {
	if (charIndex > 0) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if(textArrayIndex>=textArray.length) textArrayIndex=0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function() {
  if(textArray.length) setTimeout(type, newTextDelay + 250);
});


// --- PARALLAX ---
var rellax = new Rellax('.rellax');


// --- BACK TO TOP ---
const myBtn = document.getElementById('myBtn');

window.onscroll = function() {
  scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 2000 || document.documentElement.scrollTop > 2000) {
    myBtn.style.visibility = "visible";
  } else {
    myBtn.style.visibility = "hidden";
  }
};

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};


// --- SELECT BOX ---
const options = document.querySelector('#options');
const contenidoSelect = document.querySelector('#select .contact-form__form--select-box--content-select');
const hiddenInput = document.querySelector('#inputSelect');
const select = document.querySelector('#select');
const option = document.querySelector('#option');
const icon = document.querySelector('#icon');

document.querySelectorAll('#options > .option').forEach((option) => {
  option.addEventListener('click', (e) => {
    e.preventDefault();
    contenidoSelect.innerHTML = e.currentTarget.innerHTML;
    options.classList.toggle('active');
    select.classList.toggle('focus');
    icon.classList.toggle('icon');
    document.getElementById('option').classList.remove("border");
    document.getElementById('option').classList.remove("border-bt");
    document.getElementById('title').classList.remove("hover");
    document.getElementById('select').classList.add("border-valid");
    document.getElementById('title').classList.add("title-valid");
    hiddenInput.value = e.currentTarget.querySelector('.contact-form__form--select-box--title-option').innerText;
  })
});

select.addEventListener('click', () => {
  options.classList.toggle('active');
});

select.addEventListener('click', () => {
  icon.classList.toggle('icon');
});

select.addEventListener('click', (e) => {
  select.classList.toggle('focus');
})


// --- VALIDATION FORMS ---
const $formulario = document.getElementById('form');
const $inputs = document.querySelectorAll('#form [required]');

const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
  telefono: /^\d{7,14}$/, // 7 a 14 numeros.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  mensaje:  /^[a-zA-ZÀ-ÿ\s_.+-,]{1,255}$/ // 1 a 255 caracteres.
}

const campos = {
	nombre: false,
	correo: false,
  telefono: false,
  mensaje: false,
}

const validarFormulario = (e) => {
  switch (e.target.name) {
    case "nombre": 
      if(expresiones.nombre.test(e.target.value)){
        document.getElementById('inputNombre').classList.remove('invalid');
        document.getElementById('inputNombre').classList.add('valid');
      } else {
        document.getElementById('inputNombre').classList.add('invalid');
        document.getElementById('inputNombre').classList.remove('valid');
      }
    break;
    case "telefono": 
      if(expresiones.telefono.test(e.target.value)){
        document.getElementById('inputTel').classList.remove('invalid');
        document.getElementById('inputTel').classList.add('valid');
      } else {
        document.getElementById('inputTel').classList.add('invalid');
        document.getElementById('inputTel').classList.remove('valid');
      }
    break;
    case "correo": 
      if(expresiones.correo.test(e.target.value)){
        document.getElementById('inputEmail').classList.remove('invalid');
        document.getElementById('inputEmail').classList.add('valid');
      } else {
        document.getElementById('inputEmail').classList.add('invalid');
        document.getElementById('inputEmail').classList.remove('valid');
      }
    break;
    case "mensaje": 
      if(expresiones.mensaje.test(e.target.value)){
        document.getElementById('inputMensaje').classList.remove('invalid');
        document.getElementById('inputMensaje').classList.add('valid');
      } else {
        document.getElementById('inputMensaje').classList.add('invalid');
        document.getElementById('inputMensaje').classList.remove('valid');
      }
    break;
  }
}

$inputs.forEach((input) => {
  input.addEventListener('keyup', validarFormulario);
  input.addEventListener('blur', validarFormulario);
});

$formulario.addEventListener('submit', (e) => {
  e.preventDefault();

    const exito = document.getElementById('exito');
    e.preventDefault();

    if(campos.usuario && campos.nombre && campos.mensaje && campos.correo) {
      
    } else {
      $formulario.reset();

      document.getElementById('mensaje-exito').classList.add('mensaje-exito-activo');
      document.getElementById('inputNombre').classList.remove('invalid');
      document.getElementById('inputNombre').classList.remove('valid');
      document.getElementById('inputTel').classList.remove('invalid');
      document.getElementById('inputTel').classList.remove('valid');
      document.getElementById('inputEmail').classList.remove('invalid');
      document.getElementById('inputEmail').classList.remove('valid');
      document.getElementById('inputMensaje').classList.remove('invalid');
      document.getElementById('select').classList.remove("border-valid");
      document.getElementById('title').classList.remove("title-valid");
      document.getElementById('inputMensaje').classList.remove('valid');
      document.getElementById('title').innerHTML = "Asunto";
      setTimeout(() => {
      document.getElementById('mensaje-exito').classList.remove('mensaje-exito-activo');
      }, 3000);
    }
});



let boton = document.getElementById("icono");
let enlaces = document.getElementById("enlaces");
const menu = document.querySelector('#menu');
const menu2 = document.querySelector('#menu2');
const menu3 = document.querySelector('#menu3');
const menu4 = document.querySelector('#menu4');
const menu5 = document.querySelector('#menu5');
const burger = document.querySelector('#burger');
let contador = 0;

boton.addEventListener("click",function(){
    if(contador === 0){
        enlaces.classList.add('dos');
        contador = 1;
    }else{
        enlaces.classList.remove('dos');
        enlaces.classList.add('uno');
        contador = 0;
    }
})

burger.addEventListener("click",function(){
    burger.classList.toggle('burger-open');
    burger.classList.toggle('burger-closed');
});

menu.addEventListener("click",function(){
    enlaces.classList.remove('dos');
    enlaces.classList.add('uno');
    burger.classList.toggle('burger-closed');
    burger.classList.toggle('burger-open');
})
menu2.addEventListener("click",function(){
    enlaces.classList.remove('dos');
    enlaces.classList.add('uno');
    burger.classList.toggle('burger-closed');
    burger.classList.toggle('burger-open');
})
menu3.addEventListener("click",function(){
    enlaces.classList.remove('dos');
    enlaces.classList.add('uno');
    burger.classList.toggle('burger-closed');
    burger.classList.toggle('burger-open');
})
menu4.addEventListener("click",function(){
    enlaces.classList.remove('dos');
    enlaces.classList.add('uno');
    burger.classList.toggle('burger-closed');
    burger.classList.toggle('burger-open');
})
menu5.addEventListener("click",function(){
    enlaces.classList.remove('dos');
    enlaces.classList.add('uno');
    burger.classList.toggle('burger-closed');
    burger.classList.toggle('burger-open');
})

window.addEventListener('resize', function(){
    if(screen.width > 750){
        contador=0;
        enlaces.classList.remove('dos');
        enlaces.className = ('enlaces uno');
    }
});


// --- NAV CHANGE COLORS ---
const navContainer = document.querySelector('.nav-container');
const nav = document.querySelector('#nav');

window.onscroll = function() {
  navFunction()
};

 function navFunction() {
   if (document.body.scrollTop < 10 || document.documentElement.scrollTop < 10) {
      nav.classList.remove('bg');
      nav.style.backgroundColor = "transparent";
      nav.style.transition = "all .2s";
    }
    if (document.body.scrollTop > 70 || document.documentElement.scrollTop > 70) {
      nav.classList.add('bg');
    }
    if (document.body.scrollTop > 670 || document.documentElement.scrollTop > 670) {
      nav.classList.remove('bg');
      nav.style.backgroundColor = "#29292C";
      nav.style.transition = "all .2s";
    }
    if (document.body.scrollTop > 1890 || document.documentElement.scrollTop > 1890) {
      nav.style.backgroundColor = "#202022";
      nav.style.transition = "all .2s";
    }
    if (document.body.scrollTop > 3740 || document.documentElement.scrollTop > 3740) {
      nav.style.backgroundColor = "#29292C";
      nav.style.transition = "all .2s";
    }
    if (document.body.scrollTop > 4480 || document.documentElement.scrollTop > 4480) {
      nav.style.backgroundColor = "#202022";
      nav.style.transition = "all .2s";
    }
    if (document.body.scrollTop > 6650 || document.documentElement.scrollTop > 6650) {
      nav.style.backgroundColor = "#29292C";
      nav.style.transition = "all .2s";
    }
  };