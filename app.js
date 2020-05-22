// Импортируем класс Списка задач
import { TaskList } from './models/taskList.js';
// Импортируем класс Задач
import { Task } from './models/task.js';
// Импорируем форму #add_task_form для добавления задач
import { addTaskForm } from './models/taskList.js';
// Импортируем форму #add_category_form для добавления категорий
import { addCategoryForm } from './models/taskList.js';

// TODO: при загрузке страницы отрисовывать все существующие задачи
TaskList.renderAll();

// Событие для добавления новой задачи
addTaskForm.addEventListener('submit', () => {
  event.preventDefault();
  TaskList.addTask();
});

// Событие для добавления новой категории
addCategoryForm.addEventListener('submit', () => {
  event.preventDefault();
  TaskList.addCategory();
});
