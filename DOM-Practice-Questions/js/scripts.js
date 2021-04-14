let first = document.getElementById("almaz");
console.log(first.textContent);
alert(first.textContent);
//2
let ababeElment = document.querySelector("#abebe");
let kebdeElment = document.querySelector("#kebede");
kebdeElment.textContent = ababeElment.textContent;
//3
document.getElementById("challa").addEventListener("click", function () {
  var abebeElement = document.querySelector("#abebe");
  var kebedeElement = document.querySelector("#kebede");
  kebedeElement.textContent = abebeElement.textContent;
});