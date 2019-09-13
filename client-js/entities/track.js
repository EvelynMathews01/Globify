export class Track {
	id = 0;
	name = '';
	track_number = 0;
	track_duration = 0;

	constructor(id, name, track_number, track_duration) {
		this.id = id;
		this.name = name;
		this.track_number = track_number;
		this.track_duration = track_duration;
	}
}
