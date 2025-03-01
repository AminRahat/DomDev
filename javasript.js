let totalTaskNumber = 23;
let taskAssigned = 6;

//Getting date and time
let currentDate = new Date();
let hour = currentDate.getHours();
let minutes = currentDate.getMinutes();
let seconds = currentDate.getSeconds();

let discover = document.querySelector(".discover");

let back = document.querySelector(".back");

let recordsList = "";

let completeButtons = Array.from(document.querySelectorAll(".complete"));
let taskNumber = document.querySelector(".task-number");
let totalTask = document.querySelector(".total-task");
let records = document.querySelector(".records");
let taskTitle;

let themeButton = document.querySelector(".theme-btn img");
let clearButton = document.querySelector(".clear");

function updateRecords() {
  clearButton.addEventListener("click", function () {
    recordsList = "";
    records.innerHTML = recordsList;
  });
}

function completed(e) {
  e.addEventListener("click", function () {
    window.alert("You have successfuly compleated the task");
    e.setAttribute("disabled", "");
    taskAssigned--;
    totalTaskNumber++;
    taskNumber.innerText = taskAssigned;
    totalTask.innerText = totalTaskNumber;

    TaskTitle = e.parentElement.parentElement.querySelector("h1").innerText;
    recordsList =
      recordsList +
      `<p class="p-4 rounded-2xl text-sm text-gray-500 bg-gray-200 mb-4">
              You have successfully completed the task ${TaskTitle} at ${hour}:${minutes}:${seconds}
            </p>`;
    records.innerHTML = recordsList;

    if (taskAssigned === 0) {
      window.alert(
        "You have successfully completed all your tasks, Well Done !!!!"
      );
    }
  });
}

for (i = 0; i < completeButtons.length; i++) {
  completed(completeButtons[i]);
}

// current date
function setDate() {
  document.querySelector(".date").innerText =
    currentDate.toLocaleDateString("en-us");
}

setDate();

// update random theme//

function setTheme() {
  randomColor = `rgb(${Math.random() * 256},${Math.random() * 256},${
    Math.random() * 256
  })`;
  document.body.style = `background-color:${randomColor}`;
}

themeButton.addEventListener("click", setTheme);
updateRecords();

// page navigation
discover.addEventListener("click", function () {
  window.location.href = "./index-2.html";
});

discover.style.cursor = "pointer";
