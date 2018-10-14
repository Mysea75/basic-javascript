console.log("Hello World from javascript");

// var moment = require('moment');
import moment from 'moment';

console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));
window.onload = ()=>{
    document.getElementById("currentDateTime").textContent = moment().format('MMMM Do YYYY, h:mm:ss a');
}

console.log("Is changes Occurs");
console.log("Is changed agian 123");