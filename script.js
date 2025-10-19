// for the button

document.addEventListener("DOMContentLoaded", function () {
    const button = document.querySelector(".button");
    const buttonText = button.querySelector("p");
    const input = document.getElementById("name");
    const taskList = document.querySelector(".tasklist");

    let ul = document.createElement("ul");
    taskList.appendChild(ul);

    function addTask() {
        const taskText = input.value.trim();
        if (taskText !== "") {
            const li = document.createElement("li");

            const textSpan = document.createElement("span");
            textSpan.textContent = taskText;
            li.appendChild(textSpan);

            // Delete button span
            const deleteBtn = document.createElement("span");
            deleteBtn.textContent = "❌";
            deleteBtn.style.marginLeft = "10px";
            deleteBtn.style.cursor = "pointer";
            deleteBtn.style.color = "#ed24a0";
            deleteBtn.style.fontSize = "1em";

            // **Append the delete button to the li**
            li.appendChild(deleteBtn);

            // Append li to the ul
            ul.appendChild(li);

            ul.appendChild(li);
            input.value = "";

            const originalText = buttonText.textContent;

            // Button animation
            button.style.transform = "scale(1.2)";
            button.style.backgroundColor = "white";
            buttonText.style.color = "black";
            buttonText.textContent = "Task added!";

            setTimeout(() => {
                button.style.transform = "scale(1)";
                button.style.backgroundColor = "#ed24a0";
                buttonText.style.color = "white";
                buttonText.textContent = originalText;
            }, 1000);

            // Toggle completed on task click
            textSpan.addEventListener("click", function () {
                textSpan.classList.toggle("completed");
            });

            // Delete task on delete button click
            deleteBtn.addEventListener("click", function () {
                li.remove();
            });
        }
    }

    // Add task on button click
    button.addEventListener("click", addTask);

    // Add task on Enter key press
    input.addEventListener("keypress", function (e) {
        if (e.key === "Enter") {
            addTask();
        }
    });
});
