const add = document.querySelectorAll(".add");
add.forEach((e) => {
  e.addEventListener("click", () => {
    const p = e.previousElementSibling.lastElementChild;
    const additem = e.firstElementChild;
    const rmvitem = e.lastElementChild;

    e.classList.toggle("none");
    additem.classList.toggle("hide");
    rmvitem.classList.toggle("hide");
    p.classList.toggle("show");
  });
});
