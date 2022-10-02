let localSTGLista = JSON.parse(localStorage.getItem("lista")) || [];
let lista = document.getElementById("lista");

const tarea = () => {
  let selector = document.getElementById("selector").value;
  tareasArray = [];
  let filtrarValor = localSTGLista.filter(
    (element) => element.tarea === selector
  );
  console.log(filtrarValor);

  if (selector !== "Lista de tareas") {
    if (filtrarValor.length === 0) {
      localSTGLista.forEach((element) => {
        tareasArray.push(element);
      });
      tareasArray.push({ id: tareasArray.length + 1, tarea: selector });

      localStorage.setItem("lista", JSON.stringify(tareasArray));
      location.href = "http://127.0.0.1:5500/ejercicio2.html";
    } else {
      alert("Esta tarea ya existe");
    }
  } else {
    alert("Lista de tareas no es una tarea");
  }
};
const RenderLista = () => {
  lista.innerHTML = localSTGLista
    .map(
      (element) =>
        `<li class="text-light d-flex mt-2"><p class="me-2"> ${element.tarea}</p><button onclick="eliminarTarea(${element.id})" style="width:1.5rem ;height:1.5rem"  type="button" class="btn btn-danger d-flex justify-content-center align-items-center p-0 m-0">x</button></li>`
    )
    .join("");
};

const eliminarTarea = (id) => {
  arrayDespuesEliminar = [];

  localSTGLista.splice(id - 1, 1);

  localSTGLista.forEach((element, i) => {
    element.id = i + 1;
    arrayDespuesEliminar.push(element);
  });
  localStorage.setItem("lista", JSON.stringify(arrayDespuesEliminar));
  location.href = "http://127.0.0.1:5500/ejercicio2.html";
};

RenderLista();
