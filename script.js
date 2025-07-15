const ramos = [
  { nombre: "Matemática I", id: "mat1" },
  { nombre: "Química", id: "quim" },
  { nombre: "Biología", id: "bio" },
  { nombre: "Física", id: "fis" },
  { nombre: "Computación", id: "comp" },
  // Puedes agregar más ramos aquí
];

const malla = document.getElementById("malla");

ramos.forEach((ramo) => {
  const div = document.createElement("div");
  div.classList.add("ramo");
  div.textContent = ramo.nombre;
  div.id = ramo.id;

  // Click izquierdo: marcar como aprobado
  div.addEventListener("click", () => {
    div.classList.toggle("aprobado");
    div.classList.remove("reprobado");
  });

  // Click derecho: marcar como reprobado
  div.addEventListener("contextmenu", (e) => {
    e.preventDefault();
    div.classList.toggle("reprobado");
    div.classList.remove("aprobado");
  });

  malla.appendChild(div);
});
