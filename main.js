function myFunction() {
  var node = document.createElement("LI");
  let name = document.querySelector("#name").value;
  var textnode = document.createTextNode(name);
  node.appendChild(textnode);
  document.getElementById("myList").appendChild(node);
}
