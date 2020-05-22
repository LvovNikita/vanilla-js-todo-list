// По нажатию кнопки Edit в списке дел
const editListItem = function() {
  let list_item_id = event.target.parentNode.id;
  let task_to_edit = JSON.parse(localStorage.getItem(list_item_id));
  let modal_body = document.querySelector('#editTaskModal').getElementsByClassName('modal-body')[0];
  // Input с id здесь присутствует в скрытом виде для удобства передачи информации об id в другие функции
  modal_body.innerHTML = `
    <form id="edit_task_form">
      <input type="hidden" class="form-control" name="edit_task_id" value="${task_to_edit.id}">
      <label for="edit_task_title">Task title:</label>
      <input type="text" class="form-control" name="edit_task_title" value="${task_to_edit.title}">
      <label for="edit_task_title">Task description:</label>
      <input type="text" class="form-control" name="edit_task_description" value="${task_to_edit.description}">
      <label for="edit_task_date">Task deadline:</label>
      <input type="date" class="form-control" name="edit_task_date" value="${task_to_edit.date}">
      <label for="edit_task_category">Task category:</label>
      <select class="form-control" name="edit_task_category" placeholder="Category">
        <option>${task_to_edit.category}</option>
      </select>
    </form>
  `;
  let categories_obj = JSON.parse(localStorage.getItem(0));
  // If нужен на случай, если категории нет в localStorage (например Inbox)
  if (categories_obj.categories.indexOf(task_to_edit.category) > -1) {
    // Удалим ту категорию, которая уже по-умолчанию выбрана, чтобы не дублировать её
    categories_obj.categories.splice(categories_obj.categories.indexOf(task_to_edit.category), 1);
  };
  for (category_index in categories_obj.categories) {
    // Создаём новый элемент option с value
    let category_option_elem = document.createElement('option');
    category_option_elem.value = categories_obj.categories[category_index];
    category_option_elem.innerText = categories_obj.categories[category_index];
    // Добавляем его в список
    document.getElementsByName('edit_task_category')[0].appendChild(category_option_elem);
  }
};
