function acceptForm(){
    var name = document.getElementById("input-name").value;
    var surname = document.getElementById("input-surname").value;
    var favoriteanimal = document.getElementById("input-favanimal").value;

    document.getElementById("accept-result").innerText += "Hola, soy " + name + " " + surname + ". Mi animal favorito es: " + favoriteanimal;
}