function AddTask(name){
    var div = document.createElement('div');
    div.innerHTML = "<li>" +
                        "<span><i class=\"fa fa-trash\"></i></span>" + name +
                    "</li>";

    var created = div.firstChild;
    created.firstChild.addEventListener("click", () => deleteTask(created.firstChild))
    document.querySelector('#todo-list').append(created);
}

function deleteTask(element) {
    element.parentElement.remove();
}

document.getElementById("addToDo").addEventListener("keypress", (event) => {
    if (event.key === 'Enter') {
        AddTask(event.target.value);
    }
});

var trashIcons = document.getElementsByClassName("fa-trash");
Array.prototype.forEach.call(trashIcons, function(icon) {
    icon.parentElement.addEventListener("click", () => deleteTask(icon.parentElement));
});
