const inp = document.getElementById('newTodoInput');
const btn = document.getElementById('addTodoBtn');
const arr = [];
const listBody = document.getElementById('todoList');

// add item to list on click function
function addItem() {
    console.log('hello');
    let inpItem = inp.value;
    if (inpItem === '') {
        alert('Add item first');
        return;
    }
    arr.push(inpItem);
    console.log(arr);
    listBody.innerHTML = '';
    arr.map((item, index) => {
        listBody.innerHTML += `<li>${item}</li>`
    })
    inp.value = '';
}

