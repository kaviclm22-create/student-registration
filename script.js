function addTask() {

    let taskInput = document.getElementById("taskInput");

    let task = taskInput.value;

    if (task === "") {
        alert("Please enter a task");
        return;
    }

    let li = document.createElement("li");

    li.innerHTML =
        task +
        ' <button onclick="deleteTask(this)">Delete</button>';

    document.getElementById("taskList").appendChild(li);

    taskInput.value = "";
}

function deleteTask(button) {

    button.parentElement.remove();
}

function countdown() {

    let examDate =
        new Date(document.getElementById("examDate").value);

    let today = new Date();

    let difference = examDate - today;

    let days =
        Math.ceil(difference / (1000 * 60 * 60 * 24));

    if (days > 0) {

        document.getElementById("result").innerHTML =
            days + " Days Remaining";

    } else {

        document.getElementById("result").innerHTML =
            "Exam Date Passed";
    }
}

let goals =
    document.querySelectorAll(".goal");

goals.forEach(function(goal) {

    goal.addEventListener("change", updateProgress);

});

function updateProgress() {

    let totalGoals = goals.length;

    let completedGoals =
        document.querySelectorAll(".goal:checked").length;

    let percentage =
        (completedGoals / totalGoals) * 100;

    document.getElementById("progressBar").value =
        percentage;

    document.getElementById("progressText").innerHTML =
        percentage + "% Completed";
}