const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const dayName = days[new Date().getDay()];
// document.getElementById('to-day').innerText = dayName

function getID(id,inner) {
    // document.getElementById(id).innerText = inner;
    if(document.getElementById(id)){
      return  document.getElementById(id).innerText = inner;
    }else{
        return;
    }
    
}

// if(document.getElementById('to-day')){
//     document.getElementById('to-day').innerText = dayName
// }
// else{
//     console.log("!!!!")
// }
getID('to-day',dayName)
const today = new Date();
const formattedDate = today.toLocaleDateString('en-US', {
    month: 'short', day: '2-digit', year: 'numeric'
}).replace(',', '');
// console.log(formattedDate);

// document.getElementById('to-date').innerText = formattedDate;

// if(document.getElementById('to-date')){
//     document.getElementById('to-date').innerText = formattedDate;
// }else{
//     console.log("!!!!")
// }
getID('to-date',formattedDate )

let numberOfTasks = document.getElementsByClassName('card').length;

// document.getElementById("num-of-tasks").innerText = numberOfTasks;

// if(document.getElementById("num-of-tasks")){
//     document.getElementById("num-of-tasks").innerText = numberOfTasks;
// }else{
//     console.log("!!!!")
// }
getID('num-of-tasks',numberOfTasks)

// console.log(document.getElementsByClassName('cards'))
let taskTotallyCompleted;
if(document.getElementById("task-totally-completed")){
    taskTotallyCompleted = parseInt(document.getElementById("task-totally-completed").innerText)
}else{
    console.log("!!!!")
}

console.log(taskTotallyCompleted);
const buttons = document.querySelectorAll(".completed");

for (const button of buttons) {
    button.addEventListener("click", function () {
        const now = new Date();
        const time = now.toLocaleTimeString('en-US', { hour12: true });
        const card = button.closest(".card");
        const title = card.querySelector(".title").textContent;
        console.log(title)
        alert("Board Updated Successfully!");
        numberOfTasks--;
        taskTotallyCompleted++;
        console.log(taskTotallyCompleted)
        document.getElementById("num-of-tasks").innerText = numberOfTasks;
        button.classList.add("btn-disabled")
        document.getElementById("task-totally-completed").innerText = taskTotallyCompleted;
        // document.getElementById("activity-log").appendChild = `
        // <p class="bg-slate-50 p-4 my-2">
        //         You have completed the ${title} at ${time}
        //     </p>

        // `
        const div = document.createElement('div')
        div.innerHTML = `
          <p class="bg-slate-50 p-4 my-2">
              You have completed the ${title} at ${time}
        </p>
        `
        document.getElementById("activity-log").appendChild(div)

        if(numberOfTasks === 0){
            alert("Congrats you have Completed All the Current Tasks!")
        }
    })
}

// document.getElementById("clear-history").addEventListener("click",function(){
//     const activityLog = document.getElementById("activity-log");
//     for(const child of activityLog.children){
//         child.style.display = "none"
//     }
// })

if(document.getElementById("clear-history")){
    document.getElementById("clear-history").addEventListener("click",function(){
        const activityLog = document.getElementById("activity-log");
        for(const child of activityLog.children){
            child.style.display = "none"
        }
    })
}

// document.getElementById("discover").addEventListener("click",function(){
//     const element = document.getElementById("to-day");
//     element.remove()
//     window.location.replace("./blogs.html")
// })

if(document.getElementById("discover")){
    document.getElementById("discover").addEventListener("click",function(){
        const element = document.getElementById("to-day");
        element.remove()
        window.location.replace("./blogs.html")
    })
}


if(document.getElementById("back-to-desk")){
    document.getElementById("back-to-desk").addEventListener("click",function(event){
        event.preventDefault()
    
        window.location.href="./index.html"
    })
}else{
    console.log("!!!!")
}


if(document.getElementById("theme-generate")){
    document.getElementById("theme-generate").addEventListener("click", function() {
        // Generate a random hex color
        let randomColor = "#" + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
        
        // Dynamically update the body's background color
        document.getElementById("main-body").style.backgroundColor = randomColor;
    });
}