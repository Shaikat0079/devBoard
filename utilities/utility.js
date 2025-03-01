const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
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

document.getElementById("clear-history").addEventListener("click",function(){
    const activityLog = document.getElementById("activity-log");
    for(const child of activityLog.children){
        child.style.display = "none"
    }
})