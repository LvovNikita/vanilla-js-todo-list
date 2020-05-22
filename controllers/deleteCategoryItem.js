// По нажатию кнопки Delete напротив категории
const deleteCategoryItem = function(event) {
  // TODO: не очень хорошо, что по номеру... но это уже связано со структурой DB
  let category = event.target.parentNode.childNodes[1].innerText;
  // Удаляем категорию из DOM
  event.target.parentNode.remove();
  // Берём массив из localStorage и удаляем в нём категорию
  let categories_array = JSON.parse(localStorage.getItem(0))['categories'];
  categories_array.splice(categories_array.indexOf(category), 1);
  // Сохраняем в localStorage новый объект с обновлённым массивом
  let categories_obj = {categories: categories_array};
  localStorage.setItem(0, JSON.stringify(categories_obj));
};
