console.log("Hello World from javascript");
console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));
window.onload = function(){
    document.getElementById("currentDateTime").textContent = moment().format('MMMM Do YYYY, h:mm:ss a');
}