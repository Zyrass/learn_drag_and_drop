const listLeft = document.querySelector("#list-left");
const listRight = document.querySelector("#list-right");

let draggable;

document.addEventListener("dragstart", (event) => {
  console.log(event);
  draggable = event.target;
  event.target.classList.add("drag");
  setTimeout(() => {
    event.target.classList.remove("drag");
  });
});

// document.addEventListener("drag", (event) => {
//   console.log("drag", event);
// });

document.addEventListener("dragend", (event) => {
  console.log("dragend", event);
});

// Section droite
listRight.addEventListener("dragenter", (event) => {
  console.log("dragenter", event);
  event.target.classList.add("drop-right");
});
listRight.addEventListener("dragleave", (event) => {
  console.log("dragleave", event);
  event.target.classList.remove("drop-right");
});
listRight.addEventListener("dragover", (event) => {
  event.preventDefault();
  console.log("dragover", event);
});
listRight.addEventListener("drop", (event) => {
  console.log("drop", event);
  listRight.appendChild(draggable);
  listRight.length();
});

// Section gauche
listLeft.addEventListener("dragenter", (event) => {
  console.log("dragenter", event);
  event.target.classList.add("drop-left");
});
listLeft.addEventListener("dragleave", (event) => {
  console.log("dragleave", event);
  event.target.classList.remove("drop-left");
});
listLeft.addEventListener("dragover", (event) => {
  event.preventDefault();
  console.log("dragover", event);
});
listLeft.addEventListener("drop", (event) => {
  console.log("drop", event);
  listLeft.appendChild(draggable);
});
