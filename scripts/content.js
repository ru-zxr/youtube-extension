var greeting = "hola, ";
var button = document.getElementsByClassName("banner__action button-text material-button");
button.person_name = "Roberto";

Array.from(button).forEach(function (element) {
    element.addEventListener('click', () => alert(greeting + button.person_name + "."), false);
});