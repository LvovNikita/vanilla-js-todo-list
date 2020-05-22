// Импортируем функцию для отрисовки задач в списке дел
import { createListItem } from '../controllers/createListItem.js';

export class Task {
  constructor(id, title, description, date, category) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.date = date;
    this.category = category;
  }

  // Метод render() позволяет отрисовать конкретную задачу в списке задач
  render() {
    // Передаём в качестве this в функцию createListItem новую задачу, которую создаём
    // т.к. render() вызывается внутри TaskList.addTask()
    // в контексте new_task.render()
    createListItem.call(this);
  }
};
