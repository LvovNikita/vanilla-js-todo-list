// Используется как для отрисовыки одной задачи при добалвении новой задачи,
// так и для отрисовки списка задач при загрузке страницы
export const createListItem = function() {
  // Так как иногда из localStorage может быть передан последний (пустой) объект
  // отрисуем только если this — непустой
  if (this) {
    let task_item_elem = document.createElement('li');
    task_item_elem.classList.add('list-group-item');
    task_item_elem.id = this.id;
    task_item_elem.innerHTML = `
      ${this.title} <br>
      <small>
      <i style="display: block">${this.description}</i>
      <span style="display: block"><u>${this.category}</u>, ${this.date}</span>
      </small>
      <button type="button" class="btn btn-light edit_task_btn" onclick="editListItem()" data-toggle="modal" data-target="#editTaskModal">Edit</button>
      <button type="button" class="btn btn-light delete_task_btn" onclick="deleteListItem()">Delete</button>
    `;
    document.querySelector('.list-group').appendChild(task_item_elem);
  };
};
