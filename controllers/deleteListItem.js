// По нажатию кнопки DELETE в списке задач
const deleteListItem = function() {
  let list_item_id = event.target.parentNode.id;
  document.getElementById(list_item_id).remove();
  localStorage.removeItem(list_item_id);
};
