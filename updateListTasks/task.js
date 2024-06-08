const list = ['Task 1', 'Task 2', 'Task 3', 'Task 4'];
console.log(list);

// Добавление в конец нового элемента
function addTask(task) {
    list.push(task);
}


addTask('Task 5');
console.log(list);

// Удаление задачи по названию
function deleteTask(task) {
    if (list.includes(task)) {
        list.splice(list.indexOf(task), 1);
    }
}

deleteTask('Task 3');
console.log(list)

// Перенос элемента в начало листа
function replaceTask(task) {
    if (list.includes(task)) {
        const el = list.splice(list.indexOf(task), 1)[0];
        list.unshift(el)
    }
}

replaceTask('Task 4');
console.log(list)

