// var h = document.createElement("h1"); // h1 create
// var myValue = document.createTextNode("Hello World"); // text content create
// h.appendChild(myValue); // <h1>text content</h1>
// document.querySelector("h1").appendChild(h);

var ul = document.getElementById("list");
var li;

var addButton = document.getElementById("add");
addButton.addEventListener("click", addItem);

var removeButton = document.getElementById("remove");
removeButton.addEventListener("click", removeItem);

function addItem() {
  var input = document.getElementById("input");
  var item = input.value;
  var textNode = document.createTextNode(item); // text content

  if (item == "") {
    alert("You entered nothing!!");
    return false;
  } else {
    // create li
    li = document.createElement("li"); // <li></li>

    // create checkbox
    var checkbox = document.createElement("input"); // <input>
    checkbox.type = "checkbox"; //  <input type="checkbox">
    checkbox.setAttribute("id", "check"); // <input type="checkbox" id="check">

    // create label
    var label = document.createElement("label"); //<label></label>
    // label.setAttribute("for", "list-item");

    ul.appendChild(label);
    li.appendChild(label);
    li.appendChild(checkbox);
    label.appendChild(textNode); //<label>text content</label>
    ul.insertBefore(li, ul.childNodes[0]);

    setTimeout(() => {
      li.className = "visual";
    }, 10);

    input.value = "";
  }
}

// funnction to remove item
function removeItem() {
  li = ul.children;
  for (let index = 0; index < li.length; index++) {
    while (li[index] && li[index].children[0].checked) {
      ul.removeChild(li[index]);
    }
  }
}
