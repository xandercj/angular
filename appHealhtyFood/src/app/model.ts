export class Model {
	user;
	menus;
	constructor() {
		this.user = "Gina";
		this.menus = [new MenuItem("Wok de pasta oriental con verduras y gambas", true),
		new MenuItem("Pasta a la malagueña", false),
		new MenuItem("Crema de verduras", false),
		new MenuItem("Flan de manzana y coco", false)];
	}
	addMenu(name, complete) { 
		this.menus.push(new MenuItem(name, complete));
	}
	getMenus() {
		return this.menus;
	}
}
export class MenuItem {
	name;
	complete;
	constructor(name, complete) {
		this.name = name;
		this.complete = complete;
	}
	
	printMenuItem() {
		console.log("El menu es " + this.name + ". y está " + this.complete);
	}
}

let myData = new Model();
myData.addMenu("Otro menu", true);

let mymenus = myData.getMenus();

for (let i = 0; i < mymenus.length; i++) {
	console.log(`Menu ${i}: ${mymenus[i].name} y ${mymenus[i].complete}`);
}

console.log("Hello");
console.log("Apples");
console.log("This is a statement");
console.log("This is also a statement");

let myFunc = function(name, weather) {
console.log("Hello " + name + ".");
console.log("It is " + weather + " today");
};
myFunc("Adam", "sunny");