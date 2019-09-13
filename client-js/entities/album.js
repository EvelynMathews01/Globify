export class Album {
	id = 0;
	name = '';
	image = '';
	tracks = [];

	constructor(id, name, image, tracks) {
		this.id = id;
		this.name = name;
		this.image = image;
		this.tracks = tracks;
	}
}
