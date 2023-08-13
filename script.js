window.addEventListener('load', () => {
    const form = document.querySelector("#new-task-form")
    const input = document.querySelector("#new-task-input")
    const list_el = document.querySelector("#tasks")

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const task = input.value;

        if(!task){
            alert("Please fill out the task")
            return;
        }

        const task_el = document.createElement("div")
        task_el.classList.add("task")

        const task_content_el = document.createElement("div")
        task_content_el.classList.add("content")

        task_el.appendChild(task_content_el)

        const task_input_el = document.createElement("input")
        task_input_el.classList.add("text")
        task_input_el.type = "text"
        task_input_el.value = task
        task_input_el.setAttribute("readonly", "readonly")

        task_content_el.appendChild(task_input_el)

        const task_actions_el = document.createElement("div")
        task_actions_el.classList.add("actions")

        const task_edit_el = document.createElement("button")
        task_edit_el.classList.add("edit")
        task_edit_el.innerHTML = "Edit"

        const task_delete_el = document.createElement("button")
        task_delete_el.classList.add("delete")
        task_delete_el.innerHTML = "Delete"

        task_actions_el.appendChild(task_edit_el)
        task_actions_el.appendChild(task_delete_el)

        task_el.appendChild(task_actions_el)


        list_el.appendChild(task_el)

        input.value = "";

    })
})



























// const input = document.querySelector("#new-task-input")
// const submit = document.querySelector("#new-task-submit")
// const text = document.querySelector(".text")
// const editButton = document.querySelector(".edit")
// const deleteButton = document.querySelector(".delete")

// submit.addEventListener("click", () => {
//     const task = input.value

// })

// const addTask = (item) => {

// }