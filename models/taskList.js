// Импортируем класс Task задачи
import { Task } from './task.js';
// Импортируем класс Category категорий задач
import { Category } from './category.js';
// Импортируем фнукцию, которая генерирует случайные id
import { create_UUID } from '../controllers/uuid.js';
// Импортируем функцию, которая создаёт DOM-элементы списка задач
import { createListItem } from '../controllers/createListItem.js';

// Форма добавления новой задачи
export let addTaskForm = document.querySelector('#add_task_form');
// Форма добавления новой категории
export let addCategoryForm = document.querySelector('#add_category_form');

// Класс TaskList отвечает за список задач
export class TaskList {
  // Статический метод addTask позволяет добавлять задачи в массив tasks
  static addTask() {
    const new_task = new Task(
      create_UUID(),
      addTaskForm.task_title.value,
      addTaskForm.task_description.value,
      addTaskForm.task_date.value,
      addTaskForm.task_category.options[addTaskForm.task_category.options.selectedIndex].value
    );
    // Добавляем только если пользователь указал заголовок!
    if (new_task.title) {
      // Создаём элемент в localStorage
      localStorage.setItem(new_task.id, JSON.stringify(new_task));
      // Очистить форму после добавления задачи
      addTaskForm.reset();
      // Для отрисовки только добавленного элемента используется метод .render() класса Task (см. task.js)
      new_task.render();
    };
  };

  // TODO: так как у нас два почти одинаковых метода (addTask и addCategory)
  // может быть имеет смысл воспользоваться каким-то паттерном или колбэк-функцией...
  static addCategory() {
    const new_category_title = addCategoryForm.category_title.value
    const new_category = new Category(
      new_category_title
    );
    let categories;
    if (new_category.title) {
      // Проверим, есть ли сохранённые категории в localStorage...
      if (localStorage.getItem(0)) {
        categories = JSON.parse(localStorage.getItem(0));
      // ...если нет, создадим объект с массивом под категории
      } else {
        categories = {categories: []};
      };
    };
    // Создаём новую категорию только если её ещё нет в localStorage
    if (!categories.categories.includes(new_category_title)) {
      categories.categories.push(new_category_title);
      localStorage.setItem(0, JSON.stringify(categories));
      new_category.render();
    };
    addCategoryForm.reset();
  };

  // Статический метод для отрисовки всех задач, хранящихся в массиве tasks
  static renderAll() {
    // Отрисовываем категории (элемент localStorage с нулевым индексом)
    let categories_obj = JSON.parse(localStorage.getItem(0));
    for (let category_title of categories_obj.categories) {
      let current_category = new Category(category_title);
      current_category.render();
    };
    // Отрисовываем задачи
    // Используем Object.keys чтобы исключить из перебора свойства самого localStorage.
    let tasks_keys = Object.keys(localStorage);
    // удаляем из ключей нулевой индекс (массив с категориями)
    tasks_keys.shift();
    for (let task_key of tasks_keys) {
        // Передаём в качестве контекста объект из localStorage
        let current_task_obj = JSON.parse(localStorage.getItem(task_key));
        createListItem.call(current_task_obj);
    };
  };
};
