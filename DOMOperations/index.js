function AddTask(name){
    var div = document.createElement('div');
    div.innerHTML = "<li>" +
                        "<span><i class=\"fa fa-trash\"></i></span>" + name +
                    "</li>";

    var created = div.firstChild;
    created.firstChild.addEventListener("click", () => DeleteTask(created.firstChild))
    document.getElementsByTagName("ul")[0].append(created);
}

function DeleteTask(element) {
    element.parentElement.remove();
}

document.getElementById("addToDo").addEventListener("keypress", (event) => {
    if (event.key === 'Enter') {
        AddTask(event.target.value);
    }
});

var trashIcons = document.getElementsByClassName("fa-trash");
Array.prototype.forEach.call(trashIcons, function(icon) {
    icon.parentElement.addEventListener("click", () => DeleteTask(icon.parentElement));
});
