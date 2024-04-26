var page1 = document.getElementById("c1");
var page2 = document.getElementById("c2");
var submitButton = document.getElementById("submit-button");

submitButton.onclick = function() {
    page1.style.display = "none";
    page2.style.display = "flex";
};