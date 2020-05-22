// Дата по умолчанию в блоке добавления задач
let today = new Date();
let date_input = document.getElementsByName('task_date')[0];
date_input.value = today.getFullYear() + '-' + ('0' + (today.getMonth() + 1)).slice(-2) + '-' + ('0' + today.getDate()).slice(-2);
