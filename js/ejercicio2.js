let localSTGLista = JSON.parse(localStorage.getItem("lista")) || [];
let lista = document.getElementById("lista");

const tarea = () => {
  let selector = document.getElementById("selector").value;
  tareasArray = [];

  if (selector !== "Lista de tareas") {
    localSTGLista.forEach((element) => {
      tareasArray.push(element);

      console.log(element);
    });
    tareasArray.push({ id: tareasArray.length + 1, tarea: selector });

    localStorage.setItem("lista", JSON.stringify(tareasArray));
    location.href = "http://127.0.0.1:5500/ejercicio2.html";
  } else {
    alert("Lista de tareas no es una tarea");
  }
};
const RenderLista = () => {
  lista.innerHTML = localSTGLista
    .map((element) => `<li class="text-light"> ${element.tarea}</li>`)
    .join("");
};

RenderLista();
