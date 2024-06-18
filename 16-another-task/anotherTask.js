'use strict'

const list = {
    toDoList: [
        {
            title: 'Помыть посуду',
            id: 1,
            priority: 1
        }
    ],
    getTaskById: function (id) {
        return this.toDoList.find((element) => element.id === id);
    },
    addTask: function (title, id, priority) {
        if (!title || isNaN(id) || isNaN(priority)) {
            console.log('Входящие данные некорректные!')
            return false;
        }
        if (this.getTaskById(id)) {
            console.log(`По данному id: ${id} в списке уже имеется задача.`);
            return false;
        }
        this.toDoList.push({
            title: title,
            id: id,
            priority: priority
        });
        return true;
    },
    deleteTask: function (id) {
        if (!this.getTaskById(id)) {
            console.log(`Задачи с id: ${id} в списке задач нет.`);
            return false;
        }
        this.toDoList = this.toDoList.filter(el => el.id !== id)
    },
    changeTask: function (id, changeField) {
        const task = this.getTaskById(id);
        if (!task) {
            return false;
        }
        if (typeof changeField === 'number') {
            task.priority = changeField;
        } else if (typeof changeField === 'string') {
            task.title = changeField;
        }
    },
    sortTask: function (sortingType = 'asc') {
        const array = this.toDoList.slice();
        if (sortingType === 'asc') {
            array.sort((a, b) => a.priority - b.priority);
        } else if (sortingType === 'desc') {
            array.sort((a, b) => b.priority - a.priority);
        }
        return array;
    }
}

const newTask = {
    toDoList: []
}

newTask.getTaskById = list.getTaskById;
newTask.addTask = list.addTask;
newTask.changeTask = list.changeTask;
newTask.deleteTask = list.deleteTask;
newTask.sortTask = list.sortTask;


const newTaskGetTaskById = list.getTaskById.bind(newTask);
const newTaskAddTask = list.addTask.bind(newTask);
const newTaskChangeTask = list.changeTask.bind(newTask);
const newTaskDeleteTask = list.deleteTask.bind(newTask);
const newTaskSortTask = list.sortTask.bind(newTask);

console.log(newTask.toDoList)
newTaskAddTask('Task 1', 1, 1);
console.log(newTask.toDoList)
newTask.deleteTask(1);
console.log(newTask.toDoList)