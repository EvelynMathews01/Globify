export class User {
	id = 0;
	displayName = '';
	imageUrl = '';

	constructor(id, name, image) {
		this.id = id;
		this.displayName = name;
		this.imageUrl = image;
	}
}
