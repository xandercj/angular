import { Component } from '@angular/core';
import { Model, MenuItem } from "./model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'appHealhtyFood';
  model = new Model();
  getName() {
    return this.model.user;
  }
  getMenuItems() {
		return this.model.menus;
  }
  getPendingMenuItems() {
	return this.model.menus.filter(function (menu) { return !menu.complete });
  }
  
  addItem(newItem) {
	if (newItem != "") {
	this.model.menus.push(new MenuItem(newItem, false));
  }
}
  
}