let localSTGJugar = JSON.parse(localStorage.getItem("idJugar")) || { id: 1 };
let localSTGValor = JSON.parse(localStorage.getItem("idValor")) || { id: 0 };
let localSTGNumero = JSON.parse(localStorage.getItem("numeroAleatorio")) || {
  numero: 0,
};

const RenderJuego = () => {
  let contenedor = document.getElementById("bodyJuego");
  contenedor.innerHTML = `    <div class="container d-flex flex-column align-items-center">
      <h1 class="text-center text-primary mt-3">Juegue a adivinar un número del uno al diez</h1>
      <button type="button" class="btn btn-danger mt-5" onclick="numeroAleatorio()" id="btnComenzar">
        Comenzar el juego
      </button>

      <form class="d-flex mt-5">
        <div class="me-3">
          <label for="exampleInputEmail1" class="form-label text-light ms-5"
            ></label
          >
          <input
            type="text"
            class="form-control "
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div class="d-flex align-items-end">
        <button id="btnEnviar" type="button" class="btn btn-success" onclick="adivinar()">Enviar</button>
      </form></div>
    </div>`;
};

const numeroAleatorio = () => {
  numero = localStorage.setItem(
    "numeroAleatorio",
    JSON.stringify({
      numero: parseInt(Math.floor(Math.random() * (10 - 1 + 1) + 1)),
    })
  );
  localStorage.setItem("idJugar", JSON.stringify({ id: 0 }));
  localStorage.setItem("idValor", JSON.stringify({ id: 1 }));
  location.href = "http://127.0.0.1:5500/ejercicio1.html";
};

const adivinar = () => {
  let valueNumberString = document.getElementById("exampleInputEmail1").value;
  let valueNumber = parseInt(
    document.getElementById("exampleInputEmail1").value
  );

  if (valueNumber === localSTGNumero.numero) {
    localStorage.setItem("idValor", JSON.stringify({ id: 0 }));
    localStorage.setItem("idJugar", JSON.stringify({ id: 1 }));
    alert("Has adivinado");

    location.href = "http://127.0.0.1:5500/ejercicio1.html";
  } else if (valueNumber > 10 || valueNumber < 1) {
    alert("Debe ser un número del 1 al 10");
  } else if (valueNumber > localSTGNumero.numero) {
    alert("Es mayor al número a adivinar");
  } else if (
    Number.isNaN(valueNumber) === true ||
    valueNumber.toString().length < valueNumberString.length
  ) {
    alert(
      "No se pueden poner  caracteres que no sean números , números que no sean números enteros y números a través de operaciones"
    );
  } else {
    alert("Es menor al número a adivinar");
  }
};

const botonesHabilitados = () => {
  let btnComenzar = document.getElementById("btnComenzar");
  let inputNumber = document.getElementById("exampleInputEmail1");
  let btnEnviar = document.getElementById("btnEnviar");
  if (localSTGJugar.id === 0) {
    btnComenzar.style.display = "none";
  }
  if (localSTGValor.id === 0) {
    inputNumber.style.display = "none";
    btnEnviar.style.display = "none";
  }
};
RenderJuego();
botonesHabilitados();
