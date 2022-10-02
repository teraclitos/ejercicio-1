let localSTGLista = JSON.parse(localStorage.getItem("lista")) || [];
console.log(localSTGLista);
const tarea = () => {
  let selector = document.getElementById("selector").value;
  tareasArray = [];
  localSTGLista.forEach((element) => {
    tareasArray.push(element);
    console.log(element);
  });
  tareasArray.push({ tarea: selector });

  localStorage.setItem("lista", JSON.stringify(tareasArray));
  location.href = "http://127.0.0.1:5500/ejercicio2.html";
};
