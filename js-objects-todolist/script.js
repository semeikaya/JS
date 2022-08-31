const todoList = {
    items: [
        {
            text: 'Завершить текущий челлендж',
            completed: false,
        },
        {
            text: 'Отдохнуть во время перерыва',
            completed: false,
        },
        {
            text: 'Помочь напарнику понять код',
            completed: false,
        },
        {
            text: 'Выиграть в мафию',
            completed: true,
        },
    ],

    printAll: function () {
        for (const ar of todoList.items) {
            console.log(ar.text);
        }
    },

    add: function (text) {
        todoList.items.unshift({text: text, completed: false})
     },

    remove: function (index) {
        todoList.items.splice(index, 1)
    },

    print: function (index) { },

    complete: function (index) { },
};


todoList.remove(0)
todoList.printAll()