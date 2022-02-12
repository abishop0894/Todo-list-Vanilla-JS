//capture user value

let form = document.getElementById("value");
let counter = 0;
let element;
let li;

let word = () => {
  let val = document.getElementById("val").value;
  console.log(val);
  counter++;
  let li = document.createElement("li");
  let text = document.createElement("h2");
  li.appendChild(text);
  let check = document.createElement("input");
  text.innerHTML = val;
  text.setAttribute("id", `${counter}`);
  check.setAttribute("type", "checkbox");
  check.setAttribute("id", `${counter}`);
  check.setAttribute("value", "Completed");
  check.setAttribute("name", "checkbox");
  text.appendChild(check);
  return val === ""
    ? alert("Please enter a task.")
    : document.getElementById("listAppend").appendChild(li);
};

form.addEventListener("submit", function (event) {
  event.preventDefault();
});

function identity(el, element) {
  addEventListener("mouseover", () => {
    if (isNaN(el.target.id) === false && el.target.id !== "") {
      element = el.target.id;
      console.log(element);
      return element;
    }
    return;
  });
  return element;
}
