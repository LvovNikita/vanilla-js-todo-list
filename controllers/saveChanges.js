// Импортируем класс элемента списка дел
import { Task } from '../models/task.js'

// Кнопка Save в модальном окне изменения задачи
let saveChangesButton = document.querySelector('#save_changes_button');

// Событие кнопки SaveChanges при редактировании задачи
saveChangesButton.addEventListener('click', function() {
  // Получаем данные формы
  let list_item_id = document.getElementsByName('edit_task_id')[0].value;
  let task_title = document.getElementsByName('edit_task_title')[0].value;
  let task_description = document.getElementsByName('edit_task_description')[0].value;
  let task_date = document.getElementsByName('edit_task_date')[0].value;
  let categoty_input_elem = document.getElementsByName('edit_task_category')[0];
  let task_category = categoty_input_elem.options[categoty_input_elem.options.selectedIndex].value;
  // Обновляем элемент в localStorage
  localStorage.setItem(
    list_item_id,
    JSON.stringify({
      id: list_item_id,
      title: task_title,
      description: task_description,
      date: task_date,
      category: task_category
    })
  );
  // Скрытие модального окна работает только с jQuery!
  $('#editTaskModal').modal('hide');
  // Отрисовываем обновлённый элемент в DOM
  const new_task = new Task(
    list_item_id,
    task_title,
    task_description,
    task_date,
    task_category
  );
  new_task.render();
  // Удаляем предыдущую версию элемент из DOM
  document.getElementById(list_item_id).remove();
});
