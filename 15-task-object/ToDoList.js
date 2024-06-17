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
    getIndexById: function (id) {
        return this.toDoList.findIndex(el => el.id === id);
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
list.addTask('Погулять', 2, 1);
list.changeTask(2, 'Поспать');
list.changeTask(2, 5);
console.log(list.sortTask('desc'));