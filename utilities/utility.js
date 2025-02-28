const days =  ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const dayName = days[new Date().getDay()];

document.getElementById('to-day').innerText = dayName

const today = new Date();
const formattedDate = today.toLocaleDateString('en-US', { 
    month: 'short', day: '2-digit', year: 'numeric' 
}).replace(',', ''); 
// console.log(formattedDate);

document.getElementById('to-date').innerText = formattedDate