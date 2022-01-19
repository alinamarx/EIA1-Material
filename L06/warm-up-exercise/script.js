/*Übing A*/
function Alert() {
    alert("der Daumen");
}
;
window.addEventListener('load', function () {
    document.querySelector("#button1").addEventListener('click', Alert);
});
/*Übung B*/
var clicks = 0;
function Clicker() {
    clicks++;
    document.querySelector("#result").innerHTML = clicks;
}
window.addEventListener('load', function () {
    document.querySelector('#button2').addEventListener('click', Clicker);
});
//# sourceMappingURL=script.js.map