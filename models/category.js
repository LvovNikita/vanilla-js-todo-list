// Импортируем фнукцию для отрисовки категорий
import { createCategoryItem } from '../controllers/createCategoryItem.js';
// Импортируем класс списка дел
import { TaskList } from './taskList.js';

export class Category {
  constructor(title) {
    this.title = title;
  };

  // Метод render отрисовывает конкретную категорию в sidenav
  render() {
    createCategoryItem.call(this);
  };
};
