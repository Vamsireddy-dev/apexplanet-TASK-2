document.getElementById("contactForm").addEventListener("submit", function(event) {

    event.preventDefault();

    var name = document.getElementById("name").value.trim();
    var email = document.getElementById("email").value.trim();
    var message = document.getElementById("message").value.trim();
    var formMessage = document.getElementById("formMessage");

    var emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (name === "" || email === "" || message === "") {
        formMessage.style.color = "red";
        formMessage.innerText = "All fields are required!";
        return;
    }

    if (!email.match(emailPattern)) {
        formMessage.style.color = "red";
        formMessage.innerText = "Enter a valid email!";
        return;
    }

    formMessage.style.color = "green";
    formMessage.innerText = "Form submitted successfully!";
});

function addTask() {

    var taskInput = document.getElementById("taskInput");
    var taskValue = taskInput.value.trim();

    if (taskValue === "") {
        alert("Enter a task");
        return;
    }

    var li = document.createElement("li");
    li.innerHTML = taskValue + 
        "<button onclick='removeTask(this)'>Delete</button>";

    document.getElementById("taskList").appendChild(li);

    taskInput.value = "";
}

function removeTask(button) {
    button.parentElement.remove();
}