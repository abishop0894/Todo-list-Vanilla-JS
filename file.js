//capture user value

let form = document.getElementById("value");
let counter = 0;

let word = () => {
  let val = document.getElementById("val").value;
  console.log(val);
  counter++;
  let li = document.createElement("li");
  li.innerHTML = val;
  li.setAttribute("id", `${counter}`);
  li.setAttribute("onclick", "rid();");
  let rid = (li) => {
    li.remove();
  };
  return val === ""
    ? alert("Please enter a task.")
    : document.getElementById("listAppend").appendChild(li);
};

form.addEventListener("submit", function (event) {
  event.preventDefault();
});
