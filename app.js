miStorage = window.localStorage;
var name = document.getElementById('nombre')
var listaNombres = document.getElementById('lista-nombres')
var button = document.getElementById('InsetarNombre')

localStorage.setItem(name, name);

button.addEventListener("click", function(){
    localStorage.setItem(listaNombres)
    console.log(name)
})
