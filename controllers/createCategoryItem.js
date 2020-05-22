export const createCategoryItem = function() {
  // Сначала заполняем категориями sidenav
  let category_elem_sidenav = document.createElement('div');
  category_elem_sidenav.innerHTML = `
    <a href="#">${this.title}</a>
    <button class="btn btn-light delete_category_btn float-right" onclick="deleteCategoryItem(event)">Delete</button>
  `;
  document.querySelector(".category_list").appendChild(category_elem_sidenav);
  // Затем добавляем категории в виде опций в select в блоке добавления задач
  let category_elem_select = document.createElement('option');
  category_elem_select.innerText = this.title;
  category_elem_select.setAttribute('value', this.title);
  document.getElementsByName('task_category')[0].append(category_elem_select);
};
