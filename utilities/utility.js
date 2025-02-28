const days =  ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const dayName = days[new Date().getDay()];

document.getElementById('to-day').innerText = dayName

const today = new Date();
const formattedDate = today.toLocaleDateString('en-US', { 
    month: 'short', day: '2-digit', year: 'numeric' 
}).replace(',', ''); 
// console.log(formattedDate);

document.getElementById('to-date').innerText = formattedDate;

let numberOfTasks = document.getElementsByClassName('card').length;

document.getElementById("num-of-tasks").innerText = numberOfTasks;

// console.log(document.getElementsByClassName('cards'))


let taskTotallyCompleted = parseInt(document.getElementById("task-totally-completed").innerText)
console.log(taskTotallyCompleted);
const buttons = document.querySelectorAll(".completed");

for(const button of buttons){
    button.addEventListener("click",function(){
        alert("Board Updated Successfully!");
        numberOfTasks--;
        taskTotallyCompleted++;
        console.log(taskTotallyCompleted)
        document.getElementById("num-of-tasks").innerText = numberOfTasks;
        button.classList.add("btn-disabled")
        document.getElementById("task-totally-completed").innerText= taskTotallyCompleted;
    })
}